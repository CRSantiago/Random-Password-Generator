import './App.css'
import React from 'react'

import Password from './Password'

function App() {
  const [passwords, setPasswords] = React.useState([])
  const [passwordLength, setPasswordLength] = React.useState(8)
  const [showPasswords, setShowPasswords] = React.useState(false)
  const [canUseButton, setCanUseButton] = React.useState(true)

  function handleChange(e){
    setPasswordLength(e.target.value)
  }

  function createPasswords(length) {
    if(canUseButton){
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-<>?{}[';
      const charactersLength = characters.length;
      for(let i  = 0; i < 4; i++){
        let password = ''
        for(let i = 0; i < length; i++){
          password += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        setPasswords(prevState => [...prevState, password])
      }
      setShowPasswords(true)
      setCanUseButton(false)
    }
  }

  function clearPasswords(){
    setPasswords([])
    setShowPasswords(false)
    setCanUseButton(true)
    setPasswordLength(8)
  }

  const passwordElements = passwords.map((password, index) => (
    <Password key={index} password={password} />
  ))

  return (
    <div className="App">
      <div className="app--text">
        <h1>Generate a <br/><span>random password</span></h1>
        <p>Let's make sure those passwords are secure</p>
      </div>
      <div className='input-div'>
        <label htmlFor="quantity">Length (between 8 and 16):</label>
        <input type="number" id="quantity" name="quantity" min="8" max="16" onChange={handleChange}/>
      </div>
      <div className="button-div">
        <button onClick={() => createPasswords(passwordLength)}>
          Generate Password
        </button>
        <button onClick={clearPasswords}>
          Clear Passwords
        </button>
      </div>
      <hr />
      {showPasswords && 
      <div className='password-div'>
        {passwordElements}
      </div>}
    </div>
  );
}

export default App;
