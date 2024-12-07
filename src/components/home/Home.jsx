import Header from './Header'
import Likes from './Likes'
import ContactUs from './ContactUs'
import TableUsers from './TableUsers'
import useTitlePage from '@/hooks/useTitlePage'

const Home = () => {
  useTitlePage('Cesar Hernandez')
  return (
    <>
      <Header />
      <TableUsers />
      <Likes />
      <ContactUs />
    </>
  )
}

export default Home