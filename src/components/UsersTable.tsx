import UserLine from "./UserLine";

export default function UsersTable() {
    return (
        <div className="users-list__users-table">
            <div className="header-line">
                <div>First Name</div>
                <div>Last Name</div>
                <div>Email</div>
                <div>Company</div>
                <div>Rôle</div>
                <div>Status</div>
                <div>Actions</div>
            </div>
            <div className="users-line">
                <UserLine />
                <UserLine />
                <UserLine />
                <UserLine />
                <UserLine />
                <UserLine />
                <UserLine />
                <UserLine />
                <UserLine />
                <UserLine />
                <UserLine />
            </div>
        </div>
    )
}
