import styled from 'styled-components'
import { breakpoints } from '../../breakpoints/breakepoints'

export const LayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 70rem;
    margin-left: auto;
    margin-right: auto;

    @media ${breakpoints.lg} {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`
