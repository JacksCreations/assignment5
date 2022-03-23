import { useState, useEffect } from 'react';
import React from 'react';
import './style.css';
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import axios from 'axios';
const App = () => {
  const [showAddPost, setShowAddPost] = useState(false);

  //array of initial objects
  const [posts, setPosts] = useState([]);

  //Get using AXIOS
  useEffect(async () => {
    const result = await axios(
      'https://my-json-server.typicode.com/JacksCreations/assignment5/posts'
    );

    setPosts(result.data);
  }, []);

  // Add Post
  //outputs the object to the terminal
  const addPost = async (post) => {
    //const json = JSON.stringify({ post });
    const res = await axios.post(
      'https://my-json-server.typicode.com/JacksCreations/assignment5/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      }
    );
    //const data = await res.json();
    setPosts([...posts, res]);
    console.log(res);
  };

  //function deletes post with specific article.
  //STILL TRYING TO 'DELETE' FROM JSON SERVER USING AXIOS
  const deletePost = (id) => {
    const request = axios.delete(
      `https://my-json-server.typicode.com/JacksCreations/assignment5/posts/${id}`
    );
    request.then((response) => response.data);
    console.log(request.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AddPost
            //onAdd={() => setShowAddPost(!showAddPost)}
            posts={posts}
            onAdd={addPost}
            showPost={showAddPost}
          />
        </div>
        <div className="col-md-6">
          <Posts posts={posts} onAdd={addPost} onDelete={deletePost} />
        </div>
      </div>
    </div>
  );
};

export default App;
