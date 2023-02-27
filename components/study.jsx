export default function Study({study}) {

    return (
        <div className="study">
            <div className="study__title">
                <p>{study.title}</p>
            </div>
            <div className="wrap">
                <div className="study__school">
                    <p>{study.school}</p>
                </div>
                <div className="study__year">
                    <p>{study.year}</p>
                </div>
            </div>
        </div>
    )
}