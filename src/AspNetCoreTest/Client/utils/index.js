import React from 'react'
import R from 'ramda'

export function renderErrorFor (ref, errors) {
  if (!errors) {
    return false
  }

  if (!errors[ref]) {
    return false
  }

  return (
    <div className='error'>{errors[ref].errors[0].errorMessage}</div>
  )
}

export function removeErrorFor (ref, errors) {
  if (!errors) {
    return false
  }

  if (!errors[ref]) {
    return false
  }

  return R.omit([ref], errors)
}
