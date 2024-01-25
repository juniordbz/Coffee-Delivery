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
import { NavLink } from 'react-router-dom'
import { UseCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

export function SelectedCoffee() {
  const { cartItems, changeQuantity, deleteCartItem } = UseCart()
  const { colors } = useTheme()

  return (
    <SelectedCoffeeContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>
      <SelectedCoffeeCard>
        {cartItems.map((coffee) => (
          <SelectedCoffeeCart key={coffee.id}>
            <img src={`/coffees/${coffee.photo}`} alt="foto" />

            <CoffeeAddRemove>
              <RegularText size="m" color="subtitle">
                {coffee.name}
              </RegularText>
              <div>
                <InputQuantity
                  onDecrease={
                    coffee.quantity === 1
                      ? () => deleteCartItem(coffee.id)
                      : () => changeQuantity(coffee.id, 'decrease')
                  }
                  onIncrease={() => changeQuantity(coffee.id, 'increase')}
                  quantity={coffee.quantity}
                  size="small"
                />
                <RemoveButton onClick={() => deleteCartItem(coffee.id)}>
                  <Trash size={16} color={colors['brand-purple']} />
                  <p>remover</p>
                </RemoveButton>
              </div>
            </CoffeeAddRemove>
            <RegularText size="m" weight={700} color="text">
              {formatMoney(coffee.price)}
            </RegularText>
          </SelectedCoffeeCart>
        ))}

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

        <NavLink to={'/success'}>
          <ConfirmOrder>confirmar pedido</ConfirmOrder>
        </NavLink>
      </SelectedCoffeeCard>
    </SelectedCoffeeContainer>
  )
}
