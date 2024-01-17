import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  gap: 1rem;
  padding-bottom: 5rem;
`

export const CheckoutBackground = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors['base-card']};
`

export const FormContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-row-gap: 1rem;
  grid-column-gap: 0.75rem;
  grid-template-areas:
    'cep none none'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';

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
`
