import React from "react"
import './chrono.scss'

const Chront=()=>{
  let dt=[{"date":"August 17","title":"Registration Begins"},{"date":"September 1","title":"Registration ends"},{"date":"September 3","title":"Shortlisting"},{"date":"September 7","title":"Hackathon begins"}]
  return(
    <div className="mg">
<div className="con">
  <div className="wr cvr" >
    <h1>Important Dates</h1>
    <ul className="sessions">
      {
        dt.map((i)=>{return(
          <li>
          <div className="tm">{i.date}</div>
          <p>{i.title}</p>
        </li>)
        })
      }
    </ul>
  </div>
</div> 
</div>
  )}

  export default Chront; 