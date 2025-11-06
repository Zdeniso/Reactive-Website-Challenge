
import { useState } from "react";
import Content from "../Content";
import Header from "../Header";
import type { TPage } from "../../lib/types";
import NavigationProject from "../NavigationProject";

export default function Main() {
    const [page, setPage] = useState<TPage>("project-details");

    return (
        <main className='main'>
            <Header page={page}/>
            {!(page === "projects" || page === "users") && <NavigationProject />}
            <Content page={page}/>
        </main>
    )
}
