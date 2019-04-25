
const http = new EasyHttp;

//Get users using GET request
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//create data
const data = {
    name : "John Doe",
    username: "johnDoe",
    email : "jdoe@example.com" 
}

//create post using POST
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


//update using PUT request
// http.put('https://jsonplaceholder.typicode.com/users/1', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//delete a post using DELETE request
// http.delete('https://jsonplaceholder.typicode.com/users/1')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));