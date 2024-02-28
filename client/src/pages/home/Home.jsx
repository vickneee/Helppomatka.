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
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <PropertyList/>
                <FeaturedProperties/>
                <MailList/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
