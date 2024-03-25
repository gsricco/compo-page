import LogoString from '@/components/Header/Logo/LogoString'
import Navigation from '@/components/Header/Navigation/Navigation'

import style from './Header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <LogoString />
      <Navigation />
    </header>
  )
}

export default Header
