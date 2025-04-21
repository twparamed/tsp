
let currentLang = 'zh';
function switchLang(lang) {
    fetch(`lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("hero-title").innerText = data.welcome;
            document.getElementById("m1").innerText = data.mission1;
            document.getElementById("m2").innerText = data.mission2;
            document.getElementById("m3").innerText = data.mission3;
            document.getElementById("cta").innerText = data.join;
        });
}
