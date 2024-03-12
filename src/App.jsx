import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/homepage';
import Registerpage from './page/register';
import LoginPage from './page/login';
import Globalscore from './page/score';
import Vote from './page/myvote';
import Myvote from './page/myvotemain';
// Other imports...

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Registerpage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/score' element={<Globalscore/>} />
          <Route path='/vote' element={<Vote/>}/>
          <Route path='/myvote' element={<Myvote/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
