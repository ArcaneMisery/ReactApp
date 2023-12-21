import { Link } from "react-router-dom";
import { PostModel } from "../../../core-module/models/posts-models";
import "./posts-page.component.scss"

function PostsPageComponent(props: { posts: PostModel[], page: number, pending: boolean, handlePageState: any, handleActivePost: any }) {
    const onScroll = (container: HTMLElement) => {
        if(props.pending) {
            return;
        }
        if (container.scrollHeight - (container.clientHeight + container.scrollTop) <= 200) {
            props.handlePageState(props.page + 1);
        }
    }

    return (
        <div className="container" onScroll={((event: any) => onScroll(event.target))} >
            <div className="grid">
                {props.posts.map((post, index) =>
                    <Link to={`/posts/${post.id}`} key={post.id + index + 5} >
                        <div onClick={(() => props.handleActivePost(post))} key={post.id + index + 1} className="post-wrapper">
                            <div className="title" key={post.id + index + 2}>{post.title}</div>
                            <div key={post.id + index + 3} className="post-information">
                                <span key={post.id + index + 4}>{post.body}</span>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default PostsPageComponent;