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

    const openPost = (post: PostModel) => {

    }


    return (
        <div className="container" onScroll={((event: any) => onScroll(event.target))} >
            <div className="grid">
                {props.posts.map((post, index) =>
                    <div onClick={(() => openPost(post))} key={post.id + index + 1} className="post-wrapper">
                        <div className="title" key={post.id + index + 2}>{post.title}</div>
                        <div key={post.id + index} className="post-information">
                            <span key={post.id + index}>{post.body}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PostsPageComponent;