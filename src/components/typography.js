import styled from 'styled-components/macro'

import { colors, media } from 'theme'

export const StyledHaiku = styled.p`
  color: ${colors.text.alt};
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 1.5rem 0;
  text-align: center;

  ${media.smallPhoneOnly`
    font-size: 0.9rem;
    line-height: 1.4rem;
  `}
`

export const StyledIssue = styled.p`
  color: ${colors.text.error};
  font-size: 0.75rem;
  margin-top: 0.75rem;
  text-align: center;
`
