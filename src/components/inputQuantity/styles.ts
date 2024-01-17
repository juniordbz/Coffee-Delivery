import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 118px;
  height: 38px;
`
export const ShopCart = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors['brand-purple-dark']};
  border-radius: 8px;
  border: none;
  svg {
    color: ${({ theme }) => theme.colors['base-white']};
  }
  &:hover {
    transition: 0.2s;
    background: ${({ theme }) => theme.colors['brand-purple']};
  }
`

export const ChangeNumber = styled.div`
  display: flex;
  width: 72px;
  height: 38px;
  border: none;
  border-radius: 8px;
  padding: 12px 8px;
  background: ${({ theme }) => theme.colors['base-button']};

  button {
    border: none;
    color: ${({ theme }) => theme.colors['brand-purple']};
    background: transparent;
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
    line-height: 1rem;
  }
`
