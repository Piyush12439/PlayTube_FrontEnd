function Comment(element, reply, reply_id) {
    if (!replies.includes(element.id)) {
        replies.push(element.id)



        var tag = document.createElement("div");
        tag.classList.add("old-comment");
        tag.classList.add("sec");
        tag.setAttribute('id', element.id)
        if (reply == true) {
            tag.classList.add("Reply-comments");
            tag.classList.add(element.id);

        }

        var commentPhoto = document.createElement("img");
        commentPhoto.src = photourl + String(responsedata.profilePhoto);
        tag.appendChild(commentPhoto); ///commenter Photo
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        let commenter = this.document.createTextNode('#' + responsedata.user); ///commenter name
        var commentdaysSpan = document.createElement("span");
        let time2 = ((new Date() - new Date(element.commentDate)) / (1000 * 3600));
        let commentdays = this.document.createTextNode((time2 < 24 ? (Math.round(time2) + ' hours ago') : (Math.round(time2 / 24) + ' days ago'))); ///commenter name
        commentdaysSpan.appendChild(commentdays);
        h3.appendChild(commenter);
        h3.appendChild(commentdaysSpan);
        div.appendChild(h3);
        var commentPara = document.createElement("p");
        var commentText = this.document.createTextNode(element.comment);
        commentPara.appendChild(commentText);
        div.appendChild(commentPara);
        var comment_actionDiv = document.createElement("div");
        comment_actionDiv.classList.add('acomment-action');

        let likeimg = document.createElement("img");

        likeimg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAaVBMVEX///8AAAD7+/tWVlbt7e3CwsI7Ozu9vb2JiYmjo6NhYWG3t7dtbW329vbw8PDc3Nxzc3OQkJAVFRXT09MmJiZOTk7Nzc2xsbGDg4Pi4uKZmZlAQEBnZ2dHR0epqakvLy8fHx97e3sLCwupu5heAAAD0klEQVR4nO2aW7uqIBCG06w0D5mHzJVZ9v9/5E4GEslwWCvwYvNdgaW8j8wBBlcrKysrKysrKyur/0iH0E+j6HhaDOC0zhzQOlkEIE6dQbdFGHiC53tYgMC7jRCcyjxCPiZwtuYRdjCyX+2O0DLvFj4Zt+mbe9I8G0coybjHvnkizYdpAhesMezbyYW0PcMIB4hKOelEA45BbcioWUw6wTApBhXwnggOmhpGiPhRPQiQrlmEjA+JMeltDeeJUTiKr33nbtYlDoSgqGm3WcArWzLmNaZdsIxaesu3xYXnXh3pHkwSuJAWflj/bB4hKcbJ0TePAIlpmPwFEGAe9q++eYSTuFYzb47wEpzhQmraKSFLDv5gPjS5dzLgfUgJ8ba/YHAvAbbnBMOVhFwo48/3fFd0Gi7cgLXZ9YL3GCVJjso3ROBunffxYCfRGkKgO8n76GJjMizQnRNdOVPBisUxs25jBOM9LKxfLkYJBMMLyUUja/iAEuyF62AKu+8MknjvesU89g4u40l3PRItH/nUzZ5auHLbwplS0ZIxO9otR3HYPU/ew2kd5NPjvStef35KvIppdnSu42T0M0fQq0H6ayd5xtm70lYhpMNMchcnVNgSCzfTuopze8ch8Jn9o2bntFfzZl0hEgFTBwJLuG1F8YW1dMK+q8vbLfzdr4lCbHoBYbNyx2JlrV7d9J2uRMmhYm42b5IMQdSA8NvKoo+1hjmEAu3dolzwpmb2jzMI5R8WhhA75kvEcoTy9wDfQhAzk5JgoTWfSfUhtN/xiD8g0CyCeIImhKSkHoXY7elBSFhgwpRm9SCw5BfM/1UXQnxDRkZ9CPQ14Ha8ujzCRwYFjQg1SdfZkgg0NmJWj9oQ4MgGs8vQhgA+gUn1uhAqCAyYPa8mBEoQYf6rBWEDhuBkqHqgDoTXxgC37NSA4DECXHzWgVBTAmwRSsdEgCWgyy86EKg7YOtgOhBoqXjJiaAPxdZEtSB0yyNEiyPQwIBaOOpByLNlPSI+sQIZ+pOnLyOwBNUXJJdBSIb6EL4q+12E17dfmcLnTnKEteK5Ez3ULjqVU7uZKsujUftgB4ISMkvjEHodFYo9sKVXOyBAIDgPH30gqwvhaV1n3Jtw10pxUY6wcQR1CBtnX4SqnWIDwnEXjrXzRYTeP3y5WGVF8VPQ/cRQg5rwKv19WorV0lb6sGrlnpQhVA/MPNnhRkYijCKE+gHyTvI0ZqV5KvmTQP2bE7tw+nTsGWa5p9U/5ae/8bqohDFOXpVG70orIc7Xm7ANZGrD3NinDFZWVlZWVlZWVvr1D4tYLAptZ10jAAAAAElFTkSuQmCC";
        comment_actionDiv.appendChild(likeimg);
        let likeSpan = document.createElement("span");
        var LikeText = this.document.createTextNode(element.like_no);
        likeSpan.appendChild(LikeText);
        comment_actionDiv.appendChild(likeSpan);
        // ==
        let dislikeimg = document.createElement("img");
        dislikeimg.src = "https://cdn-icons-png.flaticon.com/512/126/126504.png";
        comment_actionDiv.appendChild(dislikeimg);
        let dislikeSpan = document.createElement("span");
        var disLikeText = this.document.createTextNode(element.dislike_no);
        dislikeSpan.appendChild(disLikeText);
        comment_actionDiv.appendChild(dislikeSpan);
        let replySpan = document.createElement("span");
        replySpan.setAttribute('id', 'replySpan');


        var replyText = this.document.createTextNode('Reply');


        replySpan.appendChild(replyText);
        // replySpan.appendChild(replyinput)
        comment_actionDiv.appendChild(replySpan);

        let allreply = document.createElement("a");
        var allreplyText = this.document.createTextNode('All Reply');
        allreply.onclick = function() {

            reply_id = element.id;
            element.reply.forEach(element => { Comment(element, true, reply_id) });


        };
        allreply.appendChild(allreplyText);
        comment_actionDiv.appendChild(allreply);



        div.appendChild(comment_actionDiv);
        tag.appendChild(div);
        var replySec = document.createElement("div");
        replySec.classList.add('replySec');
        replySec.setAttribute('id', 'replySec' + element.id);
        tag.appendChild(replySec);
        if (reply) {
            this.document.getElementById('replySec' + reply_id).appendChild(tag);
        } else {
            this.document.getElementById('vid-description').appendChild(tag);
        }

    } else {
        // let Remove = document.getElementsByClassName('div.old-comment.Reply-comments.element.id');
        let Remove1 = document.getElementById(element.id);
        replies.splice(replies.indexOf(element.id), 1);
        // console.log(Remove, element.id, Remove1, replies);
        Remove1.remove();


    }
}




let replies = [];
let responsedata;
let photourl = "data:image/png;base64,";
let time;
let reply_id;
window.addEventListener('load', function() {
    let id = this.window.localStorage.getItem('v_id');
    axios
        .get("http://localhost:8082/tube/items/homeVideo/" + id)
        .then(response => {
            responsedata = response.data;
            console.log(response.data);
            let video = document.getElementById('video');
            let url = "data:video/mp4;base64,";
            video.src = url + String(responsedata.video);
            let tags = document.getElementById('tags');
            var tag1 = null;
            let text = null;
            responsedata.tag.forEach(element => {
                // console.log(element.tag);
                tag1 = document.createElement("a");
                tag1.href = '';
                text = this.document.createTextNode('#' + element.tag);
                tag1.appendChild(text);
                tags.appendChild(tag1);
            });
            this.document.getElementById('docName').innerHTML = responsedata.docName;
            let view = responsedata.views;
            time = ((new Date() - new Date(responsedata.uplodeDate)) / (1000 * 3600));
            // console.log(time);

            this.document.getElementById('views').innerHTML = view > 1000 ? (view / 1000) + 'K views' : view + 'views';
            this.document.getElementById('uplodedays').innerHTML = (time < 24 ? (Math.round(time) + ' hours') : (Math.round(time / 24) + ' days'));
            this.document.getElementById('dislike').innerHTML = responsedata.dislikes;
            this.document.getElementById('like').innerHTML = responsedata.likes;
            this.document.getElementById('channalName').innerHTML = responsedata.user;
            this.document.getElementById('channalPhoto').src = photourl + String(responsedata.profilePhoto);
            this.document.getElementById('discription').innerHTML = responsedata.discription;
            this.document.getElementById('commentNo').innerHTML = responsedata.comment.length + ' Comments';
            getLikeStatus(id, window.localStorage.getItem('id'))
            responsedata.comment.reverse().forEach(element => {
                reply_id = null;
                Comment(element, false, reply_id);



            });

        })
        .catch(error => console.error(error));
    // ================================
    axios
        .get("http://localhost:8082/tube/items/homeVideo")
        .then(response => {

            response.data.forEach(element => {
                if (element.id != window.localStorage.getItem('v_id')) {
                    console.log(element);
                    let main = document.createElement("a");
                    main.classList.add('main');
                    main.onclick = function() {
                        window.localStorage.setItem('v_id', element.id);
                        window.location = "/html/VideoPage.html";
                    };

                    let side_video_list = document.createElement("div");
                    side_video_list.classList.add('side-video-list');
                    let small_thumbnail = document.createElement('a');
                    small_thumbnail.classList.add('small-thumbnail');
                    let small_thumbnail_img = document.createElement('img');
                    small_thumbnail_img.src = photourl + String(element.thumbnail);
                    small_thumbnail.appendChild(small_thumbnail_img);
                    side_video_list.appendChild(small_thumbnail);
                    let vid_info = document.createElement('div');
                    vid_info.classList.add('vid-info');
                    let vid_title = document.createElement('a');
                    let vid_title_text = this.document.createTextNode(element.docName.length < 65 ? element.docName : element.docName.slice(0, 60) + '.....');
                    vid_title.appendChild(vid_title_text);
                    vid_info.appendChild(vid_title);
                    let channelName = document.createElement('p');
                    let channelName_text = this.document.createTextNode(element.user);
                    channelName.appendChild(channelName_text);
                    vid_info.appendChild(channelName);
                    let views = document.createElement('p');
                    let view1 = element.views;
                    let time1 = ((new Date() - new Date(element.days)) / (1000 * 3600));
                    let views_text = this.document.createTextNode((view1 > 1000 ? (view1 / 1000).toFixed(2) + ' K views' : view1 + ' views') + ' * ' + (time1 < 24 ? (Math.round(time1) + ' hours') : (Math.round(time1 / 24) + ' days')));
                    views.appendChild(views_text);
                    vid_info.appendChild(views);
                    side_video_list.appendChild(vid_info);
                    main.appendChild(side_video_list);
                    document.getElementById('right-sidebar').appendChild(main);
                }

            })
        })
        .catch(error => console.error(error));
})

function getLikeStatus(v_id, userId) {
    axios
        .get("http://localhost:8082/tube/items/likeStatus/" + v_id + '/' + userId)
        .then(response => {
            console.log(response.data);
            if (response.data == 1) {

                like();
            }
            if (response.data == 0) {

                dislike();
            }

        })
        .catch(error => console.error(error));

}
document.getElementById('CommentBox').addEventListener('click', function showSubmit(e) {
    console.log('ok');
    let comment = document.getElementById('commentsubmit');
    comment.style.display = "block";
})


document.getElementById('CancelComment').addEventListener('click', function() {
    let comment = document.getElementById('commentsubmit');
    comment.style.display = "none";

})

function addComment() {
    console.log('addComment');
    let comment = document.getElementById('commentsubmit');
    comment.style.display = "none";
    let data = new FormData();
    data.append('Comment', document.getElementById('CommentBox').value);
    data.append('id', V_id);
    data.append('UserId', user_id)
    fetch('http://localhost:8082/tube/items/addComments', {
        method: 'post',
        body: data,

    }).then(function(response) {
        return response.text();
    }).then(function(text) {

    })
    document.getElementById('CommentBox').value = "";
}

function deleteLikeStatus(v_id, userId) {
    axios
        .get("http://localhost:8082/tube/items/deletelike/" + v_id + '/' + userId)
        .then(response => {



        })
        .catch(error => console.error(error));

}
let V_id = window.localStorage.getItem('v_id');
let user_id = window.localStorage.getItem('id');

function updateLikeDislike(status) {

    let data = new FormData();
    data.append('id', V_id);
    data.append('UserEmail', user_id);
    data.append('LikesStatus', status);
    fetch('http://localhost:8082/tube/items/UpdateLikes', {
        method: 'post',
        body: data,

    }).then(function(response) {
        return response.text();
    }).then(function(text) {

    })
}



let likeStatus = 0;
let dislikeStatus = 0;

function like() {

    let like = document.getElementById('likes');
    if (likeStatus == 0) {
        if (dislikeStatus == 1) {
            let dislike = document.getElementById('dislikes');
            dislikeStatus = 0
            dislike.src = "https://cdn-icons-png.flaticon.com/512/126/126504.png";
        }
        likeStatus = 1
        updateLikeDislike(1);
        like.src = "data:image/png;base64,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";
    } else {
        likeStatus = 0
        like.src = "https://pngimg.com/uploads/like/small/like_PNG85.png";
    }
    if (dislikeStatus == 0 && likeStatus == 0) {
        console.log('null');
        deleteLikeStatus(V_id, user_id);
    }

}


function dislike() {
    let like = document.getElementById('dislikes');
    if (dislikeStatus == 0) {
        if (likeStatus == 1) {
            let like = document.getElementById('likes');
            likeStatus = 0
            like.src = "https://pngimg.com/uploads/like/small/like_PNG85.png";
        }
        dislikeStatus = 1
        updateLikeDislike(0);
        like.src = "data:image/png;base64,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";

    } else {
        dislikeStatus = 0
        like.src = "https://cdn-icons-png.flaticon.com/512/126/126504.png";
    }
    if (dislikeStatus == 0 && likeStatus == 0) {
        console.log('null');
        deleteLikeStatus(V_id, user_id);
    }
}
// let CommentlikeStatus = 0;
// let CommentdislikeStatus = 0;

// function Commentlike() {

//     let like = document.getElementById('likes');
//     if (CommentlikeStatus == 0) {
//         if (CommentdislikeStatus == 1) {
//             let dislike = document.getElementById('dislikes');
//             CommentdislikeStatus = 0
//             dislike.src = "https://cdn-icons-png.flaticon.com/512/126/126504.png";
//         }
//         CommentlikeStatus = 1
//         updateLikeDislike(1);
//         like.src = "data:image/png;base64,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";
//     } else {
//         CommentlikeStatus = 0
//         like.src = "https://pngimg.com/uploads/like/small/like_PNG85.png";
//     }
//     if (CommentdislikeStatus == 0 && CommentlikeStatus == 0) {
//         console.log('null');
//         deleteLikeStatus(V_id, user_id);
//     }

// }


// function Commentdislike() {
//     let like = document.getElementById('dislikes');
//     if (CommentdislikeStatus == 0) {
//         if (CommentlikeStatus == 1) {
//             let like = document.getElementById('likes');
//             CommentlikeStatus = 0
//             like.src = "https://pngimg.com/uploads/like/small/like_PNG85.png";
//         }
//         CommentdislikeStatus = 1
//         updateLikeDislike(0);
//         like.src = "data:image/png;base64,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";

//     } else {
//         CommentdislikeStatus = 0
//         like.src = "https://cdn-icons-png.flaticon.com/512/126/126504.png";
//     }
//     if (CommentlikeStatus == 0 && CommentdislikeStatus == 0) {
//         console.log('null');
//         deleteLikeStatus(V_id, user_id);
//     }
// }