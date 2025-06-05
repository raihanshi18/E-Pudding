import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import History from "./Pages/History";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Setting from "./Pages/Setting";
import ProtectedRoute from "./Pages/Auth/ProtectedRoute";

function App() {
  return (
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/history" element={<History />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
  )
}

export default App;