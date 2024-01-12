import CoffeeIntro from '../../../../assets/CoffeeIntro.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  BackgroundDestasquesIntro,
  DestaquesIntro,
  HeadLine,
  IconsAndTexts,
  IntroContainer,
  IntroContent,
} from './styles'

export function IntroHome() {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <HeadLine>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <DestaquesIntro>
            <div>
              <IconsAndTexts>
                <BackgroundDestasquesIntro variant={'yellow'}>
                  <ShoppingCart size={16} weight={'fill'} tons={'dark'} />
                </BackgroundDestasquesIntro>
                <p>Compra simples e segura</p>
              </IconsAndTexts>
              <IconsAndTexts>
                <BackgroundDestasquesIntro variant={'purple'}>
                  <Package size={16} weight={'fill'} />
                </BackgroundDestasquesIntro>
                <p>Embalagem mantem o café intacto</p>
              </IconsAndTexts>
            </div>
            <div>
              <IconsAndTexts>
                <BackgroundDestasquesIntro variant={'yellow'}>
                  <Timer size={16} weight={'fill'} />
                </BackgroundDestasquesIntro>
                <p>Entrega rápida e rastreada</p>
              </IconsAndTexts>
              <IconsAndTexts>
                <BackgroundDestasquesIntro variant={'yellow'}>
                  <Coffee size={16} weight={'fill'} />
                </BackgroundDestasquesIntro>
                <p>O café chega fresquinho até você</p>
              </IconsAndTexts>
            </div>
          </DestaquesIntro>
        </HeadLine>
        <div>
          <img src={CoffeeIntro} />
        </div>
      </IntroContent>
    </IntroContainer>
  )
}
