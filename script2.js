function lisaa_kaveri() {
    const nimet = document.getElementById("nimet");
    const nimi = document.getElementById("v2nimi").value;
    const lista = []
    for (const child of nimet.children) {
        lista.push(child.textContent)
    }
    if (! lista.includes(nimi))
        document.getElementById("nimet").innerHTML += `<p>${nimi}</p>`;
}

function poista_kaveri() {
    const poistettava = document.getElementById("v2nimi").value;
    const nimet = document.getElementById("nimet");
    for (const child of nimet.children) {
        if (child.textContent == poistettava) {
            nimet.removeChild(child);
        }
    }
}

function jarjesta() {
    const nimet = document.getElementById("nimet");
    const jarjestetty = [];
    for (const child of nimet.children) {
        jarjestetty.push(child.textContent);
    }
    nimet.innerHTML = "";
    for (nimi of jarjestetty.sort()) {
        document.getElementById("nimet").innerHTML += `<p>${nimi}</p>`;
    }
}