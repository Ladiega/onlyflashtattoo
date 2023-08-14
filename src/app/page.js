import Link from 'next/link'
import Image from 'next/image'
import onlyFlash from '../../public/img/onlyFlash.svg'
import logoGrisAzul from '../../public/img/logogrisazul.svg'
import Logo from '../../public/logo.png'
import Crew from '../../public/onlyflashcrew.png'

import Form from './components/form'
import { Yellowtail } from 'next/font/google'

const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: '400'
});


export default function Home() {
  const nombre = [
    'OnlyFlash',
    'Catalina',
    'Neva','Carlos',
    'Helmuth',
    'Diego'];
  const instagram =[
    '@onlyflashtattoo',
    '@malandrinatattoo',
    '@nevatattoos',
    '@pinzoncarlos777',
    '@helmuthtattoo',
    '@ladiegatattoo']
  const instagramUrl =[
    '/',
    'https://www.instagram.com/malandrinatattoo',
    'https://www.instagram.com/nevatattoos',
    'https://www.instagram.com/pinzoncarlos777',
    'https://www.instagram.com/helmuthtattoo',
    'https://www.instagram.com/ladiegatattoo'

  ]
  const photos =[
    {Crew}
  ]

  
  return (
   <main>
    <section className="container_one bg-white flex justify-center align-middle text-center">
    <div className="blue_container bg-sky-400 flex flex-col align-middle justify-center ">
          <div className=' mx-8'>
            <Image
              src={onlyFlash}
              alt="onlyflash logo"
              width={500}
            />
      </div>
      <div className="mt-10 ml-5 mr-5 text-justify ">
        <p className='text-xm'>Si queres recibir noticias registra tu correo y apoya a tus tatuadores favoritos.</p>
      </div>
      
      <div className="img_container ml-auto mr-auto mb-10 ">
      <Image
        src={Logo}
        alt="logo onlyflash"
        className='logo_onlyflash'
      />
      </div>
    </div>
    <div className="form_container mt-auto mb-auto ml-auto mr-auto  flex flex-col text-left ">      
     <Form/>
    </div>
    </section>
    <section className="contianer_two bg-blue">
    <div className="card_container flex bg-white shadow-xl mr-5 ml-5 mt-10 mb-5 rounded-lg ">
      <div className='image-container ml-5 mr-1 mt-10'>
        <Image
        src={Logo}
        alt='logo'
        width={150}
        />
      </div>
      <div className='card_info_container mt-10'>
        <div className="name font-bold"><h1>{nombre[0]}</h1></div>
        <div className="instagram font-light"><Link className=' text-gray-500' href={instagramUrl[0]}>{instagram[0]}</Link></div>
        <div className="text mr-10 mt-5">
          <p className=' text-justify'> Semana a semana un grupo selecto de tatuadores tendrá un pack de diseños únicos para que te tatúes, en una sexy hoja de flash, a tentadores precios.

        También podrás adquirir una membresía con la que tendrás: descuentos, prioridad en citas, y otras sorpresas para nuestros clientes VIP.</p>
        </div>


        <div className="photo mr-10 mt-10">
          <Image
          src={Crew}
          alt={instagram[0]}
                
          
        />
        </div>
        <div className="more mt-10 mb-10"><Link href='/sabermas'>saber mas...</Link> </div>
      </div>
    </div>
    </section>
   

   </main>
  )
}
