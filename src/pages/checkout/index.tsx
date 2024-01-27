import { CheckoutContainer } from './styles'
import { SelectedCoffee } from './components/selectedCoffee'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { FormCheckout } from './components/form'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationShema = zod.object({
  cep: zod.string().min(1, 'informe o cep'),
  rua: zod.string().min(1, 'informe a rua'),
  numero: zod.string().min(1, 'informe o numero'),
  bairro: zod.string().min(1, 'informe o bairro'),
  cidade: zod.string().min(1, 'informe a cidade'),
  uf: zod.string().min(2, 'informe o estado'),
  complemento: zod.string(),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationShema>

type ConfirmOrderFormData = OrderData

export function CheckoutPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationShema),
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
    console.log('deubom')
  }
  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <FormCheckout />
        <SelectedCoffee />
      </CheckoutContainer>
    </FormProvider>
  )
}
