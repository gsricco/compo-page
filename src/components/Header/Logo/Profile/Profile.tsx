import avatar from '@/styles/images/svg/Avatar.svg'

import style from '@/components/Header/Logo/Profile/Profile.module.scss'

const Profile = () => {
  return (
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
  )
}

export default Profile
