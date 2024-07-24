import Nav from "./Nav"
import Skills from "./Skills"
import Banner from "./Banner"
import Footer from "./Footer"
import Header from "./Header/Header"
import Profile from "./Profile/Profile"
import Projects from "./Projects"
import Education from "./Education"





function App(){
  const profiletitle="Web Developer"
  const qualifications=[
    {"name":"MCA","university":"MG","grade":"o"},
    {"name":"BCA","university":"MG","grade":"o"},
    {"name":"BBA","university":"MG","grade":"o"},
    {"name":"MCA","university":"MG","grade":"o"},
    {"name":"BCA","university":"MG","grade":"o"},
    {"name":"BBA","university":"MG","grade":"o"},
]
  return(
    <div>
     
      <h1>Hello World</h1>
      <Nav></Nav>
      <Header></Header>
      <Profile profiletitle={profiletitle}></Profile>
      <Education qualifications={qualifications}></Education>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
      
    </div>
  )
}

export default App