import styled, { css } from 'styled-components'

interface InputProps {
  size?: 'medium' | 'small'
}

export const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 100%;
`

export const ChangeNumber = styled.div<InputProps>`
  display: flex;
  width: 72px;
  height: 100%;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};

  button {
    border: none;
    color: ${({ theme }) => theme.colors['brand-purple']};
    background: transparent;
    line-height: 0;
  }

  button:hover {
    transition: 0.2s;
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    text-align: center;
  }

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.56rem;
    `}
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.4rem 0.56rem;
    `}
`
