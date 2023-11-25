import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function Q(){
    return (
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft} />Food is the heartbeat of our identity—a blend of nationalism, culture, personal history, and cherished memories. It's not just a meal; it's the very essence of who we are, woven into the fabric of our being from the beginning."</p>
            <p className="quote-auther">- Anthony Bourdain</p>
        </div>
    )
}