import Image from "next/image"
import Logo from '../../../public/img/logo3.png'
import Link from "next/link"
import Crew from '../../../public/onlyflashcrew.png'

import Neva from '../../../public/img/nevaProfile2.jpeg'
import Cata from '../../../public/img/cataProfile2.jpeg'
import Diego from '../../../public/img/diegoProfile2.jpeg'
import Hache from '../../../public/img/hProfile2.jpeg'
import Carlos from '../../../public/img/cataProfile2.jpeg'


export default function SaberMas(){

  const nombre = [
    'OnlyFlash',
    'Catalina Fonseca',
    'Nelson Neva',
    'Carlos Pinzon',
    'Helmuth Sanabria',
    'Diego Gutierrez'];
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
         
    <div className="card_container flex flex-col bg-white mr-5 ml-5 mt-10 mb-5 rounded-lg ">


    <div className=" m-10 text-cyan-500">
       <h1 className=" uppercase text-5xl text-center font-black">Quienes somos?</h1>
    </div>
    

     <div className="img_container flex flex-row">
      <div className='image-container ml-5 mr-1 mt-10'>
        <Image
        src={Neva}
        alt='logo'
        width={250}
        className="rounded-full"
        />
        <div>{nombre[2]}</div>
        <div>Contacto</div>
        <div> 
          <Link href={instagramUrl[2]} target="_blank">
            {instagram[2]}
          </Link>         
        </div>
        
      </div>
      <div className='image-container ml-5 mr-1 mt-10'>
        <Image
        src={Hache}
        alt='logo'
        width={250}
        className="rounded-full"
        />
        <div>{nombre[4]}</div>
        <div>Contacto</div>
        <div> 
          <Link href={instagramUrl[4]} target="_blank">
            {instagram[4]}
          </Link>         
        </div>
      </div> 
      <div className='image-container ml-5 mr-1 mt-10'>
        <Image
        src={Cata}
        alt='logo'
        width={250}
        className="rounded-full"
        />
       <div>{nombre[1]}</div>
        <div>Contacto</div>
        <div> 
          <Link href={instagramUrl[1]} target="_blank">
            {instagram[1]}
          </Link>         
        </div>
      </div>
      <div className='image-container ml-5 mr-1 mt-10'>
        <Image
        src={Carlos}
        alt='logo'
        width={250}
        className="rounded-full"
        />
      <div>{nombre[3]}</div>
        <div>Contacto</div>
        <div> 
          <Link href={instagramUrl[3]} target="_blank">
            {instagram[3]}
          </Link>         
        </div>
      </div>
      <div className='image-container ml-5 mr-1 mt-10'>
        <Image
        src={Diego}
        alt='logo'
        width={250}
        className="rounded-full"
        />
        <div>{nombre[5]}</div>
        <div>Contacto</div>
        <div> 
          <Link href={instagramUrl[5]} target="_blank">
            {instagram[5]}
          </Link>         
        </div>
      </div>
      </div>
     
     
    <div><Link href='/'>Home</Link></div>

    </div>

    
    </section>
   
    </div>
  )
}