window.addEventListener('load', function() {

    if (this.window.localStorage.getItem('id') !== '') {

        const list = document.getElementById("logout");

        // console.log(list);
        // console.log(url1);
        let id = this.window.localStorage.getItem('id');


        // ============
        axios
            .get("http://localhost:8082/tube/all/" + id)
            .then(response => {
                document.getElementById("title").innerHTML = "Hi " + response.data.userName;


                let url = "data:image/png;base64,";
                let Base64 = String(response.data.profilephoto);
                // const img = document.createElement("img");
                let imgsrc = url + Base64;
                let ee = document.getElementById("image");

                ee.setAttribute('src', imgsrc);



            })
            .catch(error => console.error(error));

    }
})

function submit() {
    var containt = document.getElementById("containt");
    var title = document.getElementById("containtTitle");
    var type = document.getElementById("type");
    var tags = document.getElementById("tags");
    let ispublic = document.getElementById("isPublic").checked == true ? "true" : "false";
    var discription = document.getElementById("discription");
    var Thumbnail = document.getElementById("Thumbnail");

    let data = new FormData();
    data.append('containt', containt.files[0]);
    data.append('title', title.value);
    data.append('type', type.value);
    data.append('tags', tags.value);
    data.append('ispublic', ispublic);
    data.append('discription', discription.value);
    data.append('thumbnail', Thumbnail.files[0]);
    data.append('UplodeDate', new Date());
    data.append('User', this.window.localStorage.getItem('id'));
    console.log(containt.files[0], title.value, type.value, tags.value, ispublic, discription.value)


    fetch('http://localhost:8082/tube/items/uploaditems', {
        method: 'post',
        body: data,

    }).then(function(response) {
        return response.text();
    }).then(function(text) {
        console.log(text);
        if (text == "1") {
            alert("Your File is Uplode Successfully")
            window.location = "../index.html";
        } else {
            alert("Your File is Uplode Not Uploded")
        }

    })
}