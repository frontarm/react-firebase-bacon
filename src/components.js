import React from 'react'
import styled, { css } from 'styled-components/macro'

export const Field = ({ label, message, onChange, ...inputProps }) => (
  <StyledFieldLabel>
    {label}
    <StyledInput
      {...inputProps}
      onChange={event => onChange(event.target.value)}
    />
    {message && <StyledFieldMessage>{message}</StyledFieldMessage>}
  </StyledFieldLabel>
)

export const StyledButton = styled.button`
  border-radius: 9999px;
  background-color: rgba(16, 32, 48);
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.12) inset,
    -1px -1px 1px rgba(0, 0, 0, 0.08) inset, 0 0 5px 3px rgba(16, 32, 48, 0.01),
    0 0 2px 0px rgba(16, 32, 48, 0.02);
  color: rgba(255, 255, 255, 0.93);
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  line-height: 1rem;
  margin: 1rem 0;
  padding: 0.5rem;
  position: relative;
  transition: opacity 200ms ease-out;
  width: 100%;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`

export const StyledCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #eaecf2;
  border-radius: 8px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.01), 0 0 2px 0px rgba(0, 0, 0, 0.02);
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
  color: #334455;
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 0.5rem;
`

export const StyledFieldMessage = styled.div`
  color: #733939;
  font-size: 0.85rem;
  line-height: 1.4rem;
  margin: 0.25rem 0 1rem;
  text-align: left;
`

export const StyledHaiku = styled.p`
  color: #607080;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 1.5rem 0;
  text-align: center;
`

export const StyledInput = styled.input`
  border: 1px solid #e0e8ec;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(16, 32, 48, 0.03) inset;
  display: block;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
`

export const StyledIssue = styled.p`
  color: #733939;
  font-size: 0.75rem;
  margin-top: 0.75rem;
  text-align: center;
`
