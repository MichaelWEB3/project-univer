import React, { useState } from 'react';
import router from 'next/router'
import useDados from '../../datehook/userHook';
//import router from 'next/router'

export default function Create() {
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [name, setname] = useState('')
  const [celular, setcelular] = useState('')
  const dates = useDados()

  async function handlerCreate() {
    dates.handlerCreate(email, password, name, celular)
  }

  return (
    <div className=' h-screen w-screen grad flex justify-center items-center text-white flex-col md:flex-row ' >
      <div className="w-full h-auto justify-center items-center flex ">
        <div className=' rounded-lg flex-col trnaslucid md:w-6/12 h-full md:h-3/6 flex justify-start items-center p-5'>
          <h1 className='text-2xl font-bold'>Criar seu acesso </h1>
          <label className='m-2 flex flex-col  items-start justify-start  w-full'>
            <span className=' text-sm font-bold  mb-2'>Email de usuario</span>
            <input name="user" type="text" value={email} onChange={(text) => setemail(text.target.value)} className=' h-8 w-full bg-transparent border-b-grey-200 border-b-2 ' placeholder='Digite seu email' />
          </label>
          <label className='m-2 flex flex-col  items-start justify-start  w-full'>
            <span className=' text-sm font-bold  mb-2'>Senha</span>
            <input name="password" value={password} onChange={(text) => setpassword(text.target.value)} className=' h-8 w-full bg-transparent border-b-grey-200 border-b-2 ' placeholder='Digite uma senha' type="password" />
          </label>
          <label className='m-2 flex flex-col  items-start justify-start  w-full'>
            <span className=' text-sm font-bold  mb-2'>Nome </span>
            <input name="name" value={name} onChange={(text) => setname(text.target.value)} className=' h-8 w-full bg-transparent border-b-grey-200 border-b-2 ' placeholder='Digite seu nome' type="text" />
          </label>
          <label className='m-2 flex flex-col  items-start justify-start  w-full'>
            <span className=' text-sm font-bold  mb-2'>Celular</span>
            <input name="celular" value={celular} onChange={(text) => setcelular(text.target.value)} className=' h-8 w-full bg-transparent border-b-grey-200 border-b-2 ' placeholder='Digite o celular da empresa' type="text" />
          </label>
          <button className='w-full  p-2 mt-10 bg-red-400 hover:bg-red-500 ' onClick={() => router.push('/login')}>
            <span>Criar</span>
          </button>
          <div className='w-full mt-5 flex justify-start items-center'>
            <div className='w-full mt-5 flex justify-start items-center'>
              <span className='mr-2'>Já tem conta? </span>
              <span className='font-bold text-sm cursor-pointer' onClick={() => router.push('/login')}>faça login</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
