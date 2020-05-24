import React from 'react'
import s from './switch.module.css'
import cn from 'classnames'

const Switch = ({ icon, isActive, onClick }) => {
  return (
    <div className={cn(s.root, isActive && s.active)} onClick={onClick}>
      <div className={s.circle}>
        <img src={icon} className={s.icon} />
      </div>
    </div>
  )
}

export default Switch;