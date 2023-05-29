import React from 'react'

const Heading = ({children}) => {
  return (
    <div className='heading w-full mx-auto'>
        <h1>{children}</h1>
    </div>
  )
}

export default Heading