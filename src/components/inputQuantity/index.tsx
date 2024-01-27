import { Minus, Plus } from 'phosphor-react'
import { InputContainer, ChangeNumber } from './styles'

export interface InputProps {
  size?: 'medium' | 'small'
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
  onValue?: () => void
}

export function InputQuantity({
  size = 'medium',
  onIncrease,
  onDecrease,
  quantity,
}: InputProps) {
  return (
    <InputContainer>
      <ChangeNumber size={size}>
        <button
          type="button"
          disabled={quantity <= 1}
          onClick={() => onDecrease()}
        >
          <Minus />
        </button>

        <input type="number" readOnly value={quantity} />

        <button type="button" onClick={() => onIncrease()}>
          <Plus />
        </button>
      </ChangeNumber>
    </InputContainer>
  )
}
