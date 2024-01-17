import { RegularText } from '../../../../components/typography'
import { IconTextContainer } from './styles'
import { ReactNode } from 'react'

interface IconTextProps {
  icon: ReactNode
  text: string | ReactNode
  title: string
}

export function IconTextCheckout({ icon, text, title }: IconTextProps) {
  return (
    <IconTextContainer>
      {icon}
      <div>
        <RegularText size="m" color="subtitle">
          {title}
        </RegularText>
        <RegularText size="s" color="text">
          {text}
        </RegularText>
      </div>
    </IconTextContainer>
  )
}
