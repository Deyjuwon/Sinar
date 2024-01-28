import React from 'react'

const Button = ({ name }) => {
  return (
    <button className='bg-black text-white font-semibold py-5 px-5 rounded-xl'>{name}</button>
  )
}

export default Button