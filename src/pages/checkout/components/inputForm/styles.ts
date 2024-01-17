import styled from 'styled-components'

export const InputFormContainer = styled.input`
  display: flex;
  align-items: baseline;
  justify-content: center;
  height: 2.625rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;
  transition: 0.4s;
  width: 100%;

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const OptionInput = styled.div`
  position: absolute;
  top: 8.05rem;
  left: 30rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;
`
