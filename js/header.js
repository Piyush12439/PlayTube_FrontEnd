// function getphoto(id) {
//     axios
//         .get("http://localhost:8082/tube/downloadFile/" + id)
//         .then(response => {
//             let url = "data:image/png;base64,";
//             let Base64 = String(response.data);
//             // const img = document.createElement("img");
//             imgsrc = url + Base64;
//             console.log(imgsrc);
//             // document.body.appendChild(img);
//             return imgsrc;
//             // console.log(String(img.src));
//         })
//         .catch(error => console.error(error));
// }



let login_btn = document.getElementById("login");
// console.log(login_btn);
login_btn.addEventListener("click", function() {
    window.location = "html/login.html"
})


let logout_btn = document.getElementById("logout");
// console.log(login_btn);
logout_btn.addEventListener("click", function() {
    window.localStorage.setItem('id', '');
    window.location = "./index.html";
})


window.addEventListener('load', function() {

    if (this.window.localStorage.getItem('id') !== '') {

        const list = document.getElementById("logout");
        let logout = document.createElement("a");
        logout.href = "./index.html";
        logout.textContent = "logout";
        list.appendChild(logout);
        // console.log(list);
        // console.log(url1);
        let id = this.window.localStorage.getItem('id');

        axios
            .get("http://localhost:8082/tube/all/" + id)
            .then(response => {
                console.log(response.data);
                document.getElementById("update").innerHTML = "Hi " + response.data.userName;
                // console.log(response.data.fname);
                let url = "data:image/png;base64,";
                let Base64 = String(response.data.profilephoto);
                let imgsrc = url + Base64;
                let ee = document.getElementById("loginurl");

                ee.setAttribute('src', imgsrc);


            })
            .catch(error => console.error(error));

    }
})

let uplodeicon = document.getElementById('uplode-icon');

uplodeicon.addEventListener('mouseover', function() {

    // let uplodeicondiv = document.getElementById('uplode');
    uplodeicon.style.width = "80px"

    console.log('uplode-icon');
})
uplodeicon.addEventListener('mouseout', function() {

    // let uplodeicondiv = document.getElementById('uplode');
    uplodeicon.style.width = "60px"

    console.log('uplode-icon');
})



function myFunction() {


    var x = document.getElementById('myDIV');
    let res = (x.style.display == "none");
    x.style.display = "block";
    // var x1 = document.getElementById("myDIV1");
    if (res) {
        // x1.style.display = "none";
        document.getElementById('myDIV').style.display = "block";

    } else if (x.style.display === "block") {
        x.style.display = "none";
        // x1.style.display = "block";
        // x1.load = "html/login.html";
    }
}
window.addEventListener('load',
    function fun() {
        window.localStorage.setItem('v_id', '');
        axios
            .get("http://localhost:8082/tube/items/homeVideo")
            .then(response => {
                for (i = 0; i < response.data.length; i++) {
                    let url = "data:video/mp4;base64,";
                    let responsedata = response.data[i];
                    console.log((response.data));
                    const nav = document.querySelector('.list-container')
                    var tag = document.createElement("div");
                    tag.classList.add("vid-list");
                    // tag.appendChild(text);
                    var vid_a = document.createElement("a");

                    vid_a.onclick = function() {
                            window.localStorage.setItem('v_id', responsedata.video_id);
                            window.location = "/html/VideoPage.html";
                            // this.window.localStorage.setItem("v_id", responsedata.Video_id);
                        } //video player page link//"/html/VideoPage.html"
                    var vid_img = document.createElement("img"); //thumbnail link
                    vid_img.src = url + String(responsedata.thumbnail);
                    vid_img.classList.add("thumbnail");
                    vid_a.appendChild(vid_img);
                    tag.appendChild(vid_a);
                    var flex_div = document.createElement("div");
                    flex_div.classList.add("flex-div");
                    var channal_img = document.createElement("img");
                    channal_img.src = url + String(responsedata.photo); //channel profile image link
                    channal_img.classList.add("c1");
                    flex_div.appendChild(channal_img);
                    var vid_info = document.createElement("div");
                    vid_info.classList.add("vid-info");
                    vid_info.classList.add("c1");
                    var vid_info_a = document.createElement("a");
                    vid_info_a.onclick = function() {
                            window.localStorage.setItem('v_id', responsedata.video_id);
                            window.location = "/html/VideoPage.html";
                            // this.window.localStorage.setItem("v_id", responsedata.Video_id);
                        } //video player page link
                    var p1 = document.createElement("p");
                    var titel_text = document.createTextNode(responsedata.docName); //Vedio title
                    p1.appendChild(titel_text);
                    vid_info_a.appendChild(p1);
                    vid_info.appendChild(vid_info_a);
                    var p2 = document.createElement("p");
                    var discription = document.createTextNode(responsedata.user); //Channel Name
                    p2.appendChild(discription);
                    vid_info.appendChild(p2);
                    var p3 = document.createElement("p");
                    let time = ((new Date() - new Date(responsedata.days)) / (1000 * 3600));
                    // console.log(time);
                    var likes = document.createTextNode(responsedata.views + ' * ' + (time < 24 ? (Math.round(time) + 'hours') : (Math.round(time / 24) + 'days'))); //Views
                    p3.appendChild(likes);
                    vid_info.appendChild(p3);
                    flex_div.appendChild(vid_info);
                    tag.appendChild(flex_div);
                    nav.appendChild(tag);
                }
            })
            .catch(error => console.error(error));




    })







// ===========