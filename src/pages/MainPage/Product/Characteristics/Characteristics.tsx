import style from './Characteristics.module.scss'

export const Characteristics = () => {
  const items = [
    { description: 'Код поставщика', title: 'ELC00696' },
    { description: 'Артикул', title: 'ELC0200000696' },
    { description: 'Код РАЭК', title: 'ELC00696' },
    { description: 'Код ЕТМ', title: 'ELC00696' },
    { description: 'Бренд', title: 'Electric used' },
    { description: 'Серия', title: 'ELC00696' },
    { description: 'Код производителя', title: 'ELC0200000696' },
  ]

  return (
    <div className={style.characteristics}>
      <h4>Характеристики</h4>
      {items.map(item => (
        <div className={style.itemInfo} key={item.description}>
          <div className={style.itemInfoTitle}>{item.title}</div>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  )
}
