import React from "react"
import Switch from './../ui/switch'
import maleIcon from '../../images/male-icon.svg'
import femaleIcon from '../../images/female-icon.svg'
import s from './styles.module.css'
import useStore from '../../stores/useStore'
import { observer } from "mobx-react-lite"

const SEX = {
  MALE: 'male',
  FEMALE: 'female'
}

const BasicCharInfo = () => {
  const { sex, setSex } = useStore()

  const setMaleSex = () => setSex(SEX.MALE)
  const setFemaleSex = () => {
    setSex(SEX.FEMALE)
  }

  return (
    <div>
      <div className={s.label}>ПОЛ:</div>
      <div className={s.switches}>
        <Switch icon={maleIcon} isActive={sex === SEX.MALE} onClick={setMaleSex} />
        <div className={s.divider} />
        <Switch isActive icon={femaleIcon} isActive={sex === SEX.FEMALE} onClick={setFemaleSex} />
      </div>
      <div className={s.switches}>
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor='height'>РОСТ СМ:</label>
          <input type='number' className={s.input} id='height'></input>
        </div>
        <div className={s.divider} />
        <div className={s.inputWrapper}>
          <label className={s.label} htmlFor='weight'>ВЕС КГ:</label>
          <input type='number' className={s.input} id='weight'></input>
        </div>
      </div>
    </div>
  )
}

export default observer(BasicCharInfo)