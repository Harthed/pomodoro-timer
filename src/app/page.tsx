
import Image from 'next/image'
import logo from '@/img/pomologo.png'
import start from '@/img/play.png'

export default function Home() {
  return (
    <main className="bg-zinc-800 h-screen flex flex-col items-center justify-center gap-5">
  <Image className='lg:self-start ml-8 lg:w-40' src={logo} alt="logo"/>
  <div className='flex items-center flex-col gap-4 mt-24'>
  
  <div className='group w-80 h-80 border-green-500 border-4 rounded-full flex items-center justify-center'>
    <h1 className='font-bold text-white text-5xl'>12:00</h1>
  </div>
  <Image className='' width={80} src={start} alt='start'/>
  </div>
    </main>
  )
}
