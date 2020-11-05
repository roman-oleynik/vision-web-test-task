import React from 'react';
import { MainPage } from 'app/pages/MainPage';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage';
import { BooksPage } from '../../pages/BooksPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { Navbar } from '../../components/Navbar';


function App() {
  return (
  <>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/books" component={BooksPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </main>
  </>
  );
}

export default App;