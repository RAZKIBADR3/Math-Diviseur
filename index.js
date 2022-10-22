T = '';
function ajouter() {
    var num = document.getElementById('num').value;
    T += num + '\n';
}

function afficher() {
    document.getElementById('textarea').innerHTML = T;
}

function diviseur() {
    var n = document.getElementById('num').value;
    var diviseur = "";
    for (i=0;i<=n;i++) {
        if (n%i==0) {
            diviseur += i+"\n";
        }
    }
    document.getElementById('textarea').innerHTML = diviseur;
}

function supp() {
    document.getElementById('textarea').innerHTML = "";
    T = ''
}