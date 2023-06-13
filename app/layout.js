import { Footer } from '@components/Footer'
import { metadata } from './globals.css'
  import Navbar from '@components/Navbar'
export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <title>TalentTrove-Navigate Career</title>
          <meta name="description"  />
        </head>
        <body className="flex justify-center flex-col">
          <main  className=" main flex justify-center flex-col  " >
          <Navbar />
            {children}
          <Footer/>
          </main>
        </body>
      </html>
    </>
  )
}
