function validation(id, elment, massage) {

    if (id.value == "") {
        document.getElementById(elment).innerHTML = massage
        flag = 0;

    }
    id.addEventListener('input', function() { //it is used to detect any running input 
        if (id.value.length > 2) {
            document.getElementById(elment).innerHTML = ""
        } else {
            document.getElementById(elment).innerHTML = massage;
            flag = 0;

        }

    })

}
// this.window.addEventListener('load', function() {
//     this.window.localStorage.setItem('id', '');
// })

// function getphoto(id) {
//     axios
//         .get("http://localhost:8082/tube/downloadFile/" + id)
//         // http: //localhost:8082/tube/downloadFile/piyushchaurasia13@gmail.com

//     .then(response => {
//             let url = "data:image/png;base64,";
//             let Base64 = String(response.data);
//             const img = document.createElement("img");
//             img.src = url + Base64;
//             document.body.appendChild(img);
//             console.log(String(response.data));

//         })
//         .catch(error => console.error(error));
// }
let flag = 1;

function login() {
    let email = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let data = new FormData();
    data.append('email', email);
    data.append('password', pass);
    console.log(data);
    if (flag == 1) {

        // data.append("files", document.getElementById("photo").value);
        fetch('http://localhost:8082/tube/login', {
            method: 'post',
            body: data,

        }).then(function(response) {
            return response.text();
        }).then(function(text) {
            console.log(text);
            if (text == 1) {
                window.localStorage.setItem('id', email);
                window.location = "../index.html";
            } else {
                document.getElementById('pass').innerHTML = "Your UserId or Password is incorrect";
            }
        })
    }
    // // window.location = "../index.html";
    // // let vv = document.getElementById("update");
    // // console.log(vv);
    // // window.addEventListener(onload, function() {

    // // })


    // // let id = document.getElementById("username");
    // // let password = document.getElementById("password");
    // // console.log(id, password);
    // // validation(id, "pass", "Please fill User id and Password")
    // // validation(password, "pass", "Please fill User id and Password")
    // // let data = new FormData(this);

    // =================



    // if (flag == 1) {
    //     data.append("id", email.value);
    //     data.append("password", password)
    //     let imgurl = getphoto(id);
    //     // data.append("files", document.getElementById("photo").value);
    //     fetch('http://localhost:8082/tube/uploadFiles', {
    //         method: 'post',
    //         body: data,

    //     }).then(function(response) {
    //         return response.text();
    //     }).then(function(text) {
    //         console.log(text);


    //     })


    // }

}