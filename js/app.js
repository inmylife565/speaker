'use strict';

let msg = document.getElementById('msg');

// 入力欄にカーソルをセットする
msg.focus();

// キーアップすると入力した文字数をカウントする
function showLength(str) {
    document.getElementById("inputlength").innerHTML = str.length + '文字';
}

// 「読み上げ」ボタンを押すと読み上げる
function executeSpeech() {
    let u = new SpeechSynthesisUtterance();
    u.text = msg.value;
    if (msg.value === "") {
        u.text = "まだ入力されてないよ";
    }
    u.lang = 'ja-JP';
    u.rate = 1.4;
    u.pitch = 1.0;
    u.volume = 1.0;
    speechSynthesis.speak(u);
}

const buttonElement = document.getElementById('speechExecute');
buttonElement.addEventListener('click', executeSpeech);


// 「リロード」ボタンを押すと再読み込みする
document.getElementById('reload').addEventListener('click', () => {
    location.reload();
});