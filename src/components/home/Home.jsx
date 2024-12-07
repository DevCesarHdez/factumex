import Header from './Header'
import Likes from './Likes'
import ContactUs from './ContactUs'
import useTitlePage from '@/hooks/useTitlePage'

const Home = () => {
  useTitlePage('Cesar Hernandez')
  return (
    <>
      <Header />
      <Likes />
      <ContactUs />
    </>
  )
}

export default Home