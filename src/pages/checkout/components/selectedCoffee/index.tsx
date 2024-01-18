import { Trash } from 'phosphor-react'
import { InputQuantity } from '../../../../components/inputQuantity'
import { RegularText, TitleText } from '../../../../components/typography'

import {
  SelectedCoffeeCart,
  SelectedCoffeeCard,
  SelectedCoffeeContainer,
  CoffeeAddRemove,
  RemoveButton,
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
                remover
              </RemoveButton>
            </div>
          </CoffeeAddRemove>
        </SelectedCoffeeCart>
      </SelectedCoffeeCard>
    </SelectedCoffeeContainer>
  )
}
