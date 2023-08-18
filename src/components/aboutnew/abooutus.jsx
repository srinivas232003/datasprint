import React from "react";
import "./aboutus.css"
const Aboutus=()=>{
    return(
        <div class="abt-us">
            {/* <h1 style={{"text-align":"center","color":"rgb(191, 101, 191)"}}>About us</h1>
            <div className="abt-cnt">
            <div>Welcome to the Department of Artificial Intelligence and Data Science of Sri Sairam Institute of Technology , a realm where human ingenuity converges with cutting-edge technology to shape the future. Our department is a hub of innovation, exploration, and transformation, dedicated to unraveling the mysteries of Artificial Intelligence and harnessing its vast potential to revolutionize industries, enhance human capabilities, and drive progress.</div>
<br/>
<div>In our department, we are at the forefront of the AI revolution, pushing boundaries, and redefining what's possible. Our team of faculties and experts collaborate to further research on AI systems that can reason, learn, and adapt, mimicking human intelligence while harnessing the power of computational prowess. The department also focuses on advancements of the domain with collaboration with in College Professional Societies such as the Institute of Electronics annd Electrical Engineering (IEEE).</div>
<br/>
<div>
As you step into the Department of Artificial Intelligence, prepare to embark on a voyage of discovery, innovation, and transformation. Whether you're a student, a researcher, an industry professional, or simply an AI enthusiast, we invite you to join us in shaping a world where machines and humans coexist in harmony, forging a brighter, more intelligent future for all.
</div>
</div> */}
<div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container bottomContainer">
    <div class="ultimateImg">
      <img class="mainImg" src="https://res.cloudinary.com/dcsduqstu/image/upload/v1692385739/sairamit-ai-ds-20overview-623x288_zxh0kf.jpg"/>
      <div class="purpleBox">
<img className="mini" src="https://res.cloudinary.com/dcsduqstu/image/upload/v1692376767/SIT_-_LOGO_WHITE_gkz6xk.png"></img>        
      </div>
    </div>
    <div class="allText bottomText">
      <p class="text-blk headingText">
        About us
      </p>
      <p class="text-blk subHeadingText">
      Shaping Tomorrow with AI and Data Science </p>
      <p class="text-blk description">
      Welcome to the heart of innovation and exploration - the Department of <span class="ai">Artificial Intelligence and Data Science </span> Sri Sairam Institute of Technology. Our dedicated team of experts and visionary faculty members drive forward the AI revolution, researching systems that emulate human intelligence while harnessing computational power. With a focus on collaboration and industry advancements, we are crafting a future where humans and machines thrive together. Join us in pioneering the next era of intelligence and progress.      </p>
      <a href="http://ai.sairamit.edu.in/" class="">
          <button className="butn">Visit us</button>
      </a>
    </div>
  </div>
</div>
        </div>
    )
}
export default Aboutus;