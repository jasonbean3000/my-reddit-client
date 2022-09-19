import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
import Content from './features/Content/Content';
import Header from './features/Header/Header';
import Subreddits from './features/Subreddits/Subreddits';
import ScrollToTop from './utilities/ScrollToTop';



function App() {
  return (
    
    <Router>
      <div className="App">
        <header >
          <Header />
        </header>
        <main>
        <div className='aside'>
        <aside>
        <Subreddits />
        </aside>
        </div> 
        <div className='container'>
          <ScrollToTop />
          <Route path="/">
              <Redirect to="/r/soccer" />
            </Route>
          <Route path="/r/:subreddit">
            <Content />
          </Route>
          </div>
        </main>
      </div>
    </Router>
    
  );
}

export default App;
