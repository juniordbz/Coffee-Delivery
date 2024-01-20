import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

export function UseCart() {
  const context = useContext(CartContext)
  return context
}
