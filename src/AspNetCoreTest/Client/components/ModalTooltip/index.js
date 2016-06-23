import React, { Component } from 'react'
import styles from './styles.css'

import Icon from 'components/Icon'

export class ModalTooltip extends Component {
  render () {
    return (
      <span className={styles.tooltipTrigger}><Icon type='question' /></span>
    )
  }
}

export default ModalTooltip
