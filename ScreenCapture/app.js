const previewElem = document.getElementById('preview');
const startBtn = document.getElementById('start');

startBtn.addEventListener("click", async () => {
    previewElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
        video:{cursor:'always'},
        audio:false,
    });
});