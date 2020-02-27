import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ()=>{

  let postsData = [
    {id: 1, message: 'Hi, how are you?' , likesCount: 12}, 
    {id: 2, message: "It's my first post", likesCount: 23},
  ]


  let showPosts = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  return(
    <div className={classes.mypost_container}>
      <h2 className={classes.top_header}>My posts</h2>
      <div className={classes.post_add_block}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        {showPosts}
      </div>
    </div>
  )
}

export default MyPosts;