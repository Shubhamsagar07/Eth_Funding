import React from 'react'
import {
  Navbar,
  Footer,
  Services,
  Welcome,
} from "../components"

export default function Homepage(user) {
  return (
    <div>
      <div className='App'>
        <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <Navbar user={user}/>
            <Welcome user={user}/>
          </div>
          <Services />
          <Footer />
        </div>
      </div>
    </div>
  )
}
