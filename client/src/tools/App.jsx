import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from 'antd';

import { HomePage, Tools_Navbar, Exchanges, CryptoDetails, Cryptocurrencies, News } from './components';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Tools_Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<HomePage />}>  </Route>
              <Route exact path='/exchanges' element={<Exchanges />}>  </Route>
              <Route exact path='/ryptocurrencies' element={<Cryptocurrencies />}> </Route>
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />}> </Route>
              <Route exact path='/news' element={<News />}>  </Route>
            </Routes>

          </div>
        </Layout>
        <div className='footer' >
          <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
            Crypton<br />
            
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
