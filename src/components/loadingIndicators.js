import styled, { css, keyframes } from 'styled-components/macro'

import { colors } from 'theme'

const loadingBarKeyframes = keyframes`
  0% {
    transform: scaleX(0);
  }
  10% {
    transform: scaleX(0.3);
  }
  50% {
    transform: scaleX(0.7);
  }
  90% {
    transform: scaleX(0.8);
  }
  100% {
    transform: scaleX(1);
  }
`

export const StyledLoadingBar = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${props => props.color || colors.primary.default};
  background-size: 35px 35px;
  z-index: 9999;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset;
  transition: transform ease-in 300ms, opacity ease-in 300ms;
  transition-delay: 0;
  transform-origin: left center;
  transform: scaleX(0);
  opacity: 0;
  bottom: 0;

  ${props =>
    props.active &&
    css`
      animation: ${loadingBarKeyframes} 10s ease-out;
      animation-fill-mode: forwards;
      opacity: 1;

      /**
      * Wait 100ms before showing any loading bar. This should be long enough
      * prevent the display of a loading bar for instant page loads, while
      * short enough to help the user know that something is happening on
      * pages with async data.
      */
      transition-delay: 100ms;
    `}
`

// ---

const spinnerRotatorAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`

export const StyledSpinner = styled.div`
  position: ${props => props.position};
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid ${props => props.color};
  border-left-color: transparent;
  display: inline-block;
  width: ${props => props.size};
  height: ${props => props.size};
  animation: ${spinnerRotatorAnimation} 1.8s linear infinite;
`

StyledSpinner.defaultProps = {
  position: 'relative',
  color: colors.primary.light,
  size: '100%',
}
