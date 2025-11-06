import type { TPage } from "../lib/types";
import ProjectDetails from "./ProjectDetails";
import ProjectsList from "./ProjectsList";
import UsersList from "./UsersList";

type ContentProps = {
    page: TPage
};

export default function Content({ page }: ContentProps) {

    let contentType;
    if (page === "projects") {
        contentType = <ProjectsList />
    } else if (page === "users") {
        contentType = <UsersList />
    } else if (page === "project-details") {
        contentType = <ProjectDetails />
    }

    return (
        <div className="main__content">
            {contentType}
        </div>
    )
}
