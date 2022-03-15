import { useState } from 'react';
import React from 'react';
import './style.css';
import AddPost from './components/AddPost';
import Posts from './components/Posts';

const App = () => {
  const [showAddPost, setShowAddPost] = useState(false);

  //array of initial objects
  const [posts, setPosts] = useState([
    {
      user: 'Naval Ravikant',
      title: 'Meditation',
      article: 'The art of doing nothing.',
    },
    {
      user: 'Jerry Seinfeld',
      title: 'Comedy Genius',
      article: "Oh I gotta get on that internet, I'm late on everything!",
    },
    {
      user: 'Abraham Lincoln',
      title: 'Believe',
      article: 'Whatever you are, be a good one.',
    },
    {
      user: 'Joe Rogan',
      title: "Color doesn't matter",
      article:
        "I don't care if you're gay, black, Chinese, straight. That means nothing to me. It's all an illusion.",
    },
  ]);

  // Add Task
  const addTask = async (post) => {
    setPosts([...posts, post]);
  };

  //function deletes post with specific article.
  //articles must be unique for this to work
  // if this was a real project I would give each post and ID
  // sorting through post by article is not efficient
  const deleteTask = async (article) => {
    setPosts(posts.filter((post) => post.article !== article));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AddPost
            //onAdd={() => setShowAddPost(!showAddPost)}
            posts={posts}
            onAdd={addTask}
            showPost={showAddPost}
          />
        </div>
        <div className="col-md-6">
          <Posts posts={posts} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
