import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function AxiosAppPost() {
  const [post, setPost] = React.useState(null);
  const [body, setBody] = React.useState(null);


  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, [body]);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: body
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  const handleOnchange = (e) => {
    setBody(e.target.value)
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <input type="text" onChange={(e)=>handleOnchange(e)}></input>
    </div>
  );
}