import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { PaymentCard, PaymentContainer } from './styles'
type PaymentProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

// eslint-disable-next-line react/display-name
export const PaymentOptions = forwardRef<HTMLInputElement, PaymentProps>(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <PaymentContainer>
        <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
        <label htmlFor={id}>
          <PaymentCard>
            <div>{icon}</div>
            {label}
          </PaymentCard>
        </label>
      </PaymentContainer>
    )
  },
)
