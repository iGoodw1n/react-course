import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({ children, authentication = true }) => {

  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (authentication && !authStatus) {
      navigate('/login')
    } else if (!authentication && authStatus) {
      navigate('/')
    }
    setLoader(false)
  }, [authStatus, authentication, navigate])

  return loader ? null : <>{children}</>
}

Protected.propTypes = {
  children: PropTypes.elementType,
  authentication: PropTypes.bool
}

export default Protected