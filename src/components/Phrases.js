const Phrases = ({lesson}) => {
    return (
        <div className="phrases">
            <h4>{lesson.name}</h4>
            <p><strong>Description: </strong>{lesson.description}</p>
            <p>{lesson.createdAt}</p>
        </div>
    )
}

export default Phrases