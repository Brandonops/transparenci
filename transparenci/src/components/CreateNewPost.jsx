import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './styles/CreatePostForm.css'

export default function CreateNewPost() {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const userInfo = useSelector((state) => state.userReducer)

    return (
        <div className="create-new-post-form-container">
          <div className="col header-form-grp" >
          <h4>Create your own Blog Post</h4>
          <p>Share your thoughts and ideas</p>
          {/* <p>Simply create a title with the that includes the subject of your post.</p> */}
            <form className="create-new-post-form"
             onSubmit={
                (e) => {
                    fetch('http://localhost:4000/api/v1/posts', {
                              method: 'POST',
                              credentials: 'include',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                title,
                                content,
                                id: userInfo.id
                              }),
                            })
                              .then((res) => res.json()) 
                              .then((data) => {
                                if (data.error) {
                                  alert(data.error);
                                } 
                              });
                    
                }
            }>
              <div className="label-input-form-group">
                <label htmlFor="title">Title</label>
                <input 
                type="text"
                id="title"
                name="content"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}

                >
                </input>
              </div>
              <div className="label-input-form-group">
                <label htmlFor="content">Content</label>
                <textarea
                className="content-input"
                minlength="10" 
                maxlength="200" 
                size="10"
                type="text"
                id="content"
                name="content"
                onChange={(e) => {
                    setContent(e.target.value);
                }}
                >
                </textarea>
              </div>
              <div>
                <button className="create-post-form-btn" type="submit">Create Post</button>
              </div>
            </form>
          </div>
            
        </div>
    )
}
