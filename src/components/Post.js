import React from 'react';

const Post = ({ post, onDelete }) => {
  return (
    <div className="post">
      <h3 className="title">
        {post.title}
        <button className="delButton" onClick={() => onDelete(post.article)}>
          DELETE
        </button>
      </h3>
      <p className="user">By: {post.user}</p>
      <p className="article">{post.article}</p>
    </div>
  );
};

export default Post;
