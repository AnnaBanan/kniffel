"use strict";
function refreshPage(){
    window.location.reload();
} 

function setPlaceholder(spieler){
    let name1 = document.getElementById(spieler).value;

    for (let i = 1; i<=6; i++){
        document.getElementById(`${spieler}_${i}er`).placeholder = `${i}er ${name1}`;
    }
}

function ergebnisSpieler_oben(spieler){
    let spielerErgebnis_oben = 0;
    let spieler_oben = document.getElementsByClassName(`${spieler}_oben`);
    for(let i=0; i < spieler_oben.length; i++){
        if(parseFloat(spieler_oben[i].value))
        spielerErgebnis_oben += parseFloat(spieler_oben[i].value);
    }
    return spielerErgebnis_oben;
}

function bonus(spieler, ergebnisOben ){
    let spielerBonus = document.getElementById(`${spieler}_bonus`);
    spielerBonus.value = 0;
    if(ergebnisOben >= 63){
        spielerBonus.value = 35;
    }
    return spielerBonus.value;
}

function ergebnis_oben(spieler){
    const ergebnisOben = ergebnisSpieler_oben(spieler);
    bonus(spieler, ergebnisOben);
    document.getElementById(`${spieler}_button_oben`).innerText = ergebnisOben + " Punkte";
}


function ergebnisSpieler(spieler){
    const ergebnisOben = ergebnisSpieler_oben(spieler);

    const spielerBonus = bonus(spieler, ergebnisOben);

    let spielerErgebnis_unten = 0;
    let spieler_unten = document.getElementsByClassName(`${spieler}_unten`);
    for(let i=0; i<spieler_unten.length; i++){
        if(parseFloat(spieler_unten[i].value))
        spielerErgebnis_unten += parseFloat(spieler_unten[i].value);
    }

    let spielerErgebnis = parseInt(ergebnisOben) + parseInt(spielerBonus) + parseInt(spielerErgebnis_unten);
    document.getElementById(`${spieler}_button`).innerText = spielerErgebnis + " Punkte";
}

