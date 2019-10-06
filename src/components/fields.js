import React from 'react'
import styled from 'styled-components/macro'

import { Input } from 'components/inputs'
import { colors } from 'theme'

const StyledFieldLabel = styled.label`
  color: ${colors.text.label};
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 0.5rem;
`

const StyledFieldMessage = styled.div`
  color: ${colors.text.error};
  font-size: 0.85rem;
  line-height: 1.4rem;
  margin: 0.25rem 0 1rem;
  text-align: left;
`

export const Field = ({ label, message, onChange, ...inputProps }) => (
  <StyledFieldLabel>
    {label}
    <Input {...inputProps} onChange={event => onChange(event.target.value)} />
    {message && <StyledFieldMessage>{message}</StyledFieldMessage>}
  </StyledFieldLabel>
)
