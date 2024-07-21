import { Outlet } from 'react-router-dom'
import Footer from '~/components/layouts/components/Footer/Footer'
import Header from '~/components/layouts/components/Header/Header'
import { useEffect, useState } from 'react'
import Login from '~/components/layouts/components/LoginPopup/Login'

const Public = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false)
  useEffect(() => {
    const body = document.body
    if (showLogin) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
    }

    // Optional: add the class for fallback
    if (showLogin) {
      body.classList.add('no-scroll')
    } else {
      body.classList.remove('no-scroll')
    }
  }, [showLogin])

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Header setShowLogin={setShowLogin} />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Public
