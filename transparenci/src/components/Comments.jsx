import moment from 'moment';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function Comments(props) {
    const [showForm, setShowForm] = useState(false);
    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);
    const [noComments, setNoComments] = useState(false);
    const user = useSelector((state) => state.userReducer);

    const getComments = (id) => {
        axios.get(`http://localhost:4000/api/v1/posts/${id}/comments`)
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                } else {
                    console.log(data);
                    setComments(data.data.reverse());
                }
            });
    };

    useEffect(() => {
        getComments(props.postId);
    }, [props.postId]);

    return (
        <div>
            {!comments.length ? <div></div> : (
            <div className="comment-container">
                {comments.map((comment) => {
                    return (
                        <div key={comment.id} className="content-user-comment-grp">
                            <div>                            
                                <p className="comment-user">{comment.User.username}</p>
                                <p className="comment-content">{comment.content}</p>
                            </div>
                            <div className="timestamp-container">
                                <p className="comment-timestamp">{moment.utc(comment.createdAt).fromNow()}</p>
                            </div>
                        </div>
                    );
                })}
            </div>)
            }

            {user && (
                <div className="comment-section">
                    {showForm ? (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            fetch(`http://localhost:4000/api/v1/posts/${props.postId}/comments`, {
                                method: 'POST',
                                credentials: 'include',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    content: text,
                                }),
                            })
                                .then((res) => res.json())
                                .then((data) => {
                                    if (data.error) {
                                        console.log(data.error);
                                    } else {
                                        alert('Comment Submitted');
                                        setText('');
                                        setShowForm(false);
                                        getComments(props.postId);
                                    }
                                });
                        }
                        }>
                            <input
                                className="comment-input"
                                label="Comment"
                                type="text"
                                onChange={(e) => setText(e.target.value)}
                                required
                            />
                            <br />
                            <button className="add-comment-button" type="submit">
                                Submit
                            </button>
                        </form>
                    ) : (
                        <button
                            className="add-comment-button"
                            onClick={() => setShowForm(!showForm)}
                        >
                            Reply to this Post
                        </button>
                    )}
                </div>
            )}

        </div>
    )
}
