export default function ProjectCard() {
    return (
        <div className="project-card">
            <div className="project-card__header">
                <div className="project-card__acronym">HC</div>
                <div className="project-card__title-and-description">
                    <h2 className="project-title">Project Name</h2>
                    <p className="project-description">za azdaz m ipsum dolor sit amet consectetur adipisicing elit. zadazd adazd</p>
                </div>
            </div>
            <section className="project-card__informations">
                <div className="project-card__information">
                    <p>Status</p>
                    <p>Active</p>
                </div>
                <div className="project-card__information">
                    <p>Role</p>
                    <p>Developer</p>
                </div>
                <div className="project-card__information">
                    <p>Cost</p>
                    <p>CHF 1.000</p>
                </div>
                <div className="project-card__information">
                    <p>Estimated Progress</p>
                    <p>67%</p>
                </div>
            </section>
        </div>
    )
}
