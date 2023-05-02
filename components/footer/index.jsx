import Link from 'next/link'
import Image from 'next/image'
import instaLogo from '../../public/img/instagramLogo.svg'

export default function Footer(){
  return(
    <div>
      <footer className='footer_global_container  text-white'>
        <div className="footer_container flex flex-col">
          
          <div className="fotter_text ml-5 mt-5 mb-5">©2023 OnlyFlashTattoo 
            <div className="footer_instagram_container">
              <div className="instagram_logo mb-5">
                <Link href='https://www.instagram.com/onlyflashtattoo/'>
                  <Image
                  src={instaLogo}
                  alt="instagram"
                  width={30}
                  className='instagramLogo rounded-md'
                  />
              </Link>
              </div>

            </div>
          </div>          
        </div>
        
      </footer>
    </div>
  )
}