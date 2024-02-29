import "./mailList.css";
import { Link } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

const MailList = () => {
    return (
        <div className="main-container col-md-12 col-sm-6">
            <div className="mail">
                <h1 className="mailTitle mb-4">Säästäminen on helppo, niin helppo!</h1>
                <p className="mailDesc mb-4">Rekisteröidy ja näet aina ensimmäisennä parhaat tarjoukset</p>
                    <div className="link-group pt-1 mb-4 col-lg-6 col-md-8 col-sm-10">
                        <Link to="/register" className="btn mlbtn btn-lg btn-block">Rekiströidy mukaan tästä</Link>
                    </div>
            </div>
        </div>
    )
}

export default MailList;
