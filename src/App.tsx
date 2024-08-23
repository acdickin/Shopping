import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import { CartItems, Item } from './types/CartTypes'
function App() {
  const [cart, setCart] = useState<CartItems>([])

  const handleAddCart = (item: Item) => {
    setCart((prev) => [...prev, item])
  }

  const handleRemoveCart = (uuid: number) => {
    setCart(cart.filter((current: Item) => uuid !== current.uuid))
  }

  return (
    <>
      <Header cart={cart}  handleRemoveCart={handleRemoveCart} />
      <Home handleAddCart={handleAddCart} />
      <Footer />
    </>
  )
}

export default App
