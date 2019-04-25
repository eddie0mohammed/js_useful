function easyHttp(){
    this.http = new XMLHttpRequest();
}

// make an http GET Request
easyHttp.prototype.get = function (url, callback){
    this.http.open("GET", url, true);

    let that = this;
    this.http.onload = function(){
        if (that.http.status == 200){
            callback(null, that.http.responseText);
        }else{
            callback("Error" + that.http.status);
        }
    }

    this.http.send();
}


// make an http POST Request
easyHttp.prototype.post = function(url, data, callback){
    this.http.open("POST", url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let that = this;
    this.http.onload = function(){
        callback(null, that.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}


// make an http PUT Request
easyHttp.prototype.put = function(url, data, callback){
    this.http.open("PUT", url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let that = this;
    this.http.onload = function(){
        callback(null, that.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}



// make an http DELETE Request
easyHttp.prototype.delete = function (url, callback){
    this.http.open("DELETE", url, true);

    let that = this;
    this.http.onload = function(){
        if (that.http.status == 200){
            callback(null, "POST DELETED");
        }else{
            callback("Error" + that.http.status);
        }
    }

    this.http.send();
}