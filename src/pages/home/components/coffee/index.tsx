import { Coffee, ShoppingCart } from 'phosphor-react'
import { InputQuantity } from '../../../../components/inputQuantity'
import { RegularText, TitleText } from '../../../../components/typography'
import { coffees } from '../../../../data/coffees'
import {
  CoffeeCard,
  CoffeeContainer,
  Footer,
  Price,
  ShopCart,
  TagCoffee,
  TitleCard,
  Titte,
} from './style'
import { formatMoney } from '../../../../utils/formatMoney'
import { CartItem } from '../../../../contexts/cartContext'
import { UseCart } from '../../../../hooks/useCart'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

export function CoffeeHome({ quantity }: CartItem) {
  const { addCoffeeToCart } = UseCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffees,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <div className="container">
      <Titte color={'subtitle'} size={'l'}>
        Nossos Cafés
      </Titte>
      <CoffeeContainer>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id}>
            <img src={`/coffees/${coffee.photo}`} />
            <TagCoffee>
              {coffee.tags.map((tag) => (
                <span key={`${coffee.id}${tag}`}>{tag}</span>
              ))}
            </TagCoffee>
            <TitleCard color={'title'} size={'s'}>
              {coffee.name}
            </TitleCard>
            <RegularText size={'s'} color={'label'}>
              {coffee.description}
            </RegularText>
            <Footer>
              <Price>
                <RegularText size={'s'}>R$</RegularText>
                <TitleText
                  key={coffee.id}
                  size={'m'}
                  weight={'800'}
                  as="strong"
                >
                  {formatMoney(coffee.price)}
                </TitleText>
              </Price>

              <div>
                <InputQuantity />
                <ShopCart onClick={handleAddToCart}>
                  <ShoppingCart weight="fill" size={20} />
                </ShopCart>
              </div>
            </Footer>
          </CoffeeCard>
        ))}
      </CoffeeContainer>
    </div>
  )
}
