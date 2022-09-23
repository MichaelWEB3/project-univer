import React, { useEffect, useRef, useState } from 'react';
import useDados from '../../datehook/userHook';
import Layout from '../../components/layout';

//import router from 'next/router'

export default function Home() {
  const dates = useDados()

  return (
    <Layout page="Home">
      <div className=' h-auto md:h-screen p-2 w-full flex-col md:flex pl-20 pr-20 pt-5' >


      </div>
    </Layout>
  )
}
