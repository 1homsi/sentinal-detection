const input = document.getElementsByName("iterations");

window.onresize = function () {
    window.resizeTo(900, 650);
};

const py_video = () => {
    eel.video_feed()();
};

const closeConnection = () => {
    eel.Close()();
};

const py_video_fall = () => {
    const select = document.getElementById("SourceSelect");
    console.log(select.value);
    eel.detectFallFeed(select.value)();
};

const closeFallConnection = () => {
    const select = document.getElementById("SourceSelect");
    let selected = select.value;
    eel.CloseDetector(selected)();
};

const TrainModel = async () => {
    let info = document.getElementById("info");
    info.style.visibility = "visible";
    var n = await eel.train(input[0]?.value)();
    info.innerHTML = n;
};

eel.expose(updateImageSrc);
function updateImageSrc(val) {
    let elem = document.getElementById("bg");
    elem.src = "data:image/jpeg;base64," + val;
}

function handleMenu(e) {
    let menu = document.getElementById("Menu");
    let open = document.getElementById("open");
    let close = document.getElementById("close");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        open.style.display = "block";
        close.style.display = "none";
    } else {
        menu.style.display = "block";
        open.style.display = "none";
        close.style.display = "block";
    }
};
