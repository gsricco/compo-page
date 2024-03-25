import msg from '@/styles/images/svg/circle_msg.svg'

import style from '@/components/Header/Navigation/Navigation.module.scss'

const Navigation = () => {
  return (
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
  )
}

export default Navigation
