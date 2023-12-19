import { CommentModel, PostModel } from "../../../core-module/models/posts-models";


function PostFormComponent(props: {post: PostModel, comments: CommentModel[]}) {
    return (
        <div>
            <article>
                {props.post.title}
            </article>
            <section className="post-body">
                {props.post.body}
            </section>
            <article>
                Comments
            </article>
            <section className="comments-wrapper">
                {props.comments.map((comment) => 
                    <div className="comment-item">
                        <div className="comment-label">
                            {comment.email}
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}

export default PostFormComponent;