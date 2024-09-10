function kysy_nimet() {
    const nimet = [];
    for (let i = 0; i < 10; i++) {
        let nimi = prompt("Anna nimi:");
        if (nimi != "") {
            nimet.push(nimi)
        } else {
            i -= 1;
        }
    }
    let n = 1;
    nimet.forEach((kaveri) => {
        document.getElementById("nimet").innerHTML += `${n}. ${kaveri}<br>`;
        n += 1;
    })
}

function poista() {
    const elementti = document.getElementById("poistettava");
    elementti.remove();
}