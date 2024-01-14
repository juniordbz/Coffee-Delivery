import { CartAndLocation, HeaderButton, HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <section className="container">
        <div>
          <img src={Logo} />
        </div>
        <CartAndLocation>
          <HeaderButton variant={'purple'}>
            <MapPin size={22} weight="fill" />
            <p>Itaquaquecetuba, SP</p>
          </HeaderButton>
          <HeaderButton variant={'yellow'}>
            <ShoppingCart size={22} weight="fill" />
          </HeaderButton>
        </CartAndLocation>
      </section>
    </HeaderContainer>
  )
}
