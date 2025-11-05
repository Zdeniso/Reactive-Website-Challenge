import NavigationTable from "./NavigationTable";
import UsersTable from "./UsersTable";

export default function UsersList() {
    return (
        <section className="users-list">
            <UsersTable />
            <NavigationTable />
        </section>
    )
}
