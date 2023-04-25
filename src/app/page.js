import Link from 'next/link'

import Image from 'next/image'
import Logo from '../../public/logo.png'
import Crew from '../../public/onlyflashcrew.png'





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
    <div className="blue_container  flex flex-col justify-center  align-center ">
      <div className='mt-10'><h1>OnlyFlashTattoo</h1></div>
      <div className="mt-10 ml-5 mr-5 text-justify">
        <p>Si queres recibir noticias registra tu correo y apoya a tus tatuadores favoritos.</p>
        </div>
      
      <div className="img_container ml-auto mr-auto mb-10 ">
      <Image
        src={Logo}
        alt="logo onlyflash"
        className='logo_onlyflash'
      />
      </div>
    </div>
    <div className="form_container flex flex-col">      
      <form action="" className='flex flex-col items-center space-x-6'>
        <h2 className='text-black mt-10'>Noticias</h2>
        <label htmlFor="Correo" className='block'>Correo</label>
        <input type="email" name="email" id="email" 
    />
        <button type='submit' >Submit</button>
      </form>
    </div>
    </section>
    <section className="contianer_two bg-blue">
    <div className="card_container flex bg-white mr-5 ml-5 mt-10 mb-5 rounded-lg ">
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
          <p> Semana a semana un gurpo selecto de tatuadores les tendrá un pack de diseños únicos para tatuar, en una sexi hoja de flash, a tentadores precios.

        También podrás adquirir una membresía con la que tendrás descuentos. preoridad en citas, y muchas mas para nuestro clientes vip.</p>




</div>
        <div className="photo mr-10 mt-10">
          <Image
          src={Crew}
          alt={instagram[0]}
          
        />
        </div>
        <div className="more mt-10 mb-10"><Link href='/'>saber mas...</Link> </div>
      </div>
    </div>
    </section>
   

   </main>
  )
}
