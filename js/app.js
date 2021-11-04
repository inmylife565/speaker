document.getElementById('message').focus();

//ボタンを押すと話す
function executeSpeech(){
    let u = new SpeechSynthesisUtterance();
    u.text = document.getElementById('message').value;
    u.lang = 'ja-JP';
    u.rate = 1.4;
    speechSynthesis.speak(u);
}

const buttonElement = document.getElementById('speechExecute');
buttonElement.addEventListener('click', executeSpeech);


//クリックすると再読込み
document.getElementById('reload').addEventListener('click', () => {
    location.reload();
});