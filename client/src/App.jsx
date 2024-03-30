import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css'
// import Tools from './Pages/Tools';
import Homepage from './Pages/Homepage';
import Tools from "./tools/Tools";

import { Provider } from 'react-redux';
import store from "./tools/app/store";
import CryptocurrencyPage from "./tools/pages/CryptocurrencyPage";
import CryptoDetailsPage from "./tools/pages/CryptoDetailsPage";
import Newspage from "./tools/pages/Newspage";
import AddFunding from "./Pages/AddFunding"
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import { useState } from "react";
import Vision from "./Pages/Vision";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Profile from "./Pages/Profile";
import Admin from "./Pages/Admin"

const App = () => {
  const [user, setUser] = useState(false)
  return (
    <div className='App'>
      <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage user={user}/>}>  </Route>
          {/* <Route exact path='/tools' element={<Tools />}>  </Route> */}
          {/* <Route exact path='/exchanges' element={<Exchanges />}>  </Route> */}
          <Route exact path='/cryptocurrencies' element={<CryptocurrencyPage />}> </Route>
          <Route exact path='/crypto/:coinId' element={<CryptoDetailsPage />}> </Route>
          <Route exact path='/news' element={<Newspage />}>  </Route>
          <Route exact path='/addFunding' element={<AddFunding user={user}/>}>  </Route>
          <Route exact path='/login' element={<Login setUser={setUser}/>}>  </Route>
          <Route exact path='/register' element={<Register />}>  </Route>
          <Route exact path='/home' element={<Home user={user} />}>  </Route>
          <Route exact path='/vision' element={<Vision user={user} />}>  </Route>
          <Route exact path='/about' element={<About user={user} />}>  </Route>
          <Route exact path='/team' element={<Team user={user} />}>  </Route>
          <Route exact path='/profile' element={<Profile user={user}/>}>  </Route>
          <Route exact path='/admin' element={<Admin />}>  </Route>
        </Routes>
      </BrowserRouter>
      </Provider>


    </div>
  )
}

export default App
