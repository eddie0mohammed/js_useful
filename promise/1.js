const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

button1.addEventListener('click', getText);
button2.addEventListener('click', getJson);
button3.addEventListener('click', getApiData);

function getText(){
    fetch('1.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            // console.log(data);
        document.getElementById("output").innerHTML = data;
        })
        .catch(function(err){
            console.log(err);
        });
}

function getJson(){
    fetch('1.json')
        .then(res => res.json())
        .then(function(data){
            let output = "";
            data.forEach(function(elem){
                output += `
                <li>${elem.title} : ${elem.body}</li>
                `;
            });
            document.getElementById("output").innerHTML = output;
            // console.log(data);
        })
        .catch(function(err){
            console.log(err);
        });
}

function getApiData(){
    fetch('https://api.github.com/users')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let output = "";
            data.forEach(function (elem){
                output += `
                <li>${elem.login}</li>
                `;
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(function(err){
            console.log(err);
        });
}