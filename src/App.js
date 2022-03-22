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
  const addPost = async (post) => {
    axios
      .post('/posts', {
        user: 'Fred',
        title: 'Flintstone',
        article: 'so cool',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //function deletes post with specific article.
  //articles must be unique for this to work
  // if this was a real project I would give each post and ID
  // sorting through post by article is not efficient
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
