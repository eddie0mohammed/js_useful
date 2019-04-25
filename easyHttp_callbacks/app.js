const http = new easyHttp;

//Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, response){
//     if (error){
//         console.log(error);
//     }else{
//         console.log(response);
//     }
// });

//Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
//     if (error){
//         console.log(error);
//     }else{
//         console.log(response);
//     }
// });

// create Data (to post)
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
}

// create post using "POST" method
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
//     if (error){
//         console.log(error);
//     }else{
//         console.log(post);
//     }
// });

//update a post using "PUT" method
// http.put('https://jsonplaceholder.typicode.com/posts/2', data, function(error, response){
//     if (error){
//         console.log(error);
//     }else{
//         console.log(response);
//     }
// });

//DELETE A post using "DELETE METHOD"
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, response){
    if (error){
        console.log(error);
    }else{
        console.log(response);
    }
});