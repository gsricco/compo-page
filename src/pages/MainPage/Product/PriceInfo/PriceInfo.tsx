import style from './PriceInfo.module.scss'

type PropsType = {
  value: number
}
export const PriceInfo = ({ value }: PropsType) => {
  return (
    <div className={style.infoBlock}>
      <div className={style.itemInfo}>
        <div className={style.itemInfoTitle}>Завтра</div>
        <span>Доставка</span>
      </div>
      <div className={style.itemInfo}>
        <div className={style.itemInfoTitle}>{value} шт.</div>
        <span>Тарасовка</span>
      </div>
      <div className={style.itemInfo}>
        <div className={style.itemInfoTitle}>{value} шт.</div>
        <span>Тарасовка</span>
      </div>
    </div>
  )
}
