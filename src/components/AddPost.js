import React from 'react';
import { useState } from 'react';

//add post form
//receives input through a form, creates a json object and passes it the array in app.js
const AddPost = ({ onAdd }) => {
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ user, title, article });

    setUser('');
    setTitle('');
    setArticle('');

    //for testing
    /** 
    console.log(user);
    console.log(title);
    console.log(article);
    */
  };

  return (
    <form onSubmit={onSubmit}>
      <center>
        <label id="formLabel">React Blog</label>
      </center>
      <div className="mb-2">
        <select
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="form-select"
          aria-label="User select"
        >
          <option defaultValue>Select the user</option>
          <option>Jack Lohmar</option>
          <option>Abraham Lincoln</option>
          <option>Jerry Seinfeld</option>
          <option>Joe Rogan</option>
          <option>Naval Ravikant</option>
        </select>
      </div>
      <div className="mb-2">
        <label form="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          aria-describedby="Help"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label for="contentInput" className="form-label">
          Blog Post
        </label>
        <textarea
          className="form-control"
          id="contentInput"
          rows="3"
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        ></textarea>
      </div>

      <div>
        <button type="submit" id="postButton">
          Post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
