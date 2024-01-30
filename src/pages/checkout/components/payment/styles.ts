import styled, { css } from 'styled-components'

export const PaymentContainer = styled.div`
  padding-right: 0.75rem;

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors['brand-purple-light']};
      border-color: ${theme.colors['brand-purple']};

      &:hover {
        background: ${theme.colors['brand-purple-light']};
      }
    `}
  }
`

export const PaymentCard = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 11.13rem;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  gap: 0.75rem;
  font-size: ${({ theme }) => theme.textSizes['components-button-s']};
  padding-left: 1rem;

  div {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  user-select: none;
`
