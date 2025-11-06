import ProjectCard from "./ProjectCard";
import UsersList from "./UsersList";

export default function ProjectDetails() {
    return (
        <section className="project-details">

            <ProjectCard />

            <section className="project-details__progress">

                <div className="progress__actual-phase">
                    <h2>Phase 3</h2>
                    <h2>40 %</h2>
                </div>

                <div className="progress__next-phase-container">
                    <div className="progress__next-phase-line">
                        <div>Next phase</div>
                        <div>Phase 3.31</div>
                    </div>
                    <div className="progress__next-phase-line">
                        <div>Date aimed</div>
                        <div>End 2026</div>
                    </div>
                </div>

                <div className="progress__next-date-container">
                    <p>Next important meeting</p>
                    <div className="progress__next-date-lines">
                        <div className="progress__next-date-line">
                            <div>BIM Coordination</div>
                            <div>March 14, 2026</div>
                        </div>
                        <div className="progress__next-date-line">
                            <div>Project Schedule</div>
                            <div>March 25, 2026</div>
                        </div>
                        <div className="progress__next-date-line">
                            <div>Client Approval</div>
                            <div>March 28, 2026</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="project-details__third-window">
                <div className="third-window__onglets">
                    <button>Collaborators</button>
                    <button>Dashboard</button>
                    <button>Record</button>
                    <button>+ Add collaborator</button>
                </div>
                <div className="third-window__content">
                    <UsersList />
                </div>
            </div>      

        </section>
    )
}
