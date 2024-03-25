import { useState } from 'react'

import Counter from '@/components/Counter/Counter'
import { BaseSwitch } from '@/components/Switch/BaseSwitch'
import { Characteristics } from '@/pages/MainPage/Product/Characteristics/Characteristics'
import { PriceInfo } from '@/pages/MainPage/Product/PriceInfo/PriceInfo'
import basket from '@/styles/images/svg/basket.svg'
import heart from '@/styles/images/svg/heart_blue.svg'
import { Button } from '@mui/material'

import style from './Product.module.scss'

const Product = () => {
  const [counter, setCounter] = useState<boolean>(true)
  const [value, setValue] = useState<number>(24)

  const handlerClick = () => {
    setCounter(!counter)
  }

  return (
    <div className={style.productDataBlock}>
      <div className={style.prices}>
        <span>166 534.00 цена без скидки</span>
        <div className={style.priceItem}>
          <span>122 566 ₽</span>
          <div className={style.actions}>-15%</div>{' '}
        </div>
        <div className={style.package}>
          <div className={style.order}>
            <div className={style.message}>
              <span className={style.amount}>12 штук в уп</span>
            </div>
            <BaseSwitch defaultChecked sx={{ m: 1 }} />
            <span>Заказ упаковкой</span>
          </div>
        </div>
        <PriceInfo value={value} />
        <div className={style.btn}>
          {counter ? (
            <Button onClick={handlerClick} variant={'contained'}>
              <img alt={'product'} src={basket} />В корзину
            </Button>
          ) : (
            <Counter handlerClick={handlerClick} setValue={setValue} value={value} />
          )}
          <div className={style.iconHeart}>
            <img alt={'heart'} src={heart} />
          </div>
        </div>
      </div>
      <hr style={{ margin: '0', padding: '0' }} />
      <Characteristics />
    </div>
  )
}

export default Product
