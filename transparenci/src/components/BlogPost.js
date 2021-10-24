import React from 'react'
import moment from 'moment';
import './styles/PostCard.css'
import Comments from './Comments';

export default function BlogPost(props) {
    const {title, content, User, createdAt, id} = props.post
    return (
        <div className="post-card row">
            <div className="row" style={{"width": "100%"}}>
                <div className="col-2 user-info">{User.username}</div>
                <div className="col post-title-content-grp">
                    <h4 className="post-title">{title}</h4>
                    {/* <img className="post-img"src="https://picsum.photos/seed/picsum/200/300" alt=""/> */}
                    <p className="post-content">{content}</p>
                </div>
                <div className="col-4 time-stamp">
                    <p>{moment.utc(createdAt).fromNow()}</p>
                </div>
           </div>
           <div className="row comment-row" style={{"width": "100%"}} >
            <Comments postId={id} />
           </div>
        </div>
    )
}
