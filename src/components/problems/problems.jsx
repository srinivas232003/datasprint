import React from "react"
import './problems.css'
const DomainCard=(props)=>{
    const dt={'tag':'HTML','title':'HTML Syntax','desc':'The syntax of a language is how it works. How to actually write it. Learn HTML syntax…'}
    return(
        <div class="crd-grid-space">
        <a class="crd" href="https://codetheweb.blog/2017/10/06/html-syntax/" style={{backgroundImage: "url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)"}}>
          <div>
            <h1>{dt.title}</h1>
            <p>{dt.desc}</p>
            <div class="tags">
              <div class="tag">{dt.tag}</div>
            </div>
          </div>
        </a>
      </div>
    )
}
const DomainList=()=>{
    return(
<section class="crds-wrapper">
<DomainCard/>  
<DomainCard/>
</section>
    )
}
export default DomainList;