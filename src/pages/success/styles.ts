import styled from 'styled-components'

export const SucessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5rem 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`

export const DeliveryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${({ theme }) => theme.colors['base-background']};
  width: 100%;
  height: auto;
  max-width: 526px;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  padding: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    z-index: -1;
  }
`
