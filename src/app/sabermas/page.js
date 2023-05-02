import Image from "next/image"
import Logo from '../../../public/img/logo3.png'
import Link from "next/link"
import Crew from '../../../public/onlyflashcrew.png'



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
    'https://www.instagram.com/onlyflashtattoo',
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
        src={Logo}
        alt='logo'
        width={250}
        className="rounded-full"
        />
      </div>
      <div className='card_info_container mt-10'>
        <div className="name font-bold"><h1>{nombre[0]}</h1></div>
        <div className="instagram font-light"><Link className=' text-gray-500' href={instagramUrl[0]}>{instagram[0]}</Link></div>
        <div className="text mr-10 mt-5">
          <p> Muchas veces pensamos en como podemos impactar nuestro entorno de una forma distinta a los que estamos siendo encaminados, sin tener una noción muy clara de este proceso inmediato.  Las redes sociales son un entorno en el cual pasamos mucho tiempo y logran influenciar muchas de nuestras decisiones. 

Es por esto que nace nuestra necesidad de crear OnlyFlashTattoo y usar estos medios para llegar a todos los amantes del tatuaje o ofrecer muchas ideas para ser tatuadas. <br/><br/>
Onlyflash esta integrado por: <b className="names_intro font-black">Nelson Neva, Carlos Pinzón, Catalina Fonseca, Helmuth Sanabria y Diego Gutierrez . </b>

Semana a semana tendremos un pack de diseños únicos para tatuar, en una sexi hoja de flash, a tentadores precios. También podrás adquirir una membresía con la que tendrás descuentos. prioridad en citas, y muchas mas para nuestro clientes vip.

Muchas gracias por leernos, apoyarnos, preguntarnos y tatuarse… Recuerda que Tattoo es para siempre   !!!.</p>




</div>
        <div className="photo mr-10 mt-10">
          <Image
          src={Crew}
          alt={instagram[1]}
          className=" rounded-md"
          
        />
        </div>
        <div className="more mt-10 mb-10"><Link href='/'>saber mas sobre cada uno...</Link> </div>
      </div>
    </div>
    </section>
   
    </div>
  )
}