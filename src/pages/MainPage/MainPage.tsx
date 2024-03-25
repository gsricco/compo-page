import PhotoBlock from '@/components/PhotoBlock/PhotoBlock'
import Title from '@/components/Titles/Title'
import Description from '@/pages/MainPage/Description/Description'
import Product from '@/pages/MainPage/Product/Product'

import style from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div className={style.mainPage}>
      <Title />
      <div className={style.product}>
        <PhotoBlock />
        <div className={style.contentBlock}>
          <Product />
          <Description />
        </div>
      </div>
    </div>
  )
}

export default MainPage
