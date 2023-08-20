import React from "react"
import "./guidelines.css"
import {Link} from "react-router-dom"
const Line=(props)=>{
    return(
        <li>{props.line}</li>
    )
}
const Guidelines=(props)=>{
    return(
<div className="guide-cont">
<div class="wrapper">
  <h2>Guidelines</h2>
  <ol>
     { props.list.map((e)=><Line line={e} />)} 
  </ol>
</div>
<Link to="/register"><button class="butn">Register</button></Link>
</div>
    )
}
export default Guidelines;