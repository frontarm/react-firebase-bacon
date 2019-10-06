import React from 'react'
import NarrowCardLayout from 'components/narrowCardLayout'
import { StyledHaiku } from 'components/typography'

export default function Privacy({ navigate }) {
  return (
    <NarrowCardLayout navigate={navigate}>
      <StyledHaiku>
        Thanks for joining in!
        <br />
        When we're ready to wow you,
        <br />
        You'll get an email.
      </StyledHaiku>
    </NarrowCardLayout>
  )
}
