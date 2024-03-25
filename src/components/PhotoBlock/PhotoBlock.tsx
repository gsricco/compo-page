import arrRight from '@/styles/images/svg/arow_rigth.svg'
import arrLeft from '@/styles/images/svg/arrow_left.svg'
import photo from '@/styles/images/svg/cross.svg'
import photo1 from '@/styles/images/svg/cross1.svg'
import photo2 from '@/styles/images/svg/cross2.svg'
import photo3 from '@/styles/images/svg/cross3.svg'
import photo4 from '@/styles/images/svg/cross4.svg'

import style from '@/components/PhotoBlock/PhotoBlock.module.scss'

const PhotoBlock = () => {
  const items = [arrLeft, photo1, photo2, photo3, photo4, arrRight]

  return (
    <div className={style.photoBlock}>
      <img alt={'catalog'} src={photo} />
      <div className={style.slider}>
        {items.map(photo => (
          <img alt={'catalog'} key={photo} src={photo} />
        ))}
      </div>
    </div>
  )
}

export default PhotoBlock
