import info from '@/styles/images/svg/icon_info.svg'
import pdf from '@/styles/images/svg/icon_pdf.svg'
import video from '@/styles/images/svg/icon_video.svg'
import youtube from '@/styles/images/svg/icon_youtube.svg'
import logo_gray from '@/styles/images/svg/logo_gray.svg'

import style from './Basement.module.scss'

export const Basement = () => {
  const items = [
    { icon: pdf, title: 'PDF презентация' },
    { icon: video, title: 'Видео инструкция' },
    { icon: info, title: 'FAQ' },
    { icon: youtube, title: 'Мы на YouTube' },
    { icon: null, title: 'Политика конфиденциальности' },
    { icon: null, title: 'Лицензионное соглашение' },
  ]

  return (
    <div className={style.basement}>
      <div className={style.social}>
        {items.map(i => (
          <div className={style.socialItem} key={i.title}>
            {i.icon && <img alt={'categories'} src={i.icon} />}
            <span>{i.title}</span>
          </div>
        ))}
      </div>
      <div className={style.politic}>
        Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией
        Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом
        Российской Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ &quot;Об информации,
        информационных технологиях и о защите информации&quot;,
      </div>
      <div className={style.logoFooter}>
        <img alt={'logo'} src={logo_gray} />
        <span>Разработка платформы</span>
      </div>
    </div>
  )
}
