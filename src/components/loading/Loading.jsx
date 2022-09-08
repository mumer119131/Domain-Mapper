import React from 'react'
import './loading.css'


const LOADING_REF = React.createRef()  

const Loading = () => {
  
  return (
    <div className="spinner__container" ref={LOADING_REF}>
        <div className="spinner"></div>
    </div>
  )
}

export default Loading