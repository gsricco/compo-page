import { Basement } from '@/components/Footer/Basement/Basement'
import { Categories } from '@/components/Footer/Categories/Categories'
import { Contacts } from '@/components/Footer/Contacts/Contacts'

import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={style.footerPage}>
      <Contacts />
      <Categories />
      <Basement />
    </div>
  )
}
