import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../pages/home/components/coffee'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  deleteCartItem: (coffeeId: number) => void
  changeQuantity: (
    coffeeId: number,
    operationType: 'increase' | 'decrease',
  ) => void
  cartQuantity: number
  cartItemsTotal: number
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'CoffeeDelivery:CartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    if (coffeIndex === -1) {
      setCartItems((oldState) => [...oldState, coffee])
    } else {
      const newCartItems = [...cartItems]
      newCartItems[coffeIndex].quantity += coffee.quantity
      setCartItems(newCartItems)
    }
  }

  function changeQuantity(coffeeId: number, operationType: string) {
    const coffeIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === coffeeId,
    )

    const newCartItems = [...cartItems]

    if (operationType === 'increase') {
      newCartItems[coffeIndex].quantity += 1
    } else if (operationType === 'decrease') {
      newCartItems[coffeIndex].quantity -= 1
    }

    setCartItems(newCartItems)
  }

  function deleteCartItem(coffeeId: number) {
    const coffeIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === coffeeId,
    )

    const newCartItems = [...cartItems]
    newCartItems.splice(coffeIndex, 1)

    setCartItems(newCartItems)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        changeQuantity,
        deleteCartItem,
        cartQuantity,
        cartItemsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
