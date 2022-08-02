

export const Comment = ({ comment }) => {
    return (
        <div className="comments">
            <h2>{comment.ownerEmail}</h2>
            <p>{comment.comment}</p>
        </div>
    )
}