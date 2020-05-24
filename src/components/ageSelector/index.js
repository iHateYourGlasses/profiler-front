import React from "react"
import s from './styles.module.css'
import useStore from '../../stores/useStore'
import { observer } from "mobx-react-lite"
import cn from 'classnames'

const ages = []
for (let i = 10; i < 46; i++) {
  ages.push(i);
}

const AgeSelector = () => {
  const { age: currentAge, setAge } = useStore()
  const [hoverAge, setHoverAge] = React.useState(undefined)

  return (
    <div className={s.root}
      onMouseOut={() => setHoverAge(undefined)}>
      <span className={s.label}>Возраст:</span>
      {ages.map((age, index) => (
        <div className={s.age}
          onClick={() => setAge(age)}
          onMouseOver={() => setHoverAge(age)}
          key={index}>{age}
          <div className={cn(s.circle, age <= currentAge && s.active, age <= hoverAge && s.hoverActive)} />
        </div>))}
    </div>
  )
}

export default observer(AgeSelector)