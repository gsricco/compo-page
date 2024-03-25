import Profile from '@/components/Header/Logo/Profile/Profile'
import Search from '@/components/Header/Logo/Search/Search'
import basket from '@/styles/images/svg/basket_blue.svg'
import bell from '@/styles/images/svg/bell_blue.svg'
import heart from '@/styles/images/svg/heart.svg'
import logo from '@/styles/images/svg/logo.svg'
import ListIcon from '@mui/icons-material/List'
import { Button } from '@mui/material'

import style from '@/components/Header/Logo/LogoString.module.scss'

const LogoString = () => {
  return (
    <div className={style.logo}>
      <img alt={'logo'} src={logo} />
      <Button startIcon={<ListIcon />} variant={'contained'}>
        Меню
      </Button>
      <Search />
      <div className={style.iconsHeader}>
        <div className={style.iconItemHeader}>
          <img alt={'bell'} src={bell} />
        </div>
        <hr />
        <div className={style.iconItemHeader}>
          <img alt={'heart'} src={heart} />
        </div>
      </div>
      <div className={style.basket}>
        <img alt={'basket'} src={basket} />
        <span>144 235₽</span>
      </div>
      <Profile />
    </div>
  )
}

export default LogoString
