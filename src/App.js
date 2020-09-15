import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar.js'

function App() {
  return (
    // BEM naming convention 
    <div className="App">
        <h1>Hello world!</h1>    
        {/* Header */}
        <Header/>
        <div className="app__body">
          {/* SideBAr */}
            <Sidebar/>

        {/* Chat Screen React Router */}


        </div>
        
    </div>
  )
}

export default App
      