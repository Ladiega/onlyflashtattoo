import './globals.css'
import { Montserrat, Yellowtail } from 'next/font/google'
import Footer from './components/footer'
const montserrat = Montserrat({
  
  subsets: ['latin']
  
})
const yellowtail = Yellowtail({
  weight:'400',
  subsets:['latin']
})

export const metadata = {
  title: 'OnlyFlashTattoo',
  description: 'Comunidad y Amor por el Tatuaje',
}


export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <body className={montserrat.className}>{children}
      <Footer/>
      </body>
     
    </html>

    
  )
}
