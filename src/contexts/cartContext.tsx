import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/home/components/coffee'

export interface cartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: cartItem[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<cartItem[]>([])

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
