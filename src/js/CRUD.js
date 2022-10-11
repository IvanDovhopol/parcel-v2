// //TODO: GET стандартный запрос на сервер

// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(r => r.json())
//   .then(console.log)
//   .catch(console.log);

// //TODO: POST запрос на сервер

// const postToAdd = {
//   author: 'Mango',
//   body: 'CRUD is awesome',
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(postToAdd),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts`, options)
//   .then(r => r.json())
//   .then(console.log)
//   .catch(console.log);

// //TODO: PATCH запрос на сервер

// const postToUpdate = {
//   id: 1,
//   body: 'Hello world',
// };

// const options2 = {
//   method: 'PATCH',
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options2)
//   .then(r => r.json())
//   .then(console.log)
//   .catch(error => console.log('ERROR' + error));

// //TODO: DELETE запрос на сервер

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: 'DELETE',
// })
//   .then(() => console.log('Post deleted'))
//   .catch(error => console.log('Error:', error));
