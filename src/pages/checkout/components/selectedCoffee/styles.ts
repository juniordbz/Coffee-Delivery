import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SelectedCoffeeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  height: auto;
  width: 100%;
  max-width: 448px;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 0 32px 0 32px;
  padding: 2.5rem;
`
export const SelectedCoffeeCart = styled.div`
  display: flex;
  justify-content: center;

  > img {
    width: 4rem;
    height: 4rem;
  }
`
export const CoffeeAddRemove = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1.25rem;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border: none;
  background: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors['base-text']};
  text-transform: uppercase;
  padding: 0.4rem 0.56rem;
  line-height: 1;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
`
