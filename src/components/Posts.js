import React from 'react';
import Post from './Post';

const Posts = ({ posts, onAdd, onDelete }) => {
  return (
    <>
      <h1 id="postfeed">Post feed</h1>
      {posts.map((post) => (
        <Post post={post} onAdd={onAdd} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Posts;
