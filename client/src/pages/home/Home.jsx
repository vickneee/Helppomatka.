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
        {/*<h1 className="homeTitle mb-3">Kiinteistöt kaupungeittain</h1>*/}
          <Featured />
          {/*<h1 className="homeTitle">Selaa kiinteistötyypin mukaan</h1>*/}
          <PropertyList />
          {/*<h1 className="homeTitle">Vieraiden rakastamia paikkoja</h1>*/}
          <FeaturedProperties />
          <MailList/>
          
        </div>
        <Footer/>
    </div>
  )
}

export default Home
