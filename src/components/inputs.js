import React from 'react'
import styled from 'styled-components/macro'

import { beaconRing, colors, radii, shadows } from 'theme'

const StyledInputOutline = styled.div``
const StyledInputWrapper = styled.div`
  position: relative;
`
const StyledInput = styled.input`
  border: 1px solid ${colors.border.field};
  border-radius: ${radii.small};
  box-shadow: ${shadows.sunk()};
  display: block;
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  width: 100%;

  ${beaconRing(` + ${StyledInputOutline}`, radii.small)}
`

export const Input = props => (
  <StyledInputWrapper>
    <StyledInput {...props} />
    <StyledInputOutline />
  </StyledInputWrapper>
)
