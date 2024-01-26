import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors['base-error']};
  }
`

interface InputFormContainerProps {
  hasError: boolean
}

export const InputFormContainer = styled.div<InputFormContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 2.625rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;
  transition: 0.4s;
  width: 100%;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors['base-error']};
    `}
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  //remove dropdawn input of select
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  //remove arrow input of type number
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`

export const RightText = styled.p`
  color: ${({ theme }) => theme.colors['base-label']};
  font-size: 0.75rem;
  padding: 0 0.75rem;
  font-style: italic;
`
