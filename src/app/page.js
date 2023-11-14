import Link from 'next/link';
import Image from 'next/image';
import onlyFlash from '../../public/img/onlyFlash.svg';
import Logo from '../../public/img/logogrisazul.svg';
import Crew from '../../public/onlyflashcrew.png';
import onlyFlashEvento from '../../public/img/onlyflashevento.jpeg';


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
    'Neva',
    'Carlos',
    'Helmuth',
    'Diego',
    'Christian',
    'Laura'
  ];
  const instagram = [
    '@onlyflashtattoo',
    '@malandrinatattoo',
    '@nevatattoos',
    '@pinzoncarlos777',
    '@helmuthtattoo',
    '@ladiegatattoo',
    '@tintayhierbas_',
    '@laura.moth'
  ];

  const instagramUrl = [
    '/',
    'https://www.instagram.com/malandrinatattoo',
    'https://www.instagram.com/nevatattoos',
    'https://www.instagram.com/pinzoncarlos777',
    'https://www.instagram.com/helmuthtattoo',
    'https://www.instagram.com/ladiegatattoo',
    'https://www.instagram.com/tintayhierbas_',
    'https://www.instagram.com/laura.moth/'
  ];

  const photos =[
    {Crew}
  ]

  
  return (
   <main>
    <section className="container_one bg-white flex flex-col justify-center align-middle text-center md:flex-row gap-4">
    <div className="blue_container p-8 bg-sky-400 flex flex-col align-middle justify-center ">
          <div className=' mx-auto'>
            <Image
              src={onlyFlash}
              alt="onlyflash logo"
              className='w-[500px]'
            />
      </div>
          <div className="mt-10 mx-8 mb-48 flex flex-col items-center  text-white  ">
            <h1 className=''>COMUNIDAD OFICIO Y CULTURA </h1>
        <p className=' text-3xl w-80'>Muchos diseños unicos por tus tatuadores favoritos.</p>
      </div>
      
     
    </div>
    <div className="form_container mt-auto mb-auto ml-auto mr-auto  flex flex-col text-left ">      
     <Form />
    </div>
    </section>
      <section className="">
        <div className='text-center mt-8 text-lg font-bold'>
          <h1 className={yellowtail.className} >NOTICIAS</h1>
        </div>
    <div className="card_container flex bg-white shadow-xl mr-5 ml-5 mt-10 mb-5 rounded-lg ">
      <div className='image-container ml-5 mr-1 mt-10'>
        <Image
        src={Logo}
        alt='logo'
        width={150}
        />
      </div>
      <div className='card_info_container mt-10'>
        <div className=" font-bold text-slate-700"><h1 className=''>{nombre[0]}</h1></div>
            <div className="instagram font-light text-gray-500"><Link className={yellowtail.className} href={instagramUrl[0]}>{instagram[0]}</Link></div>
        <div className="text mr-10 mt-5">
          <p className=''> Semana a semana un grupo selecto de tatuadores tendrá un pack de diseños únicos para que te tatúes, en una sexy hoja de flash, a tentadores precios.

        También podrás adquirir una membresía con la que tendrás: descuentos, prioridad en citas, y otras sorpresas para nuestros clientes VIP.</p>
        </div>


        <div className="photo mr-10 mt-10">
          <Image
          src={Crew}
          alt={instagram[0]}           
          
        />
        </div>
        <div className="mt-10 mb-10 hover:text-sky-400"><Link href='/sabermas'>saber mas...</Link> </div>
        </div>
        </div>
        
      </section>
      <section className="">
        <div className="card_container flex bg-white shadow-xl mr-5 ml-5 mt-10 mb-5 rounded-lg ">
          <div className='image-container ml-5 mr-1 mt-10 w-60'>
            <Image
              src={Logo}
              alt='logo'
              width={100}
  
            />
          </div>
          <div className='card_info_container mt-10'>
            <div className="font-bold text-slate-700">
              <h1>{nombre[0]}</h1>
            </div>
            <div className="instagram font-light text-gray-500">
              <Link className={yellowtail.className} href={instagramUrl[0]}>{instagram[0]}
              </Link>
            </div>
            <div className="text mr-10 mt-5">
              <p className=''> Cada trimeste estaremos como una celebración destacada en el calendario de eventos culturales y artísticos. Te ofrecemos una experiencia inmersiva en la cultura del tatuaje, podras encontrar una variedad de diseños relacionados con este arte milenario.</p>
              <p>En esta ocacion selebramos nuestro primer evento en el bar Jackass en la ciudad de Bogotá.</p>
            </div>


            <div className="photo mr-10 mt-10 ">
              <Image
                src={onlyFlashEvento}
                width={500}
                alt={instagram[0]}
                className="rounded-lg"
              />
            </div>
            <div className="more mt-10 mb-10 hover:text-sky-400">
              <Link href='/sabermas'>saber mas...</Link>
            </div>
          </div>
        </div>

      </section>

   

   </main>
  )
}
