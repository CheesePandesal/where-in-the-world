import React from 'react'

const Country = ({name, population, countryFlag, capital, continent}) => {
  return (
    <div className='min-h-[400px] shadow-md bg-white dark:bg-[#2b3741]'>
            <div className='h-[178px]'>
                <img src={countryFlag} alt="" className='w-full h-full object-contain'/>
            </div>
            <div className='px-8 py-8 dark:text-white'>
                <h5 className='text-2xl font-bold mb-4'>{name}</h5>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Continent:</strong> {continent}</p>
                <p><strong>Capital:</strong> {capital}</p>
            </div>
        </div>
  )
}

export default Country