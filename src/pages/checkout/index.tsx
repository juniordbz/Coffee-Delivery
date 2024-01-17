import { TitleText } from '../../components/typography'
import { IconTextCheckout } from './components/iconTextCheckout'
import { CheckoutBackground, CheckoutContainer, FormContainer } from './styles'
import { useTheme } from 'styled-components'
import { InputForm } from './components/inputForm'
import { PaymentOptions } from './components/payment'
import { PaymentContainer } from './components/payment/styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { OptionInput } from './components/inputForm/styles'

export function CheckoutPage() {
  const { colors } = useTheme()
  return (
    <CheckoutContainer className="container">
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <CheckoutBackground>
        <IconTextCheckout
          icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
          title="Endereço de Entrega"
          text="Informe o endereço onde deseja receber seu pedido"
        />
        <FormContainer>
          <InputForm className="cep" placeholder="CEP" />
          <InputForm className="rua" placeholder="Rua" />
          <InputForm className="numero" placeholder="Nº" />
          <OptionInput className="complemento">
            <InputForm placeholder="Complemento" />
            <i>Opicional</i>
          </OptionInput>

          <InputForm className="bairro" placeholder="Bairro" />
          <InputForm className="cidade" placeholder="Cidade" />
          <InputForm className="uf" placeholder="UF" />
        </FormContainer>
      </CheckoutBackground>

      <CheckoutBackground>
        <IconTextCheckout
          icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
          title="Pagamento"
          text="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <PaymentContainer>
          <PaymentOptions
            icon={<CreditCard size={16} color={colors['brand-purple']} />}
            text="Cartão de crédito"
          />
          <PaymentOptions
            icon={<Bank size={16} color={colors['brand-purple']} />}
            text="Cartão de Débito"
          />
          <PaymentOptions
            icon={<Money size={16} color={colors['brand-purple']} />}
            text="Dinheiro"
          />
        </PaymentContainer>
      </CheckoutBackground>
    </CheckoutContainer>
  )
}
