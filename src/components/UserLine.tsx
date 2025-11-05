import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatusButton from "./StatusButton";

export default function UserLine() {
    return (
        <div className="user-line">
            <div>Denis</div>
            <div>POMMIER</div>
            <div>denis.pommier@live.fr</div>
            <div>UBIM</div>
            <div>BIM Manager</div>
            <StatusButton />
            <div>
                <div><FontAwesomeIcon icon={faEye} /></div>
                <div><FontAwesomeIcon icon={faTrash} /></div>
            </div>                    
        </div>
    )
}
