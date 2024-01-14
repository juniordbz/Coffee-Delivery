import styled from 'styled-components'
import { TitleText } from '../../../../components/typography'

export const Titte = styled(TitleText)`
  margin-bottom: 3rem;
`
export const CoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2.5rem;
`
export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 4px 32px 4px 32px;
  width: 256px;
  height: 310px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }
`
export const TagCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  span {
    padding: 0.5rem;
    border-radius: 999px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    background: ${({ theme }) => theme.colors['brand-yellow-light']};
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    font-weight: bolder;
  }
`
export const TitleCard = styled(TitleText)`
  margin-bottom: 0.5rem;
`
export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 33px;
`
export const Price = styled.div`
  display: flex;
  align-items: baseline;

  p {
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  }
  span {
    font-size: ${({ theme }) => theme.textSizes['title-m']};
    font-family: ${({ theme }) => theme.fonts.title};
  }
`

export const InputQtdy = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 118px;
  height: 38px;
`
export const ShopCart = styled.button`
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
`

export const ChangeNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`
