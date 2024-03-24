import { useState } from 'react'

import arrRigth from '@/styles/images/svg/arow_rigth.svg'
import arrLeft from '@/styles/images/svg/arrow_left.svg'
import basket from '@/styles/images/svg/basket.svg'
import photo from '@/styles/images/svg/cross.svg'
import photo1 from '@/styles/images/svg/cross1.svg'
import photo2 from '@/styles/images/svg/cross2.svg'
import photo3 from '@/styles/images/svg/cross3.svg'
import photo4 from '@/styles/images/svg/cross4.svg'
import heart from '@/styles/images/svg/heart_blue.svg'
import minus from '@/styles/images/svg/icon_minus.svg'
import plus from '@/styles/images/svg/icon-1_plus.svg'
import { Button } from '@mui/material'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { styled } from '@mui/material/styles'

import style from './MainPage.module.scss'

const MainPage = () => {
  const [counter, setCounter] = useState<boolean>(true)
  const [value, setValue] = useState<number>(24)

  const handlerClick = () => {
    setCounter(!counter)
  }

  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch disableRipple focusVisibleClassName={'.Mui-focusVisible'} {...props} />
  ))(({ theme }) => ({
    '& .MuiSwitch-switchBase': {
      '&.Mui-checked': {
        '& + .MuiSwitch-track': {
          backgroundColor: '#1551E5',
          border: 0,
          opacity: 1,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
        color: '#fff',
        transform: 'translateX(16px)',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        border: '6px solid #fff',
        color: '#1551E5',
      },
      margin: 2,
      padding: 0,
      transitionDuration: '300ms',
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#ffffff',
      boxSizing: 'border-box',
      height: 22,
      width: 22,
    },
    '& .MuiSwitch-track': {
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      borderRadius: 26 / 2,
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },

    height: 26,
    padding: 0,
    width: 42,
  }))

  return (
    <div className={style.mainPage}>
      <div className={style.titleBlock}>
        <div className={style.catalogWay}>Каталог / Обувь / Кроссовки / Беговые</div>
        <div className={style.title}>Кроссовки мужские Skechers Sunny Dale</div>
      </div>
      <div className={style.product}>
        <div className={style.photoBlock}>
          <img alt={'catalog'} src={photo} />
          <div className={style.slider}>
            <img alt={'slider'} src={arrLeft} />
            <img alt={'catalog'} src={photo1} />
            <img alt={'catalog'} src={photo2} />
            <img alt={'catalog'} src={photo3} />
            <img alt={'catalog'} src={photo4} />
            <img alt={'slider'} src={arrRigth} />
          </div>
        </div>
        <div className={style.contentBlock}>
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
                  <IOSSwitch defaultChecked sx={{ m: 1 }} />
                  <span>Заказ упаковкой</span>
                </div>
              </div>
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
              <div className={style.btn}>
                {counter ? (
                  <Button onClick={handlerClick} variant={'contained'}>
                    <img alt={'backet'} src={basket} />В корзину
                  </Button>
                ) : (
                  <div className={style.counter}>
                    <div onClick={() => (value != 0 ? setValue(value - 1) : 0)}>
                      <img alt={'plus'} src={minus} />
                    </div>
                    <div onClick={handlerClick}>{value} штуки</div>
                    <div onClick={() => setValue(value + 1)}>
                      <img alt={'minus'} src={plus} />
                    </div>
                  </div>
                )}
                <div className={style.iconHeart}>
                  <img alt={'heart'} src={heart} />
                </div>
              </div>
            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className={style.characteristics}>
              <h4>Характеристики</h4>
              <div className={style.itemInfo}>
                <div className={style.itemInfoTitle}>ELC00696</div>
                <span>Код поставщика</span>
              </div>
              <div className={style.itemInfo}>
                <div className={style.itemInfoTitle}>ELC0200000696</div>
                <span>Артикул</span>
              </div>
              <div className={style.itemInfo}>
                <div className={style.itemInfoTitle}>ELC00696</div>
                <span>Код РАЭК</span>
              </div>
              <div className={style.itemInfo}>
                <div className={style.itemInfoTitle}>ELC00696</div>
                <span>Код ЕТМ</span>
              </div>
              <div className={style.itemInfo}>
                <div className={style.itemInfoTitle}>Electric used</div>
                <span>Бренд</span>
              </div>
              <div className={style.itemInfo}>
                <div className={style.itemInfoTitle}>ELC00696</div>
                <span>Серия</span>
              </div>
              <div className={style.itemInfo}>
                <div className={style.itemInfoTitle}>ELC0200000696</div>
                <span>Код производителя </span>
              </div>
            </div>
          </div>
          <div className={style.description}>
            <h3>Описание товара</h3>
            <p>
              Создание приверженного покупателя специфицирует неопровержимый комплексный анализ
              ситуации. CTR существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на
              потребителя определяет возрастающий интеграл по поверхности, что известно даже
              школьникам. Отсюда естественно следует, что коммуникация уравновешивает косвенный
              фактор коммуникации. Поле направлений естественно допускает экспериментальный скачок
              функции, таким образом сбылась мечта идиота - утверждение полностью доказано.
              Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
