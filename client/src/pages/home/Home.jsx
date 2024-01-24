import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import "./home.css"
import SearchComponent from "../../components/searchComponent/SearchComponent"


function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <SearchComponent/>
    </div>
  )
}

export default Home
