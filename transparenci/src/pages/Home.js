import React from 'react'
import BlogFeed from '../components/BlogFeed'
import CreateNewPost from '../components/CreateNewPost'
import './styles/Home.css'

export default function Home() {
    return (
        <div>
            <h1 className="home-header">Blog</h1>
            <div className="row" style={{"width":"100%"}}>
                <div className="col add-post-col">
                    <CreateNewPost/>
                </div>
                <div className="col-6">
                    <BlogFeed />
                </div>
                <div className="col hi-col">Hi</div>
            </div>
            
        </div>
    )
}
