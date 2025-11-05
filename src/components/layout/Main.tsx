
import { useState } from "react";
import Content from "../Content";
import Header from "../Header";
import type { TPage } from "../../lib/types";

export default function Main() {
    const [page, setPage] = useState<TPage>("users");

    return (
        <main className='main'>
            <Header page={page}/>
            <Content page={page}/>
        </main>
    )
}
