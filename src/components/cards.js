import styled from 'styled-components/macro'

import { colors, radii, shadows } from 'theme'

export const StyledCard = styled.div`
  background-color: ${colors.background.card};
  border: 1px solid ${colors.border.default};
  border-radius: ${radii.medium};
  box-shadow: ${shadows.card()};
  margin: 0 auto;
  max-width: 380px;
  position: relative;
  overflow: hidden;
  z-index: 0;
`
