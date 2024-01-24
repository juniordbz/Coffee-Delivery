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
import { UseCart } from '../../../../hooks/useCart'
import { useState } from 'react'
import { CartItem } from '../../../../contexts/cartContext'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

export function CoffeeHome() {
  const [coffeesList, setCoffeesList] = useState(
    coffees.map((coffee) => ({ ...coffee, quantity: 1 })),
  )
  const { addCoffeeToCart } = UseCart()

  const handleAdd = (coffee: CartItem) => {
    const copyOfCoffee = { ...coffee }

    addCoffeeToCart(copyOfCoffee)
    resetQuantity(coffee.id)
  }

  const addQuantity = (coffeeId: number) => {
    const newCoffees = [...coffeesList]

    newCoffees[
      newCoffees.findIndex((element) => element.id === coffeeId)
    ].quantity += 1

    setCoffeesList(newCoffees)
  }

  const decreaseQuantity = (coffeeId: number) => {
    const newCoffees = [...coffeesList]

    newCoffees[
      newCoffees.findIndex((element) => element.id === coffeeId)
    ].quantity -= 1

    setCoffeesList(newCoffees)
  }

  const resetQuantity = (coffeeId: number) => {
    const newCoffees = [...coffeesList]

    newCoffees[
      newCoffees.findIndex((element) => element.id === coffeeId)
    ].quantity = 1

    setCoffeesList(newCoffees)
  }

  return (
    <div className="container">
      <Titte color={'subtitle'} size={'l'}>
        Nossos Cafés
      </Titte>
      <CoffeeContainer>
        {coffeesList.map((coffee) => (
          <CoffeeCard key={coffee.id}>
            <img src={`/coffees/${coffee.photo}`} alt="foto" />
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
                <InputQuantity
                  add={() => addQuantity(coffee.id)}
                  decrease={() => decreaseQuantity(coffee.id)}
                  quantity={coffee.quantity}
                />
                <ShopCart onClick={() => handleAdd(coffee)}>
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
