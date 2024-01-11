import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <h1>header</h1>
      <Outlet />
    </LayoutContainer>
  )
}
