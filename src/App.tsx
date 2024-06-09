import Nav from "./components/nav/Nav"
import Banner from "./components/banner/Banner"
import About from "./components/about/About"
import Exp from "./components/exp/Experiencias"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"


function App() {

  return (
    <div className="bg-white pr-0 lg:px-60">
      <div className="">
        <Nav/>
      </div>
      <div className="">
        <Banner/>
      </div>
      <div className="">
        <About/>
      </div>
      <div className="">
        <Exp/>
      </div>
      <div className="">
        <Projects/>
      </div>
      <div className="">
        <Skills/>
      </div>
      <div className="">
        <Contact/>
      </div>
      <div className="">
        <Footer/>
      </div>
    </div>
  )
}

export default App
