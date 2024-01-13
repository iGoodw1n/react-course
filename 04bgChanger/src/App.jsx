import { useState } from 'react'
import PropTypes from 'prop-types';
import './App.css'

function App({colors}) {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {colors.map((color, i) => (
            <button
            key={i}
            onClick={() => setColor(color)}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{backgroundColor: color}}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default App
