import React from 'react'
import styled, { css } from 'styled-components/macro'
import { beaconRing, colors, radii, shadows } from './theme'

export const Field = ({ label, message, onChange, ...inputProps }) => (
  <StyledFieldLabel>
    {label}
    <Input {...inputProps} onChange={event => onChange(event.target.value)} />
    {message && <StyledFieldMessage>{message}</StyledFieldMessage>}
  </StyledFieldLabel>
)

export const Input = props => (
  <StyledInputWrapper>
    <StyledInput {...props} />
    <StyledInputOutline />
  </StyledInputWrapper>
)

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

export const StyledCard = styled.div`
  background-color: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  border-radius: ${radii.medium};
  box-shadow: ${shadows.card()};
  margin: 0 auto;
  max-width: 380px;
  padding: 1rem 3rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
`

export const StyledClamp = styled.div`
  margin: 0 auto;
  max-width: 380px;
  padding: 4rem 1rem;
`

export const StyledFieldLabel = styled.label`
  color: ${colors.text.label};
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 0.5rem;
`

export const StyledFieldMessage = styled.div`
  color: ${colors.text.error};
  font-size: 0.85rem;
  line-height: 1.4rem;
  margin: 0.25rem 0 1rem;
  text-align: left;
`

export const StyledHaiku = styled.p`
  color: ${colors.text.alt};
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 1.5rem 0;
  text-align: center;
`

const StyledInputOutline = styled.div``
const StyledInputWrapper = styled.div`
  position: relative;
`
export const StyledInput = styled.input`
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

export const StyledIssue = styled.p`
  color: ${colors.text.error};
  font-size: 0.75rem;
  margin-top: 0.75rem;
  text-align: center;
`
