import React from 'react';
import ReactDOM from 'react-dom'
import Forma from './components/Forma'
import Card from './components/Card'

const App = (url,opis) => {
  return (
     <>
      <Forma/>
      <Card 
        url="https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1571606035"
        opis="Smiling Emoji with Smiling Eyes"
      />
     </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);