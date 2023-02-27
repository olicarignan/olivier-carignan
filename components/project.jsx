export default function Project ({project}) {

    if (!project.url) {
        return (
            <div className="project project--no-hover">
                <div className="project__wrap">
                    <div className="project__title">
                        <p>{project.title}</p>
                    </div>
                    <div className="project__description">
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="project">
            <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={project.title} key={project.title}>
                <div className="project__wrap">
                    <div className="project__title">
                        <p>{project.title}</p>
                        <div className="project__arrow font-bold">&#x2197;</div>
                    </div>
                    <div className="project__description">
                        <p>{project.description}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}