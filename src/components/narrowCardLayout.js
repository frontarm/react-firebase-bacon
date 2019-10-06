import React from 'react'
import { css } from 'styled-components/macro'

import { StyledCard } from 'components/cards'
import { Link, StyledLink } from 'components/links'
import logo from 'media/logo.svg'
import vouch from 'media/vouch.svg'
import { colors, dimensions, media } from 'theme'

export default function NarrowCardLayout({ children, navigate }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: ${dimensions.narrowClampWidth};
        padding: 4rem 1rem;

        ${media.phoneOnly`
        padding: 1rem;
      `}
      `}>
      <StyledCard
        css={css`
          padding: 1rem 3rem;

          ${media.smallPhoneOnly`
          padding: 1rem 2rem;
        `}
        `}>
        <Link
          href="/"
          navigate={navigate}
          css={css`
            display: block;
            text-align: center;
          `}>
          <img
            src={logo}
            alt="Logo"
            css={css`
              display: block;
              margin: 0 auto;
              margin-bottom: 0.75rem;
              margin-top: 1rem;
              width: 2rem;
            `}
          />
          <img
            src={vouch}
            alt="Vouch"
            css={css`
              height: 1rem;
            `}
          />
        </Link>
        {children}
      </StyledCard>
      <footer
        css={css`
          color: ${colors.text.alt};
          font-size: 80%;
          text-align: center;
          margin: 0.5rem auto 2rem;
        `}>
        <StyledLink color={colors.text.alt} href="/privacy" navigate={navigate}>
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
          href="https://github.com/frontarm/vouch-landing"
          navigate={navigate}>
          See source at GitHub
        </StyledLink>
      </footer>
    </div>
  )
}
