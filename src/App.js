import React, { useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Item from './components/Item'
import axios from 'axios'

const App =() => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.openbrewerydb.org/breweries`)
      //console.log(result.data)
      setItems(result.data)
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header/>
      <Item  items={items}/>
    </div>
  );
}

export default App;
