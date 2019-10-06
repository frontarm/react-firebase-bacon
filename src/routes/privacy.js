import React from 'react'
import { css } from 'styled-components/macro'

import { StyledCard } from 'components/cards'
import { StyledNarrowClamp } from 'components/clamps'
import { Link, StyledLink } from 'components/links'
import { StyledHaiku } from 'components/typography'
import { ReactComponent as BrandLogo } from 'media/logo.svg'
import { ReactComponent as BrandText } from 'media/vouch.svg'
import { colors } from 'theme'

export default function Privacy({ navigate }) {
  return (
    <StyledNarrowClamp>
      <StyledCard>
        <Link
          href="/"
          navigate={navigate}
          css={css`
            display: block;
          `}>
          <BrandLogo
            css={css`
              height: 2rem;
              margin: 1rem auto 0;
              width: 100%;
            `}
          />
          <BrandText
            css={css`
              height: 1rem;
              margin: 0.5rem auto 0;
              width: 100%;
            `}
          />
        </Link>
        <StyledHaiku>
          Your privacy is
          <br />
          Very important to us
          <br />I wrote a poem
        </StyledHaiku>
      </StyledCard>
      <footer
        css={css`
          color: ${colors.text.alt};
          font-size: 80%;
          text-align: center;
          margin: 0.5rem auto 2rem;
        `}>
        <StyledLink
          color={colors.text.alt}
          href="/privacy"
          navigate={navigate}
          size="80%">
          Privacy Policy
        </StyledLink>
        <span
          css={css`
            margin: 0 0.5rem;
          `}>
          &middot;
        </span>
        <StyledLink
          color={colors.text.alt}
          href="https://github.com/frontarm/react-firebase-bacon"
          size="80%">
          See source at GitHub
        </StyledLink>
      </footer>
    </StyledNarrowClamp>
  )
}
