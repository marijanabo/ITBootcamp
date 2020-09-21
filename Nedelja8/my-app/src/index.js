import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import Select from './components/Select'
import PastLaunches from './components/PastLaunches'
import { getCompanyName, getPastLaunches } from './service';

const App = () => {

  const [info, setInfo] = useState('');
  const [launches, setLaunches] = useState([]);

  useEffect(()=>{
    getCompanyName().then(res=>{
        setInfo(res.data.name)
    })
},[])

  useEffect(()=>{
    getPastLaunches().then(res=>{
      setLaunches(res.data)
    })
  },[])

  return(
    <>
      <Header name={info}/>
      <Select setLaunches={setLaunches} />
      <PastLaunches launches={launches} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);