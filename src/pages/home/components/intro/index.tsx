import CoffeeIntro from '../../../../assets/CoffeeIntro.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  HighlightsContainer,
  IntroContainer,
  IntroContent,
  IntroTite,
} from './styles'
import { RegularText } from '../../../../components/typography'
import { InfoWithIcon } from '../../../../components/infoWithIcon'
import { useTheme } from 'styled-components'

export function IntroHome() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTite size={'xl'}>
              Encontre o café perfeito para qualquer hora do dia
            </IntroTite>
            <RegularText size={'l'} color={'subtitle'} as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
            <HighlightsContainer>
              <InfoWithIcon
                iconBg={colors['brand-yellow-dark']}
                icon={<ShoppingCart weight="fill" />}
                text="Compra simples e segura"
              />
              <InfoWithIcon
                iconBg={colors['base-text']}
                icon={<Package weight="fill" />}
                text="Embalagem mantém o café intacto"
              />
              <InfoWithIcon
                iconBg={colors['brand-yellow']}
                icon={<Timer weight="fill" />}
                text="Entrega rápida e rastreada"
              />
              <InfoWithIcon
                iconBg={colors['brand-purple']}
                icon={<Coffee weight="fill" />}
                text="O café chega fresquinho até você"
              />
            </HighlightsContainer>
          </section>
        </div>
        <div>
          <img src={CoffeeIntro} />
        </div>
      </IntroContent>
    </IntroContainer>
  )
}
