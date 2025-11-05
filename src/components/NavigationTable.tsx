import { faBackwardStep, faCaretLeft, faCaretRight, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationTable() {
    return (
        <div className="users-list__navigation-container">
            <div className="navigation-commands">
                <FontAwesomeIcon className="icon" icon={faBackwardStep} />
                <FontAwesomeIcon className="icon" icon={faCaretLeft} />
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <FontAwesomeIcon className="icon" icon={faCaretRight} />
                <FontAwesomeIcon className="icon" icon={faForwardStep} />
                <select>
                    <option>5</option>
                    <option>10</option>
                    <option>50</option>
                </select>
                <p>Items per page</p>
            </div>
            <div className="items">
                <p>Items 1 to 8 of 48</p>
            </div>
        </div>
    )
}
