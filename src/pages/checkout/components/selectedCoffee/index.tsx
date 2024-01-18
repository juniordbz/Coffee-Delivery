import { Trash } from 'phosphor-react'
import { InputQuantity } from '../../../../components/inputQuantity'
import { RegularText, TitleText } from '../../../../components/typography'

import {
  SelectedCoffeeCart,
  SelectedCoffeeCard,
  SelectedCoffeeContainer,
  CoffeeAddRemove,
  RemoveButton,
  TotalValue,
  ConfirmOrder,
} from './styles'
import { useTheme } from 'styled-components'

export function SelectedCoffee() {
  const { colors } = useTheme()

  return (
    <SelectedCoffeeContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>
      <SelectedCoffeeCard>
        <SelectedCoffeeCart>
          <img src="public\coffees\Americano.png" alt="" />
          <CoffeeAddRemove>
            <RegularText size="m" color="subtitle">
              Expresso Tradicional
            </RegularText>
            <div>
              <InputQuantity size="small" />
              <RemoveButton>
                <Trash size={16} color={colors['brand-purple']} />
                <p>remover</p>
              </RemoveButton>
            </div>
          </CoffeeAddRemove>
          <RegularText size="m" weight={700} color="text">
            R$9,90
          </RegularText>
        </SelectedCoffeeCart>
        <SelectedCoffeeCart>
          <img src="public\coffees\Americano.png" alt="" />
          <CoffeeAddRemove>
            <RegularText size="m" color="subtitle">
              Expresso Tradicional
            </RegularText>
            <div>
              <InputQuantity size="small" />
              <RemoveButton>
                <Trash size={16} color={colors['brand-purple']} />
                <p>remover</p>
              </RemoveButton>
            </div>
          </CoffeeAddRemove>
          <RegularText size="m" weight={700} color="text">
            R$9,90
          </RegularText>
        </SelectedCoffeeCart>

        <TotalValue>
          <div>
            <RegularText size="s">Total de itens</RegularText>
            <RegularText size="m">R$ 27,90</RegularText>
          </div>
          <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText size="m">R$ 3,50</RegularText>
          </div>
          <div>
            <RegularText size="l" weight={700}>
              Total
            </RegularText>
            <RegularText size="l" weight={700} color="subtitle">
              R$ 33,20
            </RegularText>
          </div>
        </TotalValue>
        <ConfirmOrder>confirmar pedido</ConfirmOrder>
      </SelectedCoffeeCard>
    </SelectedCoffeeContainer>
  )
}
