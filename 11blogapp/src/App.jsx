import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useEffect } from 'react'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { useDispatch } from 'react-redux'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }))
        else dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
