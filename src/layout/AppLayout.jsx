import { useState } from 'react'
import Navbar from '../components/Navbar'
import CartSidebar from '../components/CartSidebar'
import { Outlet } from 'react-router'

const AppLayout = () => {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className='min-h-screen max-w-screen bg-black'>

      {/* Navbar */}
      <Navbar onCartClick={() => setCartOpen(true)} />

      {/* Overlay */}
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed bg-black/80  inset-0 z-40 "
        />
      )}

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      {/* Pages */}
      <Outlet />

    </div>
  )
}

export default AppLayout