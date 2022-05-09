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




var myform = document.getElementById("uploadFile");
// console.log(myform);
myform.addEventListener('submit', function(e) {
    e.preventDefault();
    let flag = 1;
    let email = document.getElementById("email");
    validation(email, "photo1", "*****Please fill email address*****")
    let data = new FormData(this);
    console.log(data.values)
    if (flag == 1) {
        data.append("id", email.value);
        // data.append("files", document.getElementById("photo").value);
        fetch('http://localhost:8082/tube/uploadFiles', {
            method: 'post',
            body: data,

        }).then(function(response) {
            return response.text();
        }).then(function(text) {
            console.log(text);

        })
    }
})