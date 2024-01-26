import { InputHTMLAttributes, forwardRef } from 'react'
import {
  InputFormContainer,
  InputStyled,
  InputWrapper,
  RightText,
} from './styles'
import { RegularText } from '../../../../components/typography'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

// eslint-disable-next-line react/display-name
export const InputForm = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputFormContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputFormContainer>

        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)
