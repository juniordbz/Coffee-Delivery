import styled from 'styled-components'
import { breakpoints } from '../../../../breakpoints/breakepoints'

export const IconTextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;

  svg {
    min-width: 22px;
    min-height: 22px;
  }

  @media ${breakpoints.md} {
    div p {
      margin-bottom: 1rem;
    }
  }
`
