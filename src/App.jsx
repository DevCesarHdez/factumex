import Navbar from '@/components/navbar/Navbar'
import Home from '@/components/home/Home'

import { Routes, Route } from 'react-router'

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
