import minus from '@/styles/images/svg/icon_minus.svg'
import plus from '@/styles/images/svg/icon-1_plus.svg'

import style from './Counter.module.scss'

type PropsType = {
  handlerClick: () => void
  setValue: (value: number) => void
  value: number
}
const Counter = ({ handlerClick, setValue, value }: PropsType) => {
  return (
    <div className={style.counter}>
      <div onClick={() => (value != 0 ? setValue(value - 1) : 0)}>
        <img alt={'plus'} src={minus} />
      </div>
      <div onClick={handlerClick}>{value} штуки</div>
      <div onClick={() => setValue(value + 1)}>
        <img alt={'minus'} src={plus} />
      </div>
    </div>
  )
}

export default Counter
