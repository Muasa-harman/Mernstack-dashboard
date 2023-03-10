
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Dashboard from './scenes/Dashboard';
import Layout from './scenes/Layout';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Navigate to='/dashboard' replace/>} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
