// import profileReducer from "./Prodile-reducer";
// import dialogsReducer from "./Dialogs-reducer";
// import sidebarReducer from "./Sidebar-reducer";


// let store = {
//   _state: {
//     profilePage:{
//       posts: [
//         {id: 1, message: 'Hi, how are you?' , likesCount: 12}, 
//         {id: 2, message: "It's my first post", likesCount: 23},
//       ],
  
//       newPostText: 'Add new post'
//     },
  
//     dialogsPage:{
//       messagesData:[
//         {id: 1, message: 'here could be your message 1'}, 
//         {id: 2, message: 'here could be your message 2'},
//         {id: 3, message: 'here could be your message 3'},
//         {id: 4, message: 'here could be your message 4'},
//         {id: 5, message: 'here could be your message 5'}
//       ],
      
//       dialogsData:[
//         {id: 1, name: 'Sabir'}, 
//         {id: 2, name: 'Adil'},
//         {id: 3, name: 'Lala'},
//         {id: 4, name: 'Sarxan'},
//         {id: 5, name: 'Vuqar'}
//       ],
//       newMessageBody:"",
//     },

//     sidebar: {}
//   },
//   _callSubscriber(){
//     console.log('eto budet izmeneno callback om');
//   },
//   subscribe(observer){
//     this._callSubscriber = observer;  // observer like addEventListener
//   },
//   getState(){
//     return this._state;
//   },
//   // addPost(){
//   //   let newPost = {
//   //     id: 5,
//   //     message: this._state.profilePage.newPostText,
//   //     likesCount: 0
//   //   };
//   //   this._state.profilePage.posts.push(newPost);
//   //   this._state.profilePage.newPostText = '';
//   //   this._callSubscriber(this._state);
//   // },
//   // updateNewPostText(newText){
//   //   this._state.profilePage.newPostText = newText;
//   //   this._callSubscriber(this._state);
//   // },
//   dispatch(action){

//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    
//     this._callSubscriber(this._state);
//   }
// }

// export default store;
// window.store = store;


// OLD STORE