import React from 'react'

const Heading = ({ title }) => {
  return (
      <h3 className='heading-3 pb-3 relative inline-block'>
          {title}
          <div className='absolute bottom-0 w-full max-w-[80px] h-[3px] bg-cyan-700 dark:bg-yellow-600 left-0'></div>
      </h3>
  )
}

export default Heading