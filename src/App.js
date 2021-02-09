import React from 'react'
import Detail from './pages/Detail'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import './App.css'
import { Link, Route } from 'wouter'

import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

function App() {  

  return (
    <StaticContext.Provider value={{
      name:'carles',
      subscribeteCanal: true
    }}>
      <div className="App">
        <section className="App-content">   
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>        
          <GifsContextProvider>
            <Route 
              path="/" 
              component={Home}
            />
            <Route 
              path="/search/:keyword" 
              component={SearchResults}
            />        
            <Route 
              path="/gif/:id" 
              component={Detail}
            />  
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );

}

export default App;

