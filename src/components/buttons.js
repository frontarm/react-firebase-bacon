import styled, { css } from 'styled-components/macro'

import { beaconRing, colors, shadows } from 'theme'

export const StyledButton = styled.button`
  border-radius: 9999px;
  background-color: ${colors.primary.default};
  border: none;
  box-shadow: ${shadows.bevel()}, ${shadows.drop()};
  color: ${colors.text.reverse};
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  line-height: 1rem;
  margin: 1rem 0;
  outline: none;
  padding: 0.5rem;
  position: relative;
  transition: opacity 200ms ease-out;
  width: 100%;

  ${beaconRing('::after', '9999px')}

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`
