import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'


function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='*' element={<Navigate to={'/home'} />} />
    </Routes>
  );
}


export function PageNotFound() {
  return <div>Page Not Found</div>
}

export default App;
