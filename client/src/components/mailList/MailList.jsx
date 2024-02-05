import "./mailList.css"
import { Link } from 'react-router-dom';

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Säästäminen on helppo, niin helppo!</h1>
            <span className="mailDesc">Rekisteröidy ja lähetämme sinulle parhaat tarjoukset</span>
            <div className="mailInputContainer">
                <input className="inputClass" type="text" placeholder="Sähköpostiosoitteesi"/>
                <Link to="/register" className="joinBtn">Liity mukaan</Link>
            </div>
        </div>
    )
}

export default MailList
