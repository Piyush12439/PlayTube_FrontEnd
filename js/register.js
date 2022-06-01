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

    let flag = 1;

    function getDetails() {
        // console.log("ok")

        var fname = document.getElementById("fname");
        var lname = document.getElementById("lname");
        var email = document.getElementById("email");
        var mobile = document.getElementById("mobile");
        var male = document.getElementById("male");
        var female = document.getElementById("female");
        var dob = document.getElementById("dob");
        var address = document.getElementById("address");
        var city = document.getElementById("city");
        var pin = document.getElementById("pin");
        var state = document.getElementById("state");
        var password = document.getElementById("password");
        var photo = document.getElementById("profilephoto");
        var splitString = dob.value.split("-");
        var date = splitString.reverse().join('/');
        console.log(date);

        ////////////////////
        // var canvas = document.createElement("canvas");
        //                     var ctx = canvas.getContext('2d');
        //                     canvas.width = 300
        //                     canvas.height = 234
        //                     ctx.drawImage(photo.files[0], 0, 0, 300, 234);
        //                     var dataurl = canvas.toDataURL(photo.files[0].type);


        // //////////////////////
        let data = new FormData();
        data.append("fname", fname.value);
        data.append("lname", lname.value);
        data.append("email", email.value);
        data.append("mobile", mobile.value);
        data.append("gender", male.checked == true || female.checked == true ? (male.checked == true ? "male" : "female") : "");
        data.append("dob", date);
        data.append("address", address.value);
        data.append("city", city.value);
        data.append("pin", pin.value);
        data.append("state", state.value);
        data.append("password", password.value);
        data.append("photo", photo.files[0]);


        // console.log(fname.value, lname.value, email.value, mobile.value, male.value, female.value, dob.value, address.value, city.value, pin.value, state.value, password.value)
        validation(fname, "username", " ** Please fill the username field**");
        validation(email, "email1", " ** Please fill the valid email field**");
        validation(mobile, "mobile1", " ** Please fill the valid mobil no field**");
        validation(dob, "date", " ** Please choose date of birth field**");
        validation(address, "address1", " ** Please fill the address field**");
        validation(pin, "pincode", " ** Please fill the pin code field**");
        validation(state, "state1", " ** Please fill the state field**");
        validation(password, "password1", " ** Please fill the password field**");
        validation(photo, "photo1", " ** Please uplode photo**");
        // validation(fname, "username", " ** Please fill the username field**");
        // validation(fname, "username", " ** Please fill the username field**");
        // console.log(male, male == true || female == true ? (male == true ? "male" : "female") : "")
        for (var value of data.values()) {
            console.log(value);
        }

        if (flag == 1) {
            console.log(flag);
            fetch("http://localhost:8082/tube/register", {
                method: 'post',
                body: data,

            }).then(function(response) {
                return response.text();
            }).then(function(text) {
                console.log(text);
                window.location = "../html/login.html"
            })
        }
    }