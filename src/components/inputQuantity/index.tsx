import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { InputContainer, ChangeNumber, ShopCart } from './styles'

export function InputQuantity() {
  return (
    <InputContainer>
      <ChangeNumber>
        <button>
          <Minus />
        </button>

        <input type="number" readOnly value={1} />

        <button>
          <Plus />
        </button>
      </ChangeNumber>
      <ShopCart>
        <ShoppingCart weight="fill" size={20} />
      </ShopCart>
    </InputContainer>
  )
}
