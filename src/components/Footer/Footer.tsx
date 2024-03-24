import style from './Footer.module.scss'

import info from '../../styles/images/svg/icon_info.svg'
import pdf from '../../styles/images/svg/icon_pdf.svg'
import video from '../../styles/images/svg/icon_video.svg'
import youtube from '../../styles/images/svg/icon_youtube.svg'
import logo from '../../styles/images/svg/logo.svg'
import logo_gray from '../../styles/images/svg/logo_gray.svg'
export const Footer = () => {
  return (
    <div className={style.footerPage}>
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
      <div className={style.linkBlock}>
        <div className={style.popular}>
          <div className={style.itemPopular}>
            Женщинам
            <div className={style.itemLink}>
              <span>Одежда</span>
              <span>Обувь</span>
              <span>Аксессуары</span>
              <span>Белье</span>
              <span>Bra fitting</span>
            </div>
          </div>
          <div className={style.itemPopular}>
            Мужчинам
            <div className={style.itemLink}>
              <span>Одежда</span>
              <span>Обувь</span>
              <span>Аксессуары</span>
              <span>Белье</span>
            </div>
          </div>
          <div className={style.itemPopular}>
            Детям
            <div className={style.itemLink}>
              <span>Одежда</span>
              <span>Обувь</span>
              <span>Аксессуары</span>
              <span>Белье</span>
              <span>Игрушки</span>
              <span>Малыши</span>
            </div>
          </div>
          <div className={style.itemPopular}>
            Виды спорта
            <div className={style.itemLink}>
              <span>Велоспорт</span>
              <span>Туризм</span>
              <span>Тренажеры и фитнес</span>
              <span>Командные виды спорта</span>
              <span>Самокаты</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.basement}>
        <div className={style.social}>
          <div className={style.socialItem}>
            <img alt={'pdf'} src={pdf} />
            <span>PDF презентация</span>
          </div>
          <div className={style.socialItem}>
            <img alt={'pdf'} src={video} />
            <span>Видео инструкция </span>
          </div>
          <div className={style.socialItem}>
            <img alt={'pdf'} src={info} />
            <span>FAQ</span>
          </div>
          <div className={style.socialItem}>
            <img alt={'pdf'} src={youtube} />
            <span>Мы на YouTube</span>
          </div>
          <div className={style.socialItem}>
            <span>Политика конфиденциальности</span>
          </div>
          <div className={style.socialItem}>
            <span>Лицензионное соглашение</span>
          </div>
        </div>
        <div className={style.politic}>
          Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией
          Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом
          Российской Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
          информационных технологиях и о защите информации",
        </div>
        <div className={style.logoFooter}>
          <img alt={'logo'} src={logo_gray} />
          <span>Разработка платформы</span>
        </div>
      </div>
    </div>
  )
}
