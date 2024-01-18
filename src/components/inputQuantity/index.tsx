import { Minus, Plus } from 'phosphor-react'
import { InputContainer, ChangeNumber } from './styles'

interface InputProps {
  size?: 'medium' | 'small'
}

export function InputQuantity({ size = 'medium' }: InputProps) {
  return (
    <InputContainer>
      <ChangeNumber size={size}>
        <button>
          <Minus />
        </button>

        <input type="number" readOnly value={1} />

        <button>
          <Plus />
        </button>
      </ChangeNumber>
    </InputContainer>
  )
}
