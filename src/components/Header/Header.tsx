import avatar from '@/styles/images/svg/Avatar.svg'
import basket from '@/styles/images/svg/basket_blue.svg'
import bell from '@/styles/images/svg/bell_blue.svg'
import msg from '@/styles/images/svg/circle_msg.svg'
import heart from '@/styles/images/svg/heart.svg'
import logo from '@/styles/images/svg/logo.svg'
import ListIcon from '@mui/icons-material/List'
import SearchIcon from '@mui/icons-material/Search'
import { Button, InputAdornment, TextField } from '@mui/material'

import style from './Header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img alt={'logo'} src={logo} />
        <Button startIcon={<ListIcon />} variant={'contained'}>
          Меню
        </Button>
        <div className={style.search}>
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position={'end'}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
            id={'standard-search'}
            label={'Название запроса'}
            type={'search'}
            variant={'outlined'}
          />
        </div>
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
        <div className={style.profile}>
          <img alt={'avatar'} src={avatar} />
          <span>Ермаков Е.</span>
          <select defaultValue={5}>
            <option value={5}></option>
            <option value={10}>Корзина</option>
            <option value={20}>Настройки</option>
            <option value={30}>Выйти</option>
          </select>
        </div>
      </div>
      <div className={style.navigation}>
        <div className={style.nav}>
          <span>Мои заказы</span>
          <span>Сотрудники</span>
          <span>Шаблоны заказов</span>
          <span>Обращения</span>
        </div>
        <div className={style.optionBlock}>
          <div className={style.message}>
            <img alt={'circle'} src={msg} />
            <span>Ваш менеджер</span>
          </div>
          <span>%</span>
          <span>Акции</span>
          <span>Блог</span>
        </div>
      </div>
    </header>
  )
}

export default Header
