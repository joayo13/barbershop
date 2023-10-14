import React from 'react'

function ServicesSelect({setSelectedService}) {
  return (
    <select defaultValue={'Signature Cut & Style'} className='bg-neutral-300 text-ellipsis w-80 border border-red-800 text-red-800' onChange={(e) => setSelectedService(e.target.value)}>
        <option>Signature Cut & Style</option>
        <option>Maintenance Cut</option>
        <option>Barber Cut - 13 & Under</option>
        <option>Advanced Fade/Design</option>
        <option>Beard Trim</option>
        <option>Scalp Treatment</option>
        <option>Wash, Cut & Style</option>
        <option>Salon Cut - 13 & Under</option>
        <option>Bang Trim</option>
        <option>Shampoo & Blowdry</option>
        <option>Wash, Cut & Style - Curly Hair</option>
        <option>Dry Cut - Curly Hair</option>
    </select>
  )
}

export default ServicesSelect