import "./mailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Meidän avullamme säästäminen on helppo!</h1>
            <span className="mailDesc">Rekisteröidy ja lähetämme sinulle parhaat tarjoukset</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Sähköpostiosoitteesi"/>
                <button>Liity jäseneksi</button>
            </div>
        </div>
    )
}

export default MailList
