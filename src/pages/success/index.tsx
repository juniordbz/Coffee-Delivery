import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { InfoWithIcon } from '../../components/infoWithIcon'
import { RegularText, TitleText } from '../../components/typography'
import { DeliveryDetails, SucessContainer } from './styles'
import { useTheme } from 'styled-components'
import IllustrationCoffeeSuccess from '../../assets/IllustrationCoffeeSuccess.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../checkout'
import { paymentMethods } from '../checkout/components/form'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function SucessPage() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) {
    return <></>
  }

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
                Entrega em{' '}
                <strong>
                  {state.rua}, {state.numero}
                </strong>{' '}
                {state.bairro} - {state.cidade}, {state.uf}
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
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
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
