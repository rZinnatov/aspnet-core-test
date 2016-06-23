import React, { PropTypes } from 'react'
import styles from './styles.css'

export const Icon = props => {
  return (
    <i className={styles[props.type]}></i>
  )
}

Icon.propTypes = {
  type: PropTypes.string
}

export default Icon
