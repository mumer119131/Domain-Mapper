import Result from './result/Result'
import React, { useState } from 'react'
import LOADING_REF from '../loading/Loading'
import './search.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const axios = require('axios').default;

const Search = () => {
  
  const [domainData, setDomainData] = useState({})
  const URL_REF = React.createRef()
  const URL = document.getElementById('url')
  const SEARCH_REF = React.createRef()
  async function searchResult(){
    SEARCH_REF.current.style.filter = 'blur(8px)'
    if (!URL_REF.current.value){
      toast.warn('Enter a url',  {theme: "colored"})
      SEARCH_REF.current.style.filter = 'blur(0)'
      return
    }
    try{
      await axios.post('https://domain-mapper.herokuapp.com/',  {"url" : URL_REF.current.value})
        .then(response => setDomainData(response))
      
        console.log(domainData['domain_name'])
      
    }catch{
      toast.error('Error')
      SEARCH_REF.current.style.filter = 'blur(0)'
      return
    }
    
    
    SEARCH_REF.current.style.filter = 'blur(0)'
  }
  return (
    <div className="search__container" ref={SEARCH_REF}>
      <ToastContainer />
        <div className="search__item">
          <h2>Search Domain Info</h2>
          <p>Enter the domain name to search the information.</p>
          <input type="text" placeholder='Enter Url e.g : https://www.google.com' id='url' name='url' ref={URL_REF}/>
          <button onClick={()=>{searchResult()}}>Search</button>
          <small>&copy;Designed By : Muhammad Umer</small>
        </div>
        {Object.keys(domainData).length != 0 && <Result domainData = {domainData} url={URL.value}/>}
    </div>
  )
}

export default Search