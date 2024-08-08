import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const fontWeights:any = ['400', '500', '600', '700', '800']

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'] ,
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const Navigation = ()=>{
    return <section className={`nav-section w-full mx-auto flex justify-center font-semibold py-5 border-1 uppercase`}>
        <div className=" max-w-screen-xl container flex items-center justify-between">
            <div className="title"><Link href="#">digital alchemist </Link></div>
            <div className="nav-menu flex items-center justify-center">
                <ul className="flex gap-3">
                    <li><Link href="#">Overview </Link></li>
                    <li><Link href="#">work </Link></li>
                    <li><Link href="#">feed </Link></li>
                </ul>
            </div>
            <div><Link href="#">Contact Now </Link></div>
        </div>
    </section>
}

export default Navigation;