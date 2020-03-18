import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator
} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props)=>{
//   return(
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState();

//           let addPost = ()=>{
//             store.dispatch(addPostActionCreator());
//           }

//           let onPostChange = (text)=>{
//             store.dispatch(updateNewPostTextActionCreator(text));
//           }

//           return <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: text => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
