import React from 'react'

const Button = ({ name }) => {
  return (
    <button className='bg-btnBlue text-white font-semibold py-4 px-6 rounded-xl shadow-lg'>{name}</button>
  )
}

export default Button