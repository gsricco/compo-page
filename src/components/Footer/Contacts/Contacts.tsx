import logo from '@/styles/images/svg/logo.svg'

import style from './Contacts.module.scss'

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={style.contacts}>
        <img alt={'logo'} src={logo} />
        <div className={style.itemInfo}>
          <div className={style.itemInfoTitle}>8 800 841-95-95</div>
          <span>Служба поддержки</span>
        </div>
        <div className={style.itemInfo}>
          <div className={style.itemInfoTitle}>support@sport.ru</div>
          <span>Служба поддержки</span>
        </div>
      </div>
      <div className={style.popular}>
        <span>Вакансии</span>
        <span>Блог</span>
        <span>Акции </span>
        <div className={style.idea}>Предложить идею</div>
      </div>
    </div>
  )
}
