import React, { useEffect, useState } from 'react'
import BlogPost from './BlogPost';

export default function BlogFeed() {
    const [feed, setFeed] = useState([]);


    useEffect(() => {
        fetch('http://localhost:4000/api/v1/posts', {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((res) => res.json()) 
            .then((data) => {
              if (data.error) {
                alert(data.error);
              } else {
                setFeed(data.reverse());
              }
            });

    }, [])


    return (
        <div>
            {
            feed.map((post) => {
                return <BlogPost key={post.id} post={post}/>
            })}
        </div>
    )
}
