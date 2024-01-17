import { InputHTMLAttributes } from 'react'
import { InputFormContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function InputForm({ ...props }: InputProps) {
  return <InputFormContainer {...props} />
}
