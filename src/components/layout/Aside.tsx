import { faCity, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Aside() {
    return (
        <aside className="aside">
            <nav className="aside__nav">
                <button className="aside__nav-buttons">
                    <FontAwesomeIcon icon={faCity} />
                </button>
                <button className="aside__nav-buttons">
                    <FontAwesomeIcon icon={faUser} />
                </button>
                <button className="aside__nav-buttons">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </nav>
            <div className="aside__legal-notices">
                <small className="copyright">&copy; Copyright Denis Pommier</small>
                <small className="version">alpha v0.0.1</small>
            </div>    
        </aside>
    )
}
