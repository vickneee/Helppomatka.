import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import "./home.css"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"


function Home() {
  return (
    <div>

        
        <Header />
        <div className="homeContainer">
        <h1 className="homeTitle mb-3">Property by Cities</h1>
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guestes love</h1>
          <FeaturedProperties />
          <MailList/>
          <Footer/>
        </div>





    </div>
  )
}

export default Home