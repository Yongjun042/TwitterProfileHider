let hname = "숨김";
let hpic = "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png";
let hlink = "@hide"

function hideProfile() {
    let profile = document.getElementsByClassName("css-1dbjc4n r-sdzlij r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-417010");
    console.log(profile);
    profile[0].setAttribute("aria-label", hname);
    profile[0].getElementsByTagName('div')[0].style.backgroundImage = "url('" + hpic + "')";
    profile[0].getElementsByTagName('img')[0].src = hpic;
    profile[0].getElementsByTagName('img')[0].alt = hname;
    let nick = document.getElementsByClassName("css-901oao css-bfa6kz r-1awozwy r-18jsvk2 r-6koalj r-1qd0xha r-a023e6 r-b88u0q r-rjixqe r-bcqeeo r-1udh08x r-3s2u2q r-qvutc0");
    console.log(nick);
    let nick2 = nick[0].getElementsByTagName('span')[0];
    console.log(nick2);
    nick2.innerHTML = hname;
    let link = document.getElementsByClassName("css-901oao css-bfa6kz r-14j79pv r-18u37iz r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0");
    console.log(link);
    link[0].getElementsByTagName('span')[0].innerText = hlink;
}

function runhide() {

    let timerId = setInterval(hideProfile(), 1000);
    setTimeout(() => { clearInterval(timerId); }, 5000);
}
document.addEventListener("DOMContentLoaded", runhide());