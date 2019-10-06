import styled from 'styled-components/macro'

import { dimensions, media } from 'theme'

export const StyledNarrowClamp = styled.div`
  margin: 0 auto;
  max-width: ${dimensions.narrowClampWidth};
  padding: 4rem 1rem;

  ${media.phoneOnly`
    padding: 1rem;
  `}
`
