import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  align-items: space-between;
  gap: 0.75rem;
`

export const PaymentCard = styled.button`
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

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  &:focus {
    border-color: 1px solid ${({ theme }) => theme.colors['brand-purple']};
  }
`
