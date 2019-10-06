import React from 'react'
import styled from 'styled-components/macro'

import { beaconRing, colors } from 'theme'

export const Link = ({ children, href, navigate, ...rest }) => {
  const handleClick = event => {
    // Let the browser handle the event directly if:
    // - The user used the middle/right mouse button (to open a new tab/window)
    // - The user was holding a modifier key
    // - The href is fully qualified, or a mailto link
    if (
      event.button !== 0 ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      /^[a-z]+:/i.test(href) ||
      href.substr(0, 2) === '//'
    ) {
      return
    }

    // Stop the browser from loading the linked page
    event.preventDefault()

    // Then use the supplied `navigate` function to handle navigation
    navigate(href)
  }

  return (
    <a {...rest} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}

export const StyledLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: underline;
  position: relative;

  ${beaconRing('::after', '9999px')}
`

StyledLink.defaultProps = {
  color: colors.primary.default,
}
