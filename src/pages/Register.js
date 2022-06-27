import React from 'react'
import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />

        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {values.showAlert && <Alert />}

        {/* name field */}

        {/* if values.isMember is true 
        then it should not shows the name 
        because its now in login */}

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}></FormRow>

        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}></FormRow>
        <button type="submit" className="btn btn-block">
          submit
        </button>

        {/* toggle button */}

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
