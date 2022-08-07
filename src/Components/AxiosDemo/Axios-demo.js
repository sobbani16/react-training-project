import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function AxiosApp() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  if (!posts) return null;

  return (
    <div>
        {posts.map((post) => (<>
            <div style={{ border: "2px solid red", width: "400px", height: "400px"  }}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            </>
        ))}
    </div>
  );
}