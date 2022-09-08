import React from 'react'
import './result.css'
const Result = (props) => {
  
   const domainData = props.domainData['data']
   console.log(domainData)
  return (
    <div className="result__container">
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(domainData).map((key, index) => {
                    return (
                        <tr key={index}>
                            <td>{key}</td>
                            <td>{ domainData[key]} {!domainData[key] && "Not Available"}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Result