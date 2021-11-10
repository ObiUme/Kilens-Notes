
import {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'

function App() {

  const [currentUser, setCurrentUser] = useState(false)

  function Login(user){
    setCurrentUser(user)
  }

  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setCurrentUser(user))
      }
    })
  }, [])

  return (
    <div>
      <h2>hello</h2>
      <Routes>
      <Route 
          path='/signin'
          element={<SignIn onLogin={Login}/>}
        />
        </Routes>
    </div>
  );
}

export default App;
