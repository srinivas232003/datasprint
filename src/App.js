import logo from './logo.svg';
import './App.css';
import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import Footer from './components/footer/footer';
import Type from './components/type/type';
import Navbar from './components/navbar/nav';
import Hero from './components/hero/hero';
import {Routes,Route} from "react-router-dom"
import Guidelines from './components/guidelines/guidelines';
import DomainList from './components/problems/problems';
import Cardlist from './components/swiper/swiper';
import Form from './components/forms/forms';
const slideData = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    button: 'Shop now',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
  }
]

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

return (
  <div class="app">
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} 
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        particles: {
          number: {
            value: 43,
            limit: 300,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "images/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false
            }
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 10,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
      
        backgroundMask: {
          enable: true,
          cover: {
            color: {
              value: {
                r: 0,
                g: 0,
                b: 0
              }
            }
          }
        },
        retina_detect: true,
        fps_limit: 60,
        background: {
          image: "url('https://particles.js.org/images/background3.jpg')"
        },
        smooth:true,
      }}/>
      <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Hero/>}/>
      <Route path='guidelines' element={<Guidelines list={["1. It is a 24 hour OFFLINE Hackathon.", "2. No registration fee", "3. Team should consist of 2 - 4 members.", "4. Only the Team Lead should register for the Hackathon.", "5. The teams should choose the problem statement from the list available on the site", "6. Registrations will be shortlisted and the shortlisted team will be informed.", "7. All participants are required to bring their Laptops, Ethernet cable and College ID (other accessories if necessary).", "8. All design elements, code, hardware builds, etc. for your project must be created during the event.", "9. Food will be provided for all the participants.", "10. If accommodation is required kindly send the request to Datasprint@sairamit.edu.in", "Note: If we find damages to any property/equipment of the college, they'll be charged the price of the property damaged, this will be non-partial"]}/>}/>
      <Route path='problems' element={<Cardlist/>}/>
      <Route path='register' element={<Form/>}/>
      {/* <Route path='admin' element={<Signin/>}/> */}
        {/* <Route path="post" element={<MyEditor/>}/> */}
        
      </Route>
    </Routes>
    <Footer/> 

</div>
);
}

export default App;
