import styled from 'styled-components'
import { TitleText } from '../../../../components/typography'
import { breakpoints } from '../../../../breakpoints/breakepoints'

export const Titte = styled(TitleText)`
  margin: 2rem 0 4rem;
`
export const CoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2.5rem;

  @media ${breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
    place-items: center;
  }
  @media ${breakpoints.sm} {
    display: flex;
    gap: 1rem;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`
export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem 1.25rem 1.25rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 4px 32px 4px 32px;
  width: 256px;
  height: 310px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }

  @media ${breakpoints.sm} {
    margin-top: 2rem;
  }
`
export const TagCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
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

  > div {
    width: 118px;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
`
export const Price = styled.div`
  display: flex;
  align-items: baseline;
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
