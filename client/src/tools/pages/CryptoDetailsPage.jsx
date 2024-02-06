import React from 'react'
import { Tools_Navbar, CryptoDetails } from '../components'
import { Layout, Typography, Space } from 'antd'
import { Link } from 'react-router-dom'

export default function CryptoDetailsPage() {
  return (
    <div>
      <div>
        <div className="app">
          <div className="navbar">
            <Tools_Navbar />
          </div>
          <div className='main'>
            <Layout>
              <div className='routes'>
                <CryptoDetails />
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
      </div>
    </div>
  )
}
