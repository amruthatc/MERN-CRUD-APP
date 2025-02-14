import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UpdateUser from './UpdateUser'
import CreateUser from './CreateUser'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/' element={<Users/>}></Route>
<Route path='/create' element={<CreateUser/>}></Route>
<Route path='/update/:id' element={<UpdateUser/>}></Route>

</Routes>

</BrowserRouter>


    </div>
      
    
  )
}

export default App
