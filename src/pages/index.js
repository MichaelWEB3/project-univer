import { useEffect } from "react"
import router from 'next/router'

export default function Home() {

  useEffect(() => {
    router.push('/login')
  }, [])

  return (
    <div className=' bg-black h-screen w-screen'>

    </div>
  )
}
