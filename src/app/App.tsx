import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import MainPage from '@/pages/MainPage/MainPage'

import '../styles/index.scss'

function App() {
  return (
    <div className={'container'}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App
