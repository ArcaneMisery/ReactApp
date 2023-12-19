import { connect } from "react-redux";
import { getPosts, setActivePost, setFilter } from "../../actions/posts-page.actions";
import PostsPageComponent from "./posts-component/posts-page.component";
import { useEffect, useState } from "react";
import PendingComponent from "../../shared/pending/pending.component";
import { PostModel } from "../../core-module/models/posts-models";
import PostFormComponent from "./post-form/post-form.component";


function PostsPageContainer(props: any) {
    const {user, posts, setFilterAction, getPostsAction, setActivePostAction} = props;
    const [page, setPage] = useState(1);
    const [activePost, setActivePost] = useState<PostModel | null>(null);

    useEffect(() => {
        getPostsAction();
    }, []);

    const handlePageState = (page: number) => {
        if(posts.postsByPage.length === posts.posts.length) {
            return;
        }
        setPage(page + 1);
        setFilterAction({page: page+1});
    }

    const handleActivePost = (post: PostModel) => {
        setActivePostAction(post);
        setActivePost(post);
    }

    return (
        <div>
            {activePost ? <PostFormComponent post={activePost} comments={props.comments}/>
            : <PostsPageComponent posts={posts.postsByPage} page={page} pending={posts.pending} handlePageState={handlePageState} handleActivePost={handleActivePost} ></PostsPageComponent>}

            {posts.pending ? <PendingComponent/> : ""}
        </div>
    );
};

const mapStateToProps = (store: any) => {
    return {
       user: store.authReducer,
       posts: store.postsPageReducer,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setFilterAction: (filter: any) => dispatch(setFilter(filter)),
        getPostsAction: () => dispatch(getPosts()),
        setActivePostAction: (post: PostModel) => dispatch(setActivePost(post)) 
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (PostsPageContainer);