import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const App = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<NotFound/>} loader={() => {document.title = "Not Found | PISchool Counseling Guidance"}}/> */}
      <Route path="/login" element={<Login/>} loader={() => {document.title = "Login | PISchool Counseling Guidance"}}/>
      <Route path="/register" element={<Register/>} loader={() => {document.title = "Register | PISchool Counseling Guidance"}}/>
    </Routes>
  )
}

export default App