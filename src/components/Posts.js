import React from 'react';
import Post from './Post';

const Posts = ({ posts, onAdd, onDelete }) => {
  var key = 0;
  return (
    <>
      <h1 id="postfeed">Post feed</h1>
      {posts.map((post) => (
        <Post key={(key += 1)} post={post} onAdd={onAdd} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Posts;
