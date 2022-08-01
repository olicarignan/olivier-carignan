export default function Card ({props}) {

    if (!props.url) {
        return (
            <div className="project border-t p-3 py-6 gap-8 border-grey dark:border-white flex justify-between items-center">
                <p className="text-2xl">{props.date}</p>
                <div className="project-text mx-8 flex items-center">
                <p className="project-title font-bold text-3xl flex items-center font-interBold">{props.title}</p><span className="line mx-4">—</span><span className="font-normal text-2xl">{props.description}</span>
                </div>
                <div className="project-arrow font-bold opacity-0">&#x2197;</div>
            </div>
        )
    }

    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer" aria-label={props.title}>
            <div className="project border-t p-3 py-6 gap-8 border-grey dark:border-white flex justify-between items-center">
                <p className="text-2xl">{props.date}</p>
                <div className="project-text mx-8 flex items-center">
                <p className="project-title font-bold text-3xl flex items-center font-interBold">{props.title}</p><span className="line mx-4">—</span><span className="font-normal text-2xl">{props.description}</span>
                </div>
                <div className="project-arrow font-bold">&#x2197;</div>
            </div>
        </a>
    )
}