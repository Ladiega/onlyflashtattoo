import Image from "next/image"
import Link from "next/link"
import CataProfile from '../../../public/img/cataProfile.jpeg'



export default function SaberMas(){

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
  

  return(
    <div>
      <section className="contianer_two bg-blue">
    <div className="card_container flex bg-white mr-5 ml-5 mt-10 mb-5 rounded-lg ">
      <div className='image-container ml-5 mr-1 mt-10'>
        <Image
        src={CataProfile}
        alt='logo'
        width={150}
        className="rounded-full"
        />
      </div>
      <div className='card_info_container mt-10'>
        <div className="name font-bold"><h1>{nombre[1]}</h1></div>
        <div className="instagram font-light"><Link className=' text-gray-500' href={instagramUrl[1]}>{instagram[1]}</Link></div>
        <div className="text mr-10 mt-5">
          <p> Semana a semana un gurpo selecto de tatuadores les tendrá un pack de diseños únicos para tatuar, en una sexi hoja de flash, a tentadores precios.

        También podrás adquirir una membresía con la que tendrás descuentos. preoridad en citas, y muchas mas para nuestro clientes vip.</p>




</div>
        <div className="photo mr-10 mt-10">
          <Image
          src={CataProfile}
          alt={instagram[1]}
          className=" rounded-md"
          
        />
        </div>
        <div className="more mt-10 mb-10"><Link href='/sabermas'>saber mas...</Link> </div>
      </div>
    </div>
    </section>
   
    </div>
  )
}