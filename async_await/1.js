// function getUsers(url){

//      return new Promise((resolve, reject) => {
//             fetch(url)
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .then(err => reject(err));
//         });
// }



async function getUsers(url){
    //await response of the fetch call
    const response = await fetch(url);

    //only procees once its resolved
    const data = await response.json();
    //only proceed once second promise is resolved
    return data;
}

getUsers("https://jsonplaceholder.typicode.com/users")
    .then(function(data){
        console.log(data);
    });