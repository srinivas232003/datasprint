import React from "react"
import "./guidelines.css"
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
</div>
    )
}
export default Guidelines;