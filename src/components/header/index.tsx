import { CartAndLocation, HeaderButton, HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { UseCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = UseCart()

  return (
    <HeaderContainer>
      <section className="container">
        <div>
          <NavLink to="/">
            <img src={Logo} />
          </NavLink>
        </div>
        <CartAndLocation>
          <HeaderButton variant={'purple'}>
            <MapPin size={22} weight="fill" />
            <p>Itaquaquecetuba, SP</p>
          </HeaderButton>
          <NavLink to="/checkout">
            <HeaderButton variant={'yellow'}>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={22} weight="fill" />
            </HeaderButton>
          </NavLink>
        </CartAndLocation>
      </section>
    </HeaderContainer>
  )
}
