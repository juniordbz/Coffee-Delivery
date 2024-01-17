import { ReactNode } from 'react'
import { PaymentCard } from './styles'

interface PaymentProps {
  icon: ReactNode
  text: string
}

export function PaymentOptions({ icon, text }: PaymentProps) {
  return (
    <PaymentCard>
      {icon}
      {text}
    </PaymentCard>
  )
}
