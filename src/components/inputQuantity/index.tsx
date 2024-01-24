import { Minus, Plus } from 'phosphor-react'
import { InputContainer, ChangeNumber } from './styles'

export interface InputProps {
  size?: 'medium' | 'small'
  add: () => void
  decrease: () => void
  quantity: number
}

export function InputQuantity({
  size = 'medium',
  add,
  decrease,
  quantity,
}: InputProps) {
  return (
    <InputContainer>
      <ChangeNumber size={size}>
        <button disabled={quantity <= 1} onClick={() => decrease()}>
          <Minus />
        </button>

        <input type="number" readOnly value={quantity} />

        <button onClick={() => add()}>
          <Plus />
        </button>
      </ChangeNumber>
    </InputContainer>
  )
}
