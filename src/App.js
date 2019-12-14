import React from 'react';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './component/SearchResult'
import { Router,Link } from '@reach/router'
import ResDetails from './component/ResDetails'

function App() {
  const Homepg =() =>(
    <div>
      <nav>
        <Link to="/">Home</Link>| 
        <Link to="/search/">Search</Link>|
        <Link to="/">Logout</Link>
      </nav>
      <Home/>
    </div>
  )

  const Search =()=>(
    <div>
      <nav>
          <Link to="/">Home</Link>| 
          <Link to="/search/">Search</Link>|
          <Link to="/">Logout</Link>
        </nav>
        <SearchResults />
    </div>
      
  )
  return (
        <div className="App">
          <Router>
            <Homepg path="/" />
            <Search path="/search/"/>
            <ResDetails path='/restaurant/:id'/>
          </Router>
           
        </div>
  );
}

export default App;
