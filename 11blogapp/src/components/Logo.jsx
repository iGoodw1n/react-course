import PropTypes from 'prop-types'

const Logo = ({width = '100%'}) => {
  return (
    <img src='' style={{width}} alt="Logo placeholder"/>
  )
}

Logo.propTypes = {
  width: PropTypes.string
}

export default Logo