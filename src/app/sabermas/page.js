import Image from "next/image";
import Link from "next/link";

import Neva from '../../../public/img/nevaProfile2.jpeg';
import Cata from '../../../public/img/cataProfile2.jpeg';
import Diego from '../../../public/img/diegoProfile2.jpeg';
import Hache from '../../../public/img/hProfile2.jpeg';
import Carlos from '../../../public/img/carlosProfile2.jpeg';
import Kristian from '../../../public/img/tripiProfile.jpeg';
import Laura from '../../../public/img/lauraProfile.jpg'
import Onlyflash from '../../../public/img/logo2.png'

import { Montserrat, Yellowtail } from "next/font/google";


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400'
});

const yellowtail = Yellowtail({
  subsets: ['latin'],
    weight: '400'
});

export default function SaberMas(){
 
  const nombre = [
    'OnlyFlash',
    'Catalina',
    'Neva',
    'Carlos',
    'Helmuth',
    'Diego',
    'Kristian',
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
    'https://www.instagram.com/onlyflashtattoo',
    'https://www.instagram.com/malandrinatattoo',
    'https://www.instagram.com/nevatattoos',
    'https://www.instagram.com/pinzoncarlos777',
    'https://www.instagram.com/helmuthtattoo',
    'https://www.instagram.com/ladiegatattoo',
    'https://www.instagram.com/tintayhierbas_',
    'https://www.instagram.com/laura.moth/'
  ];

  return(
    <div>
      <section className="contianer_two bg-blue">
         
    <div className="card_container flex flex-col  bg-white mr-5 ml-5 mt-10 mb-5 rounded-lg ">


    <div className=" m-10 text-cyan-400 text-center text-7xl">
            <h1 className={yellowtail.className}>¿Quiénes somos?</h1>
    </div>  

     <div className="img_container flex flex-col align-middle justify-center text-center sm:grid sm:grid-cols-4">
      <div className='image-container ml-5 mr-1 mt-10'>
              <div className="flex justify-center">
                <Link href={instagramUrl[2]} target="_blank">
                   <Image
                    src={Neva}
                    alt='logo'
                    width={250}
                    className="rounded-full hover:opacity-90 cursor-pointer"
                    />
                </Link>         
              </div>
        <div>{nombre[2]}</div>
              <div className=" font-extrabold">Contacto</div>
          <div className="text-slate-600"> 
                <Link href={instagramUrl[2]} target="_blank" className={yellowtail.className}>
                  {instagram[2]}
                </Link>         
          </div>
        
      </div>
      <div className='image-container ml-5 mr-1 mt-10'>
              <div className="flex justify-center">
                <Link href={instagramUrl[4]} target="_blank">              
                  <Image
                    src={Hache}
                    alt='logo'
                    width={250}
                    className="rounded-full hover:opacity-90 cursor-pointer"
                  />
                </Link>   
             </div>
        <div>{nombre[4]}</div>
              <div className=" font-extrabold">Contacto</div>
         <div className="text-slate-600"> 
                <Link href={instagramUrl[4]} target="_blank" className={yellowtail.className}>
            {instagram[4]}
          </Link>         
        </div>
      </div> 
      <div className='image-container ml-5 mr-1 mt-10'>
        <div className="flex justify-center">
                <Link href={instagramUrl[1]} target="_blank">
                    <Image
                      src={Cata}
                      alt='logo'
                      width={250}
                    className="rounded-full hover:opacity-90 cursor-pointer"
                    />
                </Link>           
        </div>

       <div>{nombre[1]}</div>
              <div className=" font-extrabold">Contacto</div>
         <div className="text-slate-600"> 
            <Link href={instagramUrl[1]} target="_blank" className={yellowtail.className}>
            {instagram[1]}
          </Link>         
        </div>
      </div>
      <div className='image-container ml-5 mr-1 mt-10'>
              <div className="flex justify-center">
                <Link href={instagramUrl[3]} target="_blank">
                  <Image
                    src={Carlos}
                    alt='logo'
                    width={250}
                    className="rounded-full hover:opacity-90 cursor-pointer"
                  />
                </Link>  
              </div>
      <div>{nombre[3]}</div>
              <div className=" font-extrabold">Contacto</div>
        <div className="text-slate-600"> 
                <Link href={instagramUrl[3]} target="_blank" className={yellowtail.className}>
            {instagram[3]}
          </Link>         
        </div>
      </div>
      <div className='image-container ml-5 mr-1 mt-10'>
              <div className="flex justify-center">
                <Link href={instagramUrl[5]} target="_blank">
                 <Image
                  src={Diego}
                  alt='logo'
                  width={250}
                  className="rounded-full hover:opacity-90 cursor-pointer"
                  />
                </Link>   
              </div>
        <div>{nombre[5]}</div>
              <div className=" font-extrabold">Contacto</div>
        <div className=" text-slate-600"> 
                <Link href={instagramUrl[5]} target="_blank" className={yellowtail.className}>
            {instagram[5]}
          </Link>         
        </div>
            </div>
            
            <div className='image-container ml-5 mr-1 mt-10'>
              <div className="flex justify-center">
                <Link href={instagramUrl[7]} target="_blank">
                  <Image
                    src={Laura}
                    alt='logo'
                    width={200}
                    className="rounded-full hover:opacity-90 cursor-pointer"
                  />
                </Link>
              </div>
              <div>{nombre[7]}</div>
              <div className=" font-extrabold">Contacto</div>
              <div className=" text-slate-600">
                <Link href={instagramUrl[7]} target="_blank" className={yellowtail.className}>
                  {instagram[7]}
                </Link>
              </div>
            </div>

            <div className='image-container ml-5 mr-1 mt-10'>
              <div className="flex justify-center">
                <Link href={instagramUrl[6]} target="_blank">
                  <Image
                    src={Kristian}
                    alt='logo'
                    width={250}
                    className="rounded-full hover:opacity-90 cursor-pointer"
                  />
                </Link>
              </div>
              <div>{nombre[6]}</div>
              <div className=" font-extrabold">Contacto</div>
              <div className=" text-slate-600">
                <Link href={instagramUrl[6]} target="_blank" className={yellowtail.className}>
                  {instagram[6]}
                </Link>
              </div>
            </div>

            <div className='image-container ml-5 mr-1 mt-20'>
              <div className="flex justify-center ">
                <Link href={instagramUrl[0]} target="_blank">
                  <Image
                    src={Onlyflash}
                    alt='logo'
                    width={220}
                    className="rounded-full hover:opacity-90 cursor-pointer"
                  />
                </Link>
              </div>
              <div>{nombre[0]}</div>
              <div className=" font-extrabold">Contacto</div>
              <div className=" text-slate-600">
                <Link href={instagramUrl[0]} target="_blank" className={yellowtail.className}>
                  {instagram[0]}
                </Link>
              </div>
            </div>
      </div>
     
     
    <div className=" mx-2 text-cyan-400"><Link href='/' className={montserrat.className}>Home</Link></div>

    </div>

    
    </section>
    
   
    </div>
  )
}