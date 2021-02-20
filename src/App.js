import React, { useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Item from './components/Item'
import axios from 'axios'
import Search from './components/Search';

const App =() => {

  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios.get(`https://api.openbrewerydb.org/breweries`)
  //     console.log(result.data)
  //     setItems(result.data)
  //     }
  //     fetchItems()
  // }, [])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${query}`)

      if(query === ""){
        
          const fetchItems = async () => {
            const result = await axios.get(`https://api.openbrewerydb.org/breweries`)
            console.log(result.data)
            setItems(result.data)
            }
            fetchItems()
        
      }

      //console.log(result.data)
      setItems(result.data)
    }
    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <Item  items={items}/>
    </div>
  );
}

export default App;
