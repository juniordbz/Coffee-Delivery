import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { ufs } from '../../../../data/uf'
import { IconTextCheckout } from '../iconTextCheckout'
import {
  CheckoutBackground,
  Container,
  FormContainer,
  PaymentContainerForm,
} from './styles'
import { useTheme } from 'styled-components'
import { PaymentOptions } from '../payment'
import { RegularText, TitleText } from '../../../../components/typography'
import { useFormContext } from 'react-hook-form'
import { InputForm } from '../inputForm'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },

  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },

  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function FormCheckout() {
  const { colors } = useTheme()
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType
  const paymentErros = errors?.paymentMethod?.message as unknown as string

  return (
    <Container>
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
          <InputForm
            className="cep"
            placeholder="CEP"
            type="number"
            {...register('cep')}
            error={errors.cep?.message}
          />
          <InputForm
            className="rua"
            placeholder="Rua"
            {...register('rua')}
            error={errors.rua?.message}
          />
          <InputForm
            className="numero"
            placeholder="Nº"
            {...register('numero')}
            error={errors.numero?.message}
          />
          <InputForm
            className="complemento"
            placeholder="Complemento"
            {...register('complemento')}
            error={errors.complemento?.message}
            rightText="Opcional"
          />
          <InputForm
            className="bairro"
            placeholder="Bairro"
            {...register('bairro')}
            error={errors.bairro?.message}
          />
          <InputForm
            className="cidade"
            placeholder="Cidade"
            {...register('cidade')}
            error={errors.cidade?.message}
          />
          <datalist id="ufs">
            {ufs.map((uf) => (
              <option key={uf} value={uf}></option>
            ))}
          </datalist>
          <InputForm
            id="ufsInputs"
            list="ufs"
            className="uf"
            placeholder="UF"
            {...register('uf')}
            error={errors.uf?.message}
          />
        </FormContainer>
      </CheckoutBackground>
      <CheckoutBackground>
        <IconTextCheckout
          icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
          title="Pagamento"
          text="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        <PaymentContainerForm>
          <div>
            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
              <PaymentOptions
                key={label}
                id={key}
                icon={icon}
                label={label}
                value={key}
                {...register('paymentMethod')}
              />
            ))}
          </div>
          {paymentErros && <RegularText>{paymentErros}</RegularText>}
        </PaymentContainerForm>
      </CheckoutBackground>
    </Container>
  )
}
