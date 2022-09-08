import React from 'react'
import './search.css'
const Search = () => {

  async function searchResult(){
    
  }
  return (
    <div className="search__container">
        <div className="search__item">
          <h2>Search Domain Info</h2>
          <p>Enter the domain name to search the information.</p>
          <input type="text" placeholder='Enter Url e.g : https://www.google.com'/>
          <button onClick={()=>{searchResult()}}>Search</button>
        </div>
    </div>
  )
}

export default Search