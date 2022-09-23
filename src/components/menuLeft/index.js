import React, { useState } from 'react';
import useDados from '../../datehook/userHook';
import router from 'next/router'
import { AiFillHome } from "react-icons/ai";
import { BiExit } from "react-icons/bi";


export default function MenuLeft({ page }) {
    // const dates = useDados()
    const [select, setSelect] = useState(page)
    return (
        <div className={`h-auto w-2/12  bgmenu flex flex-col items-center `} >
            <div className=' h-20 flex  justify-center items-center cursor-pointer  ' >
                <span className=' font-bold text-xl' >Menu</span>
            </div>
            <ul className='w-full h-full lateral' >
                <li className={`w-full h-15 cursor-pointer p-5 flex justify-start items-center ${select == 'Home' && 'bg-red-500 '}`}
                    onClick={() => {
                        setSelect('Home')
                        router.push('/home')
                    }}>
                    <AiFillHome />
                    <span className='ml-5 hidden md:flex'>Home</span>
                </li>
                <li className={`w-full h-15 cursor-pointer p-5 flex justify-start items-center ${select == 'Editar' && 'bg-red-500 '}`}
                    onClick={() => {
                        setSelect('Home')
                        router.push('/home')
                    }}>
                    <AiFillHome />
                    <span className='ml-5 hidden md:flex'>Editar</span>
                </li>
                <li className={`w-full h-15 cursor-pointer p-5 flex justify-start items-center ${select == 'Excluir' && 'bg-red-500 '}`}
                    onClick={() => {
                        setSelect('Home')
                        router.push('/home')
                    }}>
                    <AiFillHome />
                    <span className='ml-5 hidden md:flex'>Excluir</span>
                </li>
            </ul>
            <div className='p-5 h-20 flex justify-center items-center cursor-pointer'
                onClick={() => {
                    setSelect('login')
                    router.push('/login')
                }}>
                <BiExit />
                <span className='ml-5  hidden md:flex'>Sair</span>
            </div>
        </div >
    )
}
