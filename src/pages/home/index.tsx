import { CoffeeHome } from './components/coffee'
import { IntroHome } from './components/intro'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <IntroHome />
      <CoffeeHome />
    </HomeContainer>
  )
}
