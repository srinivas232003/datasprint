import React from "react";
import './swiper.scss'
import Countdown from "../timer/timer";
// import "../timer/timer.scss"
// import "./temp.css"
import Type from "../type/type";
const Card=()=>{
  const dt=[
  {
    "img":"",
     "title":"AI in renewable energy.",
    "desc":"Applying AI to enhance renewable energy systems, optimizing efficiency and sustainability in power generation and distribution.",
  },
  {
  "img":"",
     "title":"Track wildlife habitats and foretell the extinction of endangered animal species.",
    "desc":"Monitoring ecosystems, predicting endangered species' survival using AI to safeguard biodiversity and prevent extinction.",
  },
  {
  
  "img":"",
     "title":"Virtual Assistant support for health care",
    "desc":"AI-powered virtual assistant aiding healthcare professionals and patients with medical information and support.",
  },
  {
  "img":"",
     "title":"Report and assist senior population on financial fraud and risk .",
    "desc":"Utilizing AI to detect and prevent financial fraud and risks for elderly individuals with FinTech platforms.",
  },
  {
  
  "img":"",
     "title":"Forecast weather and historical impact to choose the best crop based on geo-location.",
    "desc":" Predicting ideal crops using AI-driven weather forecasts and historical data, optimizing agricultural productivity based on location.",
  },
  {
  
  "img":"",
     "title":"Social media moderation to avoid cyber crimes against women.",
    "desc":"Employing AI for moderating social media, preventing cybercrimes targeting women, ensuring online safety.",
  },
  {
  
  "img":"",
     "title":"Image Processing for Early Detection of Diseases.",
    "desc":"Utilizing image processing and AI for early disease identification, improving medical diagnosis and patient outcomes.",
  }
]
  return(
    dt.map((i)=>{return(
    <li class="crdss_item" id="item_salad">
    <div class="crds">
      <div class="crds_content">
        <h2 class="crds_title">{i.title}</h2>
        <div class="crds_text">
          <p>{i.desc}</p>
        </div>
      </div>
    </div>
  </li>)})
  )
}

const Cardlist=()=>{
  return(
    <div class="main" >
  <ul class="crdss" style={{paddingLeft:"0"}}>
    <Card/>
  </ul>
</div>
  )
}
//to be added when registration opens//
const style={
  "padding-top":"13%",
  "position":"relative",
  "text-align":"center",
  "height":"600px",
  "display":"flex",
  "justify-content":"center",
  "align-items":"center",
}
const cmt={
  "position":"relative",
  "color":"white",

}
// const Cardlist=()=>{
//   return(
//     <div className=".cnt" style={style}>
//       <div className='cmt' style={cmt}>
//         <h1 class="he1"> <Type dt={["Problems will be updated soon!","Stay tuned"]}/></h1>
//       <Countdown/>
//       <h1 class="abt">until Hackaton</h1>
//     </div>
//     </div>
//   )
// }
export default Cardlist;