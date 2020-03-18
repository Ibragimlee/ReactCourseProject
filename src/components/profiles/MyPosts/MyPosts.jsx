import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let showPosts = props.posts.map(post => (
    <Post message={post.message} key={post.id} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value);
  };

  return (
    <div className={classes.mypost_container}>
      <h2 className={classes.top_header}>My posts</h2>
      <div className={classes.post_add_block}>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
        ></textarea>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={classes.posts}>{showPosts}</div>
    </div>
  );
};

export default MyPosts;
