export default function Job({job}) {

    return (
        <div className="job">
            <div className="job__position">
                <p>{job.position}</p>
            </div>
            <div className="wrap">
                <div className="job__job">
                    <p>{job.job}</p>
                </div>
                <div className="job__time">
                    <p>{job.time}</p>
                </div>
            </div>
        </div>
    )
}