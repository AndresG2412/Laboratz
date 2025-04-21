import React from 'react'

export default function Card({poder1, poder2, poder3, poder4, imageUrl, cornerImageUrl}) {
    return (
        <div className='relative w-48 h-52 bg-[#930265] p-3'>
            <img src={cornerImageUrl} alt="img_carta" className='invert absolute top-2 left-1.5 w-1/6 h-1/6 z-20'/>
            <p className='text-4xl text-white font-bold absolute top-0 left-1/2 transform -translate-x-1/2 z-20'>{poder1}</p>
            <p className='text-4xl text-white font-bold absolute top-1/2 right-1 transform -translate-y-1/2 z-20'>{poder2}</p>
            <p className='text-4xl text-white font-bold absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20'>{poder3}</p>
            <p className='text-4xl text-white font-bold absolute top-1/2 left-1 transform -translate-y-1/2 z-20'>{poder4}</p>
            <div className='relative bg-[#5a033f] h-full rounded-lg w-full flex items-center justify-center'>
                <img src={imageUrl} alt="img_carta" className='w-4/5'/>
            </div>
        </div>
    )
}
