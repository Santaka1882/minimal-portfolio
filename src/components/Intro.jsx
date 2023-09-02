import React from 'react'

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <h1 className='text-4xl md:text7xl dark:text-white mb-1 md:mb-3 font-bold'>
            Cristian Buitrago
        </h1>
        <p className='text-base md:text-xl mb-3 font-medium'>Web developer</p>
        <p className='text-sm max-w-xl mb-6 font-bold'>
            Hi! My name is Cristian Buitrago. I love building things 
            that make the web a better place!
        </p>
        <p className='text-sm max-w-xl mb-6 font-bold'>
            I've experience working with modern frontend tecnologies like React.js, TailwindCSS
            and some backend tecnologies like Node.js, Express.js and Mysql.
        </p>

    </div>
  )
}

export default Intro;
