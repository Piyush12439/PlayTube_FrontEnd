window.addEventListener('load',
    function fun() {
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
                    vid_a.href = " "; //video player page link
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
                    vid_info_a.href = " "; //video player page link
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