import React from 'react'
import logo from "./images/logo.png"

export default function App() {

    const aviso = () => {
        alert("Esta opcion no esta disponible por el momento")
    }

    return (
        <div>
            {/* <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#43004f] to-[#006005]'> */}
            <div className='flex flex-col justify-center items-center h-screen bg-[#32003b]'>
                <p className='text-center text-3xl md:text-6xl tracking-wider font-bold uppercase text-white mb-2 md:mb-6'>Bienvenido a</p>
                <img src={logo} alt="logo" className='md:w-2/5 w-3/4'/>
                
                <div className='flex flex-col justify-center items-center gap-y-4 my-4'>
                    <button 
                        onClick={aviso}
                        className='bg-[#d331a1] text-xl px-4 py2 rounded-lg border-[1px] border-[#851863] hover:scale-110 hover:bg-[#851863] hover:duration-300 hover:transition-all uppercase font-semibold tracking-wide hover:text-white'>
                            crear sala
                        </button>
                    <button 
                        onClick={aviso}
                        className='bg-[#d331a1] text-xl px-4 py2 rounded-lg border-[1px] border-[#851863] hover:scale-110 hover:bg-[#851863] hover:duration-300 hover:transition-all uppercase font-semibold tracking-wide hover:text-white'>
                            ingresar cuenta
                        </button>
                    <button 
                        onClick={aviso}
                        className='bg-[#d331a1] text-xl px-4 py2 rounded-lg border-[1px] border-[#851863] hover:scale-110 hover:bg-[#851863] hover:duration-300 hover:transition-all uppercase font-semibold tracking-wide hover:text-white'>
                            crear cuenta
                        </button>
                </div>
            </div>    
        </div>
    )
}
