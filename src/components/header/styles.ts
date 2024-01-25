import styled, { css } from 'styled-components'
import { breakpoints } from '../../breakpoints/breakepoints'

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-background']};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    @media ${breakpoints.md} {
      padding: 2rem 1rem;
    }
  }
`
export const CartAndLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

interface PropsButton {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<PropsButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 8px;
  border: none;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  cursor: inherit;

  @media ${breakpoints.sm}, ${breakpoints.xs} {
    p {
      display: none;
    }
  }

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors['base-white']};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ theme, variant }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};

    span {
      background: ${theme.colors[`brand-${variant}-dark`]};
    }
  `}

  ${({ theme, variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors['brand-purple']};
      }
    `}
`
