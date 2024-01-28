import styled from 'styled-components'
import { breakpoints } from '../../../../breakpoints/breakepoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${breakpoints.lg} {
    gap: 2rem;
    width: 100%;
  }
`

export const CheckoutBackground = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors['base-card']};

  @media ${breakpoints.md} {
    padding: 2rem 1rem;
  }
`

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 3.75rem repeat(2, minmax(10rem, 2fr)) 3.75rem;
  grid-row-gap: 1rem;
  grid-column-gap: 0.75rem;
  grid-template-areas:
    'cep cep none none'
    'rua rua rua rua'
    'numero complemento complemento complemento'
    'bairro bairro cidade uf';

  .cep {
    grid-area: cep;
  }

  .rua {
    grid-area: rua;
  }
  .numero {
    grid-area: numero;
  }
  .complemento {
    grid-area: complemento;
  }
  .bairro {
    grid-area: bairro;
  }
  .cidade {
    grid-area: cidade;
  }
  .uf {
    grid-area: uf;
  }

  @media ${breakpoints.md} {
    grid-template-columns: minmax(10rem, 1fr) minmax(2.8rem, 3.75rem);
    grid-template-areas:
      'cep cep '
      'rua numero '
      'complemento complemento'
      'bairro bairro'
      'cidade uf';
  }
`

export const PaymentContainerForm = styled.div`
  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    @media ${breakpoints.md} {
      flex-wrap: wrap;
      gap: 0.75rem;
      justify-content: center;
    }
  }

  p {
    color: ${({ theme }) => theme.colors['base-error']};
    text-align: center;
  }
`
