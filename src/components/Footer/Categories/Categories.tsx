import style from './Categories.module.scss'

export const Categories = () => {
  const items = [
    { item: ['Одежда', 'Обувь', 'Аксессуары', 'Белье', 'Bra fitting'], title: 'Женщинам' },
    { item: ['Одежда', 'Обувь', 'Аксессуары', 'Белье'], title: 'Мужчинам' },
    { item: ['Одежда', 'Обувь', 'Аксессуары', 'Белье', 'Игрушки', 'Малыши'], title: 'Детям' },
    {
      item: ['Велоспорт', 'Туризм', 'Тренажеры и фитнес', 'Командные виды спорта', 'Самокаты'],
      title: 'Виды спорта',
    },
  ]

  return (
    <div className={style.linkBlock}>
      <div className={style.popular}>
        {items.map(i => (
          <div className={style.itemPopular} key={i.title}>
            {i.title}
            <div className={style.itemLink}>
              {i.item.map(cat => (
                <span key={cat}>{cat}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
