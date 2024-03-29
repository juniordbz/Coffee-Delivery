import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/index'
import { CheckoutPage } from './pages/checkout/index'
import { DefaultLayout } from './layout/defaultLayout'
import { SucessPage } from './pages/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SucessPage />} />
      </Route>
    </Routes>
  )
}
