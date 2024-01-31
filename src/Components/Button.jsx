import React from 'react'

const Button = ({ name }) => {
  return (
    <button className='bg-black text-white font-semibold py-4 px-4 rounded-xl shadow-lg'>{name}</button>
  )
}

export default Button