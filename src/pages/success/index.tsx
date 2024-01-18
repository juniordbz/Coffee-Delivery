import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { InfoWithIcon } from '../../components/infoWithIcon'
import { RegularText, TitleText } from '../../components/typography'
import { DeliveryDetails, SucessContainer } from './styles'
import { useTheme } from 'styled-components'
import IllustrationCoffeeSuccess from '../../assets/IllustrationCoffeeSuccess.svg'

export function SucessPage() {
  const { colors } = useTheme()

  return (
    <SucessContainer className="container">
      <div>
        <div>
          <TitleText size="l">Uhu! Pedido confirmado</TitleText>
          <RegularText size="l" color="subtitle">
            Agora é só aguardar que logo o café chegará até você
          </RegularText>
        </div>

        <DeliveryDetails>
          <InfoWithIcon
            icon={<MapPin size={16} weight={'fill'} />}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
            iconBg={colors['brand-purple']}
          />
          <InfoWithIcon
            icon={<Timer size={16} weight={'fill'} />}
            text={
              <RegularText>
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
            iconBg={colors['brand-yellow']}
          />
          <InfoWithIcon
            icon={<CurrencyDollar size={16} weight={'fill'} />}
            text={
              <RegularText>
                Pagamento na entrega <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
            iconBg={colors['brand-yellow-dark']}
          />
        </DeliveryDetails>
      </div>
      <div>
        <img src={IllustrationCoffeeSuccess} />
      </div>
    </SucessContainer>
  )
}
