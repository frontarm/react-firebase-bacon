import React, { useEffect, useState } from 'react'
import { css } from 'styled-components/macro'

import { functions } from 'backend'
import { StyledButton } from 'components/buttons'
import NarrowCardLayout from 'components/narrowCardLayout'
import { Field } from 'components/fields'
import { StyledLoadingBar, StyledSpinner } from 'components/loadingIndicators'
import { StyledHaiku, StyledIssue } from 'components/typography'
import { issuesIntersection } from 'utils/issues'

const postResponse = functions.httpsCallable('actions-postResponse')
const getResponseCount = functions.httpsCallable('actions-getResponseCount')

const messages = {
  base: {
    error: 'Something went wrong',
  },
  email: {
    invalid: "That email address doesn't look quite right.",
    'not-unique': 'This email has already been used.',
    required: "You'll need an email to join the list.",
  },
  name: {
    required: 'Who are you, though?',
  },
}

function validate({ email, name }) {
  let issues = {}
  if (!name) {
    issues.name = 'required'
  }
  if (!email) {
    issues.email = 'required'
  } else if (!/.+@.+/.test(email)) {
    issues.email = 'invalid'
  }
  return Object.keys(issues).length ? issues : undefined
}

export default function Landing({ navigate }) {
  const [responseCount, setResponseCount] = useState(undefined)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({
    type: 'fresh',
  })
  const params = { name, email }

  useEffect(() => {
    let hasBeenUnmounted = false
    getResponseCount().then(
      ({ data: count }) => {
        if (!hasBeenUnmounted) {
          setResponseCount(count || 0)
        }
      },
      () => {
        if (!hasBeenUnmounted) {
          // There's no need to display an error if we can't get the count.
          // Just set it to zero to hide the count.
          setResponseCount(0)
        }
      },
    )
    return () => {
      hasBeenUnmounted = true
    }
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    const issues = validate(params)
    if (issues) {
      setStatus({
        type: 'error',
        issues,
      })
      return
    }

    setStatus({
      type: 'pending',
    })

    try {
      const { data } = await postResponse(params)
      if (data.status === 'error') {
        setStatus({
          type: 'error',
          issues: data.issues || {
            base: 'error',
          },
          params,
        })
      } else {
        navigate('/thanks')
      }
    } catch (error) {
      console.error(error)
      setStatus({
        type: 'error',
        issues: {
          base: 'error',
        },
      })
    }
  }

  const canSubmit = responseCount !== undefined && status.type !== 'pending'
  const submitIssues = status.issues || {}
  const validationIssues = validate(params)
  const unresolvedIssues =
    issuesIntersection(submitIssues, validationIssues) || {}

  // As this issue depends on server state, it won't be picked up by validate,
  // and thus it won't be in the intersection either.
  if (
    status.issues &&
    status.issues.email === 'not-unique' &&
    status.params.email === email
  ) {
    unresolvedIssues.email = 'not-unique'
  }

  return (
    <NarrowCardLayout navigate={navigate}>
      <form onSubmit={handleSubmit}>
        <StyledHaiku>
          A social network, <br />
          Where you are the customer. <br />
          Ad free. Launching soon.
        </StyledHaiku>
        <Field
          label="Your name"
          message={messages.name[unresolvedIssues.name]}
          value={name}
          onChange={setName}
        />
        <Field
          label="Your email"
          message={messages.email[unresolvedIssues.email]}
          type="email"
          value={email}
          onChange={setEmail}
        />
        {submitIssues.base && (
          <StyledIssue>{messages.base[submitIssues.base]}</StyledIssue>
        )}
        <StyledButton type="submit" disabled={!canSubmit}>
          {responseCount === undefined ? (
            <StyledSpinner size="1rem" />
          ) : responseCount > 1 ? (
            `Vouch with ${responseCount} others`
          ) : (
            `I'll vouch for that`
          )}
        </StyledButton>
      </form>
      <StyledLoadingBar
        active={status.type === 'pending'}
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
        `}
      />
    </NarrowCardLayout>
  )
}
