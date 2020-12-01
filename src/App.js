import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Main } from './Main'
import { Auth } from './Auth'
import { Profile } from './Profile'
import './App.css';

function App() {

  const errorMessage = ['Please fill all fields!'];

  const [username, setUsername] = useState('');

  const editUsername = (e) => {
    setUsername(e.target.value);
  }

  return (
    <div className="body">
      <Switch>
        
        <Route path='/auth/:errorIndex'>
          <Auth username={username} onInput={editUsername} errorMessage={errorMessage}/>
        </Route>

        <Route path='/auth'>
          <Auth username={username} onInput={editUsername}/>
        </Route>

        <Route path='/profile'>
          <Switch>
            <Route path='/profile/:username'>
              <Profile />
            </Route>
            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Route>

        <Route path='/'>
            <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
