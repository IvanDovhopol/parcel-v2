const BASE_URL = 'http://localhost:7070';

//TODO: GET стандартный запрос на сервер

// function fetchPosts() {
//   fetch(`${BASE_URL}/posts`)
//     .then(response => response.json())
//     .catch(console.log);
// }

// function fetchPostById(id) {
//   fetch(`${BASE_URL}/posts/${id}`)
//     .then(response => response.json())
//     .catch(console.log);
// }

// fetchPosts();

//TODO: POST запрос на сервер

// function addPost(post) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(post),
//   };

//   return fetch(`${BASE_URL}/posts`, options).then(response => response.json());
// }

// const newPost = {
//   userId: 11,
//   title: 'test title - 1)',
//   body: 'test text - 1',
// };

// const newPost2 = {
//   userId: 11,
//   title: 'test title - 2 )',
//   body: 'test text - 2',
// };

// addPost(newPost).then(console.log);
// addPost(newPost2).then(console.log);

//TODO: PATCH запрос на сервер

// function updatePostById(update, postId) {
//   const url = `${BASE_URL}/posts/${postId}`;
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(url, options)
//     .then(r => r.json())
//     .then(console.log);
// }

// updatePostById(
//   {
//     body: 'kyky',
//   },
//   103
// );

//TODO: DELETE запрос на сервер

// function removePost(postId) {
//   const url = `${BASE_URL}/posts/${postId}`;
//   const options = {
//     method: 'DELETE',
//   };

//   fetch(url, options).then(r => r.json());
// }

// removePost(103);
