import { useState, useEffect } from 'react';
import React from 'react';
import './style.css';
import AddPost from './components/AddPost';
import Posts from './components/Posts';

const App = () => {
  const [showAddPost, setShowAddPost] = useState(false);

  //array of initial objects
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
    };

    getPosts();
  }, []);

  //Fetch Posts
  const fetchPosts = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/JacksCreations/assignment5/posts'
    );
    const data = await res.json();

    return data;
  };

  // Add Post
  const addPost = async (post) => {
    const res = await fetch(
      'https://my-json-server.typicode.com/JacksCreations/assignment5/posts',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(post),

        //setPosts([...posts, post]);
      }
    );

    const data = await res.json();

    setPosts([...posts, data]);
  };

  //function deletes post with specific article.
  //articles must be unique for this to work
  // if this was a real project I would give each post and ID
  // sorting through post by article is not efficient
  const deletePost = async (id) => {
    const res = await fetch(
      `https://my-json-server.typicode.com/JacksCreations/assignment5/posts/${id}`,
      {
        method: 'DELETE',
      }
    );
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setPosts(posts.filter((post) => post.id !== id))
      : alert('Error Deleting This Task');
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
