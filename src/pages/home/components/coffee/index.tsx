import { RegularText } from '../../../../components/typography'
import {
  ChangeNumber,
  CoffeeCard,
  CoffeeContainer,
  Footer,
  InputQtdy,
  Price,
  ShopCart,
  TagCoffee,
  TitleCard,
  Titte,
} from './style'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function CoffeeHome() {
  return (
    <div className="container">
      <Titte color="subtitle" size="l">
        Nossos Cafés
      </Titte>
      <CoffeeContainer>
        <CoffeeCard>
          <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axPAss8kpAFgz~uHzE9FCM4MVmyp81Yj4weYBIgsXEg5BOS1VfYm7jsKpj6IMVUq88jOoun1ADePRtRwzpDaAPEZ~XKnByZId8NzaTou8NvS~h3UQsZN78L1dZ~ooAy7HJ9ITwUttOPoLUbKbi8VsGCbxdNP22ABiOuK2anskW~bUZKzgAm1Z36-h7sYzeZce3IXo-zekmBrqgxPYVbdDY8MXgN05CiSwbcqUqi6pJK8DCSArfRAN9m6IzcYVVAji4yjklF~LF7qdshverFQpQR16Mgx~i5Rec4PWHj4KfcKMPzfFsjg8SmZNyB73L5GjekaoZ0BjEZp54ox3ZNPYQ__" />
          <TagCoffee>
            <span>Tadicional</span>
            <span>Com leite</span>
          </TagCoffee>

          <TitleCard color="title" size="s">
            Expresso tradicional
          </TitleCard>

          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>

          <Footer>
            <Price>
              <p>R$</p>
              <span>9,90</span>
            </Price>

            <InputQtdy>
              <ChangeNumber>
                <button>
                  <Minus />
                </button>

                <input type="number" />

                <button>
                  <Plus />
                </button>
              </ChangeNumber>
              <ShopCart>
                <ShoppingCart weight="fill" size={20} />
              </ShopCart>
            </InputQtdy>
          </Footer>
        </CoffeeCard>
        <CoffeeCard>
          <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axPAss8kpAFgz~uHzE9FCM4MVmyp81Yj4weYBIgsXEg5BOS1VfYm7jsKpj6IMVUq88jOoun1ADePRtRwzpDaAPEZ~XKnByZId8NzaTou8NvS~h3UQsZN78L1dZ~ooAy7HJ9ITwUttOPoLUbKbi8VsGCbxdNP22ABiOuK2anskW~bUZKzgAm1Z36-h7sYzeZce3IXo-zekmBrqgxPYVbdDY8MXgN05CiSwbcqUqi6pJK8DCSArfRAN9m6IzcYVVAji4yjklF~LF7qdshverFQpQR16Mgx~i5Rec4PWHj4KfcKMPzfFsjg8SmZNyB73L5GjekaoZ0BjEZp54ox3ZNPYQ__" />
          <TagCoffee>
            <span>Tadicional</span>
            <span>Com leite</span>
          </TagCoffee>

          <TitleCard color="title" size="s">
            Expresso tradicional
          </TitleCard>

          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>

          <Footer>
            <Price>
              <p>R$</p>
              <span>9,90</span>
            </Price>

            <InputQtdy>
              <ChangeNumber>
                <button>
                  <Minus />
                </button>

                <input type="number" />

                <button>
                  <Plus />
                </button>
              </ChangeNumber>
              <ShopCart>
                <ShoppingCart weight="fill" size={20} />
              </ShopCart>
            </InputQtdy>
          </Footer>
        </CoffeeCard>
        <CoffeeCard>
          <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axPAss8kpAFgz~uHzE9FCM4MVmyp81Yj4weYBIgsXEg5BOS1VfYm7jsKpj6IMVUq88jOoun1ADePRtRwzpDaAPEZ~XKnByZId8NzaTou8NvS~h3UQsZN78L1dZ~ooAy7HJ9ITwUttOPoLUbKbi8VsGCbxdNP22ABiOuK2anskW~bUZKzgAm1Z36-h7sYzeZce3IXo-zekmBrqgxPYVbdDY8MXgN05CiSwbcqUqi6pJK8DCSArfRAN9m6IzcYVVAji4yjklF~LF7qdshverFQpQR16Mgx~i5Rec4PWHj4KfcKMPzfFsjg8SmZNyB73L5GjekaoZ0BjEZp54ox3ZNPYQ__" />
          <TagCoffee>
            <span>Tadicional</span>
            <span>Com leite</span>
          </TagCoffee>

          <TitleCard color="title" size="s">
            Expresso tradicional
          </TitleCard>

          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>

          <Footer>
            <Price>
              <p>R$</p>
              <span>9,90</span>
            </Price>

            <InputQtdy>
              <ChangeNumber>
                <button>
                  <Minus />
                </button>

                <input type="number" />

                <button>
                  <Plus />
                </button>
              </ChangeNumber>
              <ShopCart>
                <ShoppingCart weight="fill" size={20} />
              </ShopCart>
            </InputQtdy>
          </Footer>
        </CoffeeCard>
        <CoffeeCard>
          <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axPAss8kpAFgz~uHzE9FCM4MVmyp81Yj4weYBIgsXEg5BOS1VfYm7jsKpj6IMVUq88jOoun1ADePRtRwzpDaAPEZ~XKnByZId8NzaTou8NvS~h3UQsZN78L1dZ~ooAy7HJ9ITwUttOPoLUbKbi8VsGCbxdNP22ABiOuK2anskW~bUZKzgAm1Z36-h7sYzeZce3IXo-zekmBrqgxPYVbdDY8MXgN05CiSwbcqUqi6pJK8DCSArfRAN9m6IzcYVVAji4yjklF~LF7qdshverFQpQR16Mgx~i5Rec4PWHj4KfcKMPzfFsjg8SmZNyB73L5GjekaoZ0BjEZp54ox3ZNPYQ__" />
          <TagCoffee>
            <span>Tadicional</span>
            <span>Com leite</span>
          </TagCoffee>

          <TitleCard color="title" size="s">
            Expresso tradicional
          </TitleCard>

          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>

          <Footer>
            <Price>
              <p>R$</p>
              <span>9,90</span>
            </Price>

            <InputQtdy>
              <ChangeNumber>
                <button>
                  <Minus />
                </button>

                <input type="number" />

                <button>
                  <Plus />
                </button>
              </ChangeNumber>
              <ShopCart>
                <ShoppingCart weight="fill" size={20} />
              </ShopCart>
            </InputQtdy>
          </Footer>
        </CoffeeCard>
        <CoffeeCard>
          <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axPAss8kpAFgz~uHzE9FCM4MVmyp81Yj4weYBIgsXEg5BOS1VfYm7jsKpj6IMVUq88jOoun1ADePRtRwzpDaAPEZ~XKnByZId8NzaTou8NvS~h3UQsZN78L1dZ~ooAy7HJ9ITwUttOPoLUbKbi8VsGCbxdNP22ABiOuK2anskW~bUZKzgAm1Z36-h7sYzeZce3IXo-zekmBrqgxPYVbdDY8MXgN05CiSwbcqUqi6pJK8DCSArfRAN9m6IzcYVVAji4yjklF~LF7qdshverFQpQR16Mgx~i5Rec4PWHj4KfcKMPzfFsjg8SmZNyB73L5GjekaoZ0BjEZp54ox3ZNPYQ__" />
          <TagCoffee>
            <span>Tadicional</span>
            <span>Com leite</span>
          </TagCoffee>

          <TitleCard color="title" size="s">
            Expresso tradicional
          </TitleCard>

          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>

          <Footer>
            <Price>
              <p>R$</p>
              <span>9,90</span>
            </Price>

            <InputQtdy>
              <ChangeNumber>
                <button>
                  <Minus />
                </button>

                <input type="number" />

                <button>
                  <Plus />
                </button>
              </ChangeNumber>
              <ShopCart>
                <ShoppingCart weight="fill" size={20} />
              </ShopCart>
            </InputQtdy>
          </Footer>
        </CoffeeCard>
        <CoffeeCard>
          <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axPAss8kpAFgz~uHzE9FCM4MVmyp81Yj4weYBIgsXEg5BOS1VfYm7jsKpj6IMVUq88jOoun1ADePRtRwzpDaAPEZ~XKnByZId8NzaTou8NvS~h3UQsZN78L1dZ~ooAy7HJ9ITwUttOPoLUbKbi8VsGCbxdNP22ABiOuK2anskW~bUZKzgAm1Z36-h7sYzeZce3IXo-zekmBrqgxPYVbdDY8MXgN05CiSwbcqUqi6pJK8DCSArfRAN9m6IzcYVVAji4yjklF~LF7qdshverFQpQR16Mgx~i5Rec4PWHj4KfcKMPzfFsjg8SmZNyB73L5GjekaoZ0BjEZp54ox3ZNPYQ__" />
          <TagCoffee>
            <span>Tadicional</span>
            <span>Com leite</span>
          </TagCoffee>

          <TitleCard color="title" size="s">
            Expresso tradicional
          </TitleCard>

          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>

          <Footer>
            <Price>
              <p>R$</p>
              <span>9,90</span>
            </Price>

            <InputQtdy>
              <ChangeNumber>
                <button>
                  <Minus />
                </button>

                <input type="number" />

                <button>
                  <Plus />
                </button>
              </ChangeNumber>
              <ShopCart>
                <ShoppingCart weight="fill" size={20} />
              </ShopCart>
            </InputQtdy>
          </Footer>
        </CoffeeCard>
        <CoffeeCard>
          <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axPAss8kpAFgz~uHzE9FCM4MVmyp81Yj4weYBIgsXEg5BOS1VfYm7jsKpj6IMVUq88jOoun1ADePRtRwzpDaAPEZ~XKnByZId8NzaTou8NvS~h3UQsZN78L1dZ~ooAy7HJ9ITwUttOPoLUbKbi8VsGCbxdNP22ABiOuK2anskW~bUZKzgAm1Z36-h7sYzeZce3IXo-zekmBrqgxPYVbdDY8MXgN05CiSwbcqUqi6pJK8DCSArfRAN9m6IzcYVVAji4yjklF~LF7qdshverFQpQR16Mgx~i5Rec4PWHj4KfcKMPzfFsjg8SmZNyB73L5GjekaoZ0BjEZp54ox3ZNPYQ__" />
          <TagCoffee>
            <span>Tadicional</span>
            <span>Com leite</span>
          </TagCoffee>

          <TitleCard color="title" size="s">
            Expresso tradicional
          </TitleCard>

          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>

          <Footer>
            <Price>
              <p>R$</p>
              <span>9,90</span>
            </Price>

            <InputQtdy>
              <ChangeNumber>
                <button>
                  <Minus />
                </button>

                <input type="number" />

                <button>
                  <Plus />
                </button>
              </ChangeNumber>
              <ShopCart>
                <ShoppingCart weight="fill" size={20} />
              </ShopCart>
            </InputQtdy>
          </Footer>
        </CoffeeCard>
        <CoffeeCard>
          <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axPAss8kpAFgz~uHzE9FCM4MVmyp81Yj4weYBIgsXEg5BOS1VfYm7jsKpj6IMVUq88jOoun1ADePRtRwzpDaAPEZ~XKnByZId8NzaTou8NvS~h3UQsZN78L1dZ~ooAy7HJ9ITwUttOPoLUbKbi8VsGCbxdNP22ABiOuK2anskW~bUZKzgAm1Z36-h7sYzeZce3IXo-zekmBrqgxPYVbdDY8MXgN05CiSwbcqUqi6pJK8DCSArfRAN9m6IzcYVVAji4yjklF~LF7qdshverFQpQR16Mgx~i5Rec4PWHj4KfcKMPzfFsjg8SmZNyB73L5GjekaoZ0BjEZp54ox3ZNPYQ__" />
          <TagCoffee>
            <span>Tadicional</span>
            <span>Com leite</span>
          </TagCoffee>

          <TitleCard color="title" size="s">
            Expresso tradicional
          </TitleCard>

          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>

          <Footer>
            <Price>
              <p>R$</p>
              <span>9,90</span>
            </Price>

            <InputQtdy>
              <ChangeNumber>
                <button>
                  <Minus />
                </button>

                <input type="number" />

                <button>
                  <Plus />
                </button>
              </ChangeNumber>
              <ShopCart>
                <ShoppingCart weight="fill" size={20} />
              </ShopCart>
            </InputQtdy>
          </Footer>
        </CoffeeCard>
        <CoffeeCard>
          <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axPAss8kpAFgz~uHzE9FCM4MVmyp81Yj4weYBIgsXEg5BOS1VfYm7jsKpj6IMVUq88jOoun1ADePRtRwzpDaAPEZ~XKnByZId8NzaTou8NvS~h3UQsZN78L1dZ~ooAy7HJ9ITwUttOPoLUbKbi8VsGCbxdNP22ABiOuK2anskW~bUZKzgAm1Z36-h7sYzeZce3IXo-zekmBrqgxPYVbdDY8MXgN05CiSwbcqUqi6pJK8DCSArfRAN9m6IzcYVVAji4yjklF~LF7qdshverFQpQR16Mgx~i5Rec4PWHj4KfcKMPzfFsjg8SmZNyB73L5GjekaoZ0BjEZp54ox3ZNPYQ__" />
          <TagCoffee>
            <span>Tadicional</span>
            <span>Com leite</span>
          </TagCoffee>

          <TitleCard color="title" size="s">
            Expresso tradicional
          </TitleCard>

          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>

          <Footer>
            <Price>
              <p>R$</p>
              <span>9,90</span>
            </Price>

            <InputQtdy>
              <ChangeNumber>
                <button>
                  <Minus />
                </button>

                <input type="number" />

                <button>
                  <Plus />
                </button>
              </ChangeNumber>
              <ShopCart>
                <ShoppingCart weight="fill" size={20} />
              </ShopCart>
            </InputQtdy>
          </Footer>
        </CoffeeCard>
        <CoffeeCard>
          <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axPAss8kpAFgz~uHzE9FCM4MVmyp81Yj4weYBIgsXEg5BOS1VfYm7jsKpj6IMVUq88jOoun1ADePRtRwzpDaAPEZ~XKnByZId8NzaTou8NvS~h3UQsZN78L1dZ~ooAy7HJ9ITwUttOPoLUbKbi8VsGCbxdNP22ABiOuK2anskW~bUZKzgAm1Z36-h7sYzeZce3IXo-zekmBrqgxPYVbdDY8MXgN05CiSwbcqUqi6pJK8DCSArfRAN9m6IzcYVVAji4yjklF~LF7qdshverFQpQR16Mgx~i5Rec4PWHj4KfcKMPzfFsjg8SmZNyB73L5GjekaoZ0BjEZp54ox3ZNPYQ__" />
          <TagCoffee>
            <span>Tadicional</span>
            <span>Com leite</span>
          </TagCoffee>

          <TitleCard color="title" size="s">
            Expresso tradicional
          </TitleCard>

          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>

          <Footer>
            <Price>
              <p>R$</p>
              <span>9,90</span>
            </Price>

            <InputQtdy>
              <ChangeNumber>
                <button>
                  <Minus />
                </button>

                <input type="number" />

                <button>
                  <Plus />
                </button>
              </ChangeNumber>
              <ShopCart>
                <ShoppingCart weight="fill" size={20} />
              </ShopCart>
            </InputQtdy>
          </Footer>
        </CoffeeCard>
        <CoffeeCard>
          <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axPAss8kpAFgz~uHzE9FCM4MVmyp81Yj4weYBIgsXEg5BOS1VfYm7jsKpj6IMVUq88jOoun1ADePRtRwzpDaAPEZ~XKnByZId8NzaTou8NvS~h3UQsZN78L1dZ~ooAy7HJ9ITwUttOPoLUbKbi8VsGCbxdNP22ABiOuK2anskW~bUZKzgAm1Z36-h7sYzeZce3IXo-zekmBrqgxPYVbdDY8MXgN05CiSwbcqUqi6pJK8DCSArfRAN9m6IzcYVVAji4yjklF~LF7qdshverFQpQR16Mgx~i5Rec4PWHj4KfcKMPzfFsjg8SmZNyB73L5GjekaoZ0BjEZp54ox3ZNPYQ__" />
          <TagCoffee>
            <span>Tadicional</span>
            <span>Com leite</span>
          </TagCoffee>

          <TitleCard color="title" size="s">
            Expresso tradicional
          </TitleCard>

          <RegularText size="s" color="label">
            O tradicional café feito com água quente e grãos moídos
          </RegularText>

          <Footer>
            <Price>
              <p>R$</p>
              <span>9,90</span>
            </Price>

            <InputQtdy>
              <ChangeNumber>
                <button>
                  <Minus />
                </button>

                <input type="number" />

                <button>
                  <Plus />
                </button>
              </ChangeNumber>
              <ShopCart>
                <ShoppingCart weight="fill" size={20} />
              </ShopCart>
            </InputQtdy>
          </Footer>
        </CoffeeCard>
      </CoffeeContainer>
    </div>
  )
}
