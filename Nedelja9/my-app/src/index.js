import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import { getUsers } from './service';
import ListaKorisnika from './components/ListaKorisnika';
import Pretraga from './components/Pretraga';

const App = () => {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    getUsers().then(res => {
      setUsers(res.data.data)
    })
  },[])
  
  return(
    <Router>
      <nav>
        <Link to='/'>Pocetna stranica</Link>
        <Link to='/pretraga'>Pretraga</Link>
      </nav>

      <Switch>
        <Route exact path='/'>
          <ListaKorisnika users={users} />
        </Route>
        <Route path='/pretraga'>
          <Pretraga users={users}/>
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);