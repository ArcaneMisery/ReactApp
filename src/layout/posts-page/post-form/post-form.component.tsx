import { useParams } from "react-router-dom";
import "./post-form.component.scss";
import { connect } from "react-redux";
import PendingComponent from "../../../shared/pending/pending.component";
import { useEffect, useState } from "react";
import { clearComments, getComments, getPostById } from "../../../actions/posts-page.actions";
import { PostPageStateModel } from "../../../reducers/posts-page.reducer";
import TextAreaBoxComponent from "../../../shared/controls/text-area-box/text-area-box.component";
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";

function PostFormComponent(props: any) {
    const { posts, getCommentsAction, getPostByIdAction, clearCommentsAction }: { posts: PostPageStateModel, getCommentsAction: any, getPostByIdAction: any, clearCommentsAction: any} = props;
    const { id } = useParams();
    const { control, getValues, reset } = useForm<any>({
        defaultValues: {
            comment: null,
            reply: null
        },
      })

    const [activeReplyIndex, setActiveReplyIndex] = useState<null | number>(null);

    useEffect(() => {
        //onInit
        getPostByIdAction(id);
        getCommentsAction(id);
        return () => {
            //onDestroy
            clearCommentsAction();
        }
    }, []);

    const handleActiveIndex = (index: number) => {
        reset();
        setActiveReplyIndex(index);
        
    }

    const sendCommentOReply = (commentOreply: string) => {
        reset();
        setActiveReplyIndex(null);
    }

    return (
        <div className="post-container">
            <h2 className="post-title">
                {posts.activePost?.title}
            </h2>
            <section className="post-body">
                {posts.activePost?.body}
            </section>
            <h3>Comments</h3>
            <section className="comments-wrapper">
                {!posts.comments?.length && !posts.pending
                    ? <div>No comments yet</div>
                    : (posts.comments?.map((comment, index) => 
                        <div className="comment-item" key={comment.id + index + 1}>
                        <div className="comment-label" key={comment.id + index + 2}>
                            <div className="comment-email" key={comment.id + index + 4}>
                                {comment.email}
                            </div>
                            <div className="comment-name" key={comment.id + index + 3}>
                                {comment.name}
                            </div>
                        </div>
                        <div className="comment-body" key={comment.id + index + 5}>
                            {comment.body}
                        </div>
                        <div className="reply-section">
                            {activeReplyIndex !== index && <div className="comment-reply" onClick={() => handleActiveIndex(index)}>
                                <span>Reply</span>
                            </div>}
                            {activeReplyIndex === index && 
                            <div className="comment-reply-form">
                                <TextAreaBoxComponent control={control} name="reply" rules={{ required: true }} isNeedFocus={true} ></TextAreaBoxComponent>
                                <div className="icon-wrapper" onClick={() => sendCommentOReply(getValues("reply"))}>
                                    <SendIcon className="send" />
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    )
                )}
            </section>
            {posts.pending && <PendingComponent />}
        </div>
    );
}

const mapStateToProps = (store: any) => {
    return {
       posts: store.postsPageReducer,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCommentsAction: (id: number) => dispatch(getComments(id)),
        getPostByIdAction: (id: number) => dispatch(getPostById(id)),
        clearCommentsAction: () => dispatch(clearComments())

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)  (PostFormComponent);
