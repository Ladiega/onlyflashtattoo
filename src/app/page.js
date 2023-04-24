import Image from 'next/image'
import Logo from '../../public/logo.png'
export default function Home() {
  return (
   <main>
    <section className="container_one bg-white flex justify-center align-middle text-center">
    <div className="blue_container  flex flex-col justify-center  align-center ">
      <div><h1>OnlyFlashTattoo</h1></div>
      <div>
        <p>Si queres recibir noticias registra tu correo y apoya a tus tatuadores favoritos.</p>
        </div>
      blue
      <div className="img_container">
      <Image
        src={Logo}
        alt="logo onlyflash"
        className='logo_onlyflash'
      />
      </div>
    </div>
    <div className="form_container flex flex-col">      
      <form action="">
        <h2>Noticias</h2>
        <label htmlFor="Correo">Correo</label>
        <input type="email" name="email" id="email" />
        <button type='submit' >Submit</button>
      </form>
    </div>
    </section>
    <section className="contianer_two bg-blue">
    container two
    </section>

   </main>
  )
}
