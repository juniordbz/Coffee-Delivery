import { Minus, Plus } from 'phosphor-react'
import { InputContainer, ChangeNumber } from './styles'
import { useState } from 'react'

export interface InputProps {
  size?: 'medium' | 'small'
  onAddItem: () => void
}

export function InputQuantity({ size = 'medium', onAddItem }: InputProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
    onAddItem()
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  return (
    <InputContainer>
      <ChangeNumber size={size}>
        <button disabled={quantity <= 1} onClick={handleDecrease}>
          <Minus />
        </button>

        <input type="number" readOnly value={quantity} />

        <button onClick={handleIncrease}>
          <Plus />
        </button>
      </ChangeNumber>
    </InputContainer>
  )
}
