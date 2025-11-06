import { faMagnifyingGlass, faDownload, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TPage } from "../lib/types";

type HeaderProps = {
    page: TPage
};

export default function Header({ page }: HeaderProps) {
    let pageTitle;
    if (page === "projects") {
        pageTitle = "Projects"
    } else if (page === "users") {
        pageTitle = "Users"
    } else if (page === "project-details") {
        pageTitle = "Project Details"
    };


    return (
        <header className='main__header'>
            <h1 className="main__header-title">{pageTitle}</h1>
            <div className="main__header-input-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input 
                    type="text" 
                    className="main__header-input"
                    placeholder={`Search ${pageTitle} by name...`} /> 
            </div>
            <div className="main__header-buttons-container">
                <FontAwesomeIcon className="main__header-json-btn" icon={faDownload} />
                <FontAwesomeIcon className="main__header-json-btn" icon={faFileExport} />
                <button className="main__header-add-btn">+ New {pageTitle}</button>
            </div>
        </header>
    )
}
