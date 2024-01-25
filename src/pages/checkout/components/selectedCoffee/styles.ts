import styled from 'styled-components'
import { breakpoints } from '../../../../breakpoints/breakepoints'
import { ButtonHTMLAttributes } from 'react'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SelectedCoffeeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  height: auto;
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 0 32px 0 32px;
  padding: 2.5rem;

  > NavLink {
    width: 100%;
  }
`
export const SelectedCoffeeCart = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > img {
    width: 4rem;
    height: 4rem;
  }

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  @media ${breakpoints.md} {
    gap: 1rem;
  }

  @media ${breakpoints.sm} {
    gap: 1rem;
    justify-content: flex-start;
    max-width: 262px;

    > p {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
  @media ${breakpoints.xs} {
    justify-content: flex-end;
  }
`
export const CoffeeAddRemove = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 3.125rem 0 1.25rem;

  > div {
    display: flex;
    gap: 0.5rem;

    @media ${breakpoints.xs} {
      justify-content: flex-end;
    }
  }

  @media ${breakpoints.md}, ${breakpoints.sm} {
    padding: 0;
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
  @media ${breakpoints.xs} {
    > p {
      display: none;
    }
  }
`

export const TotalValue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ConfirmOrder = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors['base-white']};
  background: ${({ theme }) => theme.colors['brand-yellow']};
  text-transform: uppercase;
  width: 100%;
  height: 2.875rem;

  &:hover {
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
