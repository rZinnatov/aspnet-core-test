import React, { Component } from 'react'
import axios from 'axios'
import styles from './styles.css'

import Logo from 'components/Logo'

export class QbLogin extends Component {
  constructor(props) {
    super(props);

    this.state = { userName: '', actiTimeUrl: '' }
  }

  componentDidMount() {
    axios.get('/api/v1/info/current-user').then(response => {
      const userName = `${response.data.firstName} ${response.data.lastName}`
      this.setState({ userName })
    })
    .catch(response => {
      console.error(response)
    })

    axios.get('/api/v1/info/at-url').then(response => {
      this.setState({ actiTimeUrl: response.data.atUrl })
    })
    .catch(response => {
      console.error(response)
    })
  }

  render () {
    const { userName, actiTimeUrl } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.leftPane}>
          <div className={styles.logo}><Logo/></div>
          <div className={styles.userMenu}>
            <span>{userName + ' ' + actiTimeUrl}</span>
          </div>
        </div>
        <div className={styles.rightPane}>
          <div className={styles.qbContainer}>
            <h1 className={styles.userWelcome}>Welcome { userName }</h1>
            <span className={styles.connectionStatus}>Connection with actiTIME established</span>
            <span className={styles.selectorLabel}>Now please specify your version of QuickBooks</span>
            <div className={styles.versionSelector}>
              <div className={styles.selectionItem}>
                <h1 className={styles.qboHeading}>I'm using QuickBooks Online Plus</h1>
                <a className={styles.connectButton} href='/auth/qbo'> </a>
              </div>
              <div className={styles.selectionItem}>
                <h1 className={styles.qbdHeading}>I'm using QuickBooks Desktop</h1>
                <a className={styles.installConnector} href='javascript:void(0)'>Install actiTIME Connector</a>
                <span className={styles.connectorDescription}>actiTIME Connector is an MS Windows application that allows actiTIME QB Integrator to load actiTIME data to your QuickBooks</span>
              </div>
            </div>
            <div className={styles.gettingStarted}>Short getting started info</div>
          </div>
        </div>
      </div>
    )
  }
}

export default QbLogin
