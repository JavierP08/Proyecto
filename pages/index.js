import { Inter } from 'next/font/google'
import Dashboard from '@/components/Dashboard'
import TablaApuestas from '@/components/TablaApuestas'
import InfoWallet from '@/components/InfoWallet'
import Tickets from '@/components/Tickets'
import Background from '@/components/Background'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className=' bg-slate-100 h-screen w-screen '>
      <div>
        <div className="z-40">
        <Dashboard></Dashboard>
        </div>
        <div className="z-0">
          <TablaApuestas></TablaApuestas>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 my-8 z-0">
        <div className="cols-start-2 col-end-3"><Tickets></Tickets></div>
        <div className="cols-start-4 col-end-5"><InfoWallet></InfoWallet></div>
      </div>
      </div>
    </main>
  )
}