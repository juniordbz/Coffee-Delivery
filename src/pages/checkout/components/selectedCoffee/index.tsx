import { Trash } from 'phosphor-react'
import { InputQuantity } from '../../../../components/inputQuantity'
import { RegularText, TitleText } from '../../../../components/typography'

import {
  SelectedCoffeeCard,
  SelectedCoffeeContainer,
  CoffeeAddRemove,
  RemoveButton,
  TotalValue,
  ConfirmOrder,
  SelectedCoffeeCart,
} from './styles'
import { useTheme } from 'styled-components'
import { UseCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { useEffect } from 'react'

const DELIVERY_PRICE = 3.5

export function SelectedCoffee() {
  const {
    cartItems,
    changeQuantity,
    deleteCartItem,
    cartItemsTotal,
    cartQuantity,
  } = UseCart()
  const { colors } = useTheme()

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedTotal = formatMoney(cartItemsTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  const formattedCartTotal = formatMoney(cartTotal)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              {formatMoney(coffee.price * coffee.quantity)}
            </RegularText>
          </SelectedCoffeeCart>
        ))}

        <TotalValue>
          <div>
            <RegularText size="s">Total de itens</RegularText>
            <RegularText size="m">{formattedTotal}</RegularText>
          </div>
          <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText size="m">{formattedDeliveryPrice}</RegularText>
          </div>
          <div>
            <RegularText size="l" weight={700}>
              Total
            </RegularText>
            <RegularText size="l" weight={700} color="subtitle">
              {formattedCartTotal}
            </RegularText>
          </div>
        </TotalValue>

        <ConfirmOrder disabled={cartQuantity <= 0} type="submit">
          confirmar pedido
        </ConfirmOrder>
      </SelectedCoffeeCard>
    </SelectedCoffeeContainer>
  )
}
