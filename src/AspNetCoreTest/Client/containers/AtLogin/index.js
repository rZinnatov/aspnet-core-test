import React, { Component } from 'react'
import axios from 'axios'
import { renderErrorFor, removeErrorFor } from 'utils'
import styles from './styles.css'

import Logo from 'components/Logo'
import ModalTooltip from 'components/ModalTooltip'

export class AtLogin extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoginInProgress: false,
      validationErrors: {}
    }
  }

  handleLogin (e) {
    e.preventDefault()

    const data = {
      'userName': this.refs.userName.value,
      'password': this.refs.password.value,
      'actiTimeUrl': this.refs.actiTimeUrl.value
    }

    this.setState({ isLoginInProgress: true })

    axios.post('/api/v1/auth/at', data).then(response => {
      if (response.data.success) {
        document.location.reload(true)
      }
    })
    .catch(response => {
      this.setState({ validationErrors: response.data, isLoginInProgress: false })
    })
  }

  handleUrlChange (e) {
    const newErrors = removeErrorFor('actiTimeUrl', this.state.validationErrors)
    if (!newErrors) {
      return false
    }

    this.setState({ validationErrors: newErrors })
  }

  handleUserChange (e) {
    const newErrors = removeErrorFor('userName', this.state.validationErrors)
    if (!newErrors) {
      return false
    }

    this.setState({ validationErrors: newErrors })
  }

  handlePasswordChange (e) {
    const newErrors = removeErrorFor('password', this.state.validationErrors)
    if (!newErrors) {
      return false
    }

    this.setState({ validationErrors: newErrors })
  }

  render () {
    const options = {}
    options.disabled = this.state.isLoginInProgress ? 'disabled' : ''

    const { validationErrors } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.logo}><Logo /></div>
        <div className={styles.loginFormContainer}>
          <h1 className={styles.heading}>Welcome to actiTIME QuickBooks Integrator</h1>
          <span className={styles.subHeading}>Please log in to your actiTIME</span>
          <form onSubmit={::this.handleLogin}>
            <label className={styles.urlLabel}>
              URL of your actiTIME Server
              &nbsp;
              <span className='muted-text'>(you can copy it from the browser address string)</span>
              <ModalTooltip>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </ModalTooltip>
            </label>
            <input className={styles.urlInput}
              ref='actiTimeUrl'
              onChange={::this.handleUrlChange}
              type='text'
              placeholder='enter your actiTIME Server URL'
              autoComplete='on'
              {...options} />
            <div className={styles.urlError}>{renderErrorFor('actiTimeUrl', validationErrors)}</div>
            <div className={styles.credentials}>
              <div className={styles.credentialsRow}>
                <label className={styles.credentialsLabel}>Username</label>
                <input className={styles.credentialsInput}
                  ref='userName'
                  onChange={::this.handleUserChange}
                  type='text'
                  placeholder='enter your actiTIME username'
                  {...options} />
              </div>
              <div className={styles.credentialsErrorRow}>{renderErrorFor('userName', validationErrors)}</div>
              <div className={styles.credentialsRow}>
                <label className={styles.credentialsLabel}>Password</label>
                <input className={styles.credentialsInput}
                  ref='password'
                  onChange={::this.handlePasswordChange}
                  type='password'
                  placeholder='enter your actiTIME password'
                  {...options} />
                <button className={styles.loginButton} {...options}>Login</button>
              </div>
              <div className={styles.credentialsErrorRow}>{renderErrorFor('password', validationErrors)}</div>
            </div>
            <hr className={styles.dashedLine} />
            <span className={styles.forgotPassword}>
              Forgot your password? Use password recovery function of your actiTIME
            </span>
          </form>
        </div>
      </div>
    )
  }
}

export default AtLogin
