import type { TPage } from "../lib/types";
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
    };

    return (
        <div className="main__content">
            {contentType}
        </div>
    )
}
