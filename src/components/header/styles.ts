import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors['base-background']};
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

  ${({ theme, variant }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ theme, variant }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors['brand-purple']};
      }
    `}
`
