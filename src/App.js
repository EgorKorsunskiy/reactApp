import { Switch, Route, Redirect } from "react-router-dom";
import { Main } from './Main'
import { Auth } from './Auth'
import { Profile } from './Profile'
import styles from'./App.module.css';

function App() {

  const errorMessage = ['Please fill all fields!'];

  return (
    <div className={styles['body']}>
      <Switch>
        
        <Route path='/auth/:errorIndex?' render={() => (
          <Auth errorMessage={errorMessage}/>
        )} />

        <Route path='/profile'>
          <Switch>
            <Route path='/profile/:username' component={Profile} />
            <Redirect to='/' />
          </Switch>
        </Route>

        <Main />
      </Switch>
    </div>
  );
}

export default App;
