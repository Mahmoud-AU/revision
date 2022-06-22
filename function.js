function Reciter(varName, name, image) {
    this.varName = varName;
    this.name = name;
    this.image = image;

    reciters.push(this);
}

let reciters = [];

let mishary_rashid_al_afasy = new Reciter("mishary", "Mishary Rashid Al-Afasy", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/%D0%9C%D0%B8%D1%88%D0%B0%D1%80%D0%B8_%D0%A0%D0%B0%D1%88%D0%B8%D0%B4.jpg/220px-%D0%9C%D0%B8%D1%88%D0%B0%D1%80%D0%B8_%D0%A0%D0%B0%D1%88%D0%B8%D0%B4.jpg")
let ali_jaber = new Reciter("ali_jaber", "Ali Jaber", "https://apprecs.org/gp/images/app-icons/300/99/com.osama.alijaberEn.jpg");
let ahmad_at_trabulsi = new Reciter("trabulsi", "Ahmad At-Trabulsi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Xc8fUY0geycZtDEGt_ZgAFMR_K0GcnN87RIVihve44OKZ3LjJE7icOxgjwlZ5gEmwVw&usqp=CAU")

let selectedReciter = document.getElementById("selected-reciter");

let contents = document.querySelectorAll(".content");

reciters.forEach(reciter => {
    let a = document.createElement("a");
    a.innerHTML = reciter.name;
    a.href = "#reciter/" + reciter.varName;
    a.addEventListener("click", change.bind(null, reciter), false);
    a.addEventListener("click", togglePage.bind(null, a.href), false);
    contents[1].appendChild(a);
});

let urlID = window.location.href.split("#reciter/")[1];

for (let i = 0; i < reciters.length; i++) {
    if (reciters[i].varName == urlID) {
        change(reciters[i]);
        break;
    }
}

togglePage(window.location.href);

function togglePage(href) {
    contents.forEach(content => {
        let split_href = href.split("#")[1];
        if (content.id !== split_href) content.classList.add("hidden");
        else content.classList.remove("hidden");
    });
}

function change(reciter) {
    selectedReciter.children[0].innerHTML = reciter.name;
    selectedReciter.children[1].src = reciter.image;
}
