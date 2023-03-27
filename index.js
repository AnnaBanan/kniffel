"use strict";
function refreshPage() {
  window.location.reload();
}

function addPlayer() {
  let spielerName = document.getElementById("neuerSpieler").value;
  let spielerAnzahl =
    (document.getElementsByClassName("spieler")?.length || 0) + 1;

  let html = `<div class="flex flex-col spieler border-bottom">
  <div class="feld border-bottom bold">
      <label for="spieler${spielerAnzahl}"></label>
      <input onblur="setPlaceholder('spieler${spielerAnzahl}')" id="spieler${spielerAnzahl}" name="${spielerName}" value="${spielerName}" type="text">
  </div>
  <div class="feld">
      <label for="spieler${spielerAnzahl}_1er"></label>
      <input id="spieler${spielerAnzahl}_1er" class="spieler${spielerAnzahl}_oben" name="1er ${spielerName}" placeholder="1er ${spielerName}" type="number" min="0" max="5">
  </div>
  <div class="feld">
      <label for="spieler${spielerAnzahl}_2er"></label>
      <input id="spieler${spielerAnzahl}_2er" class="spieler${spielerAnzahl}_oben" name="2er ${spielerName}" placeholder="2er ${spielerName}" type="number" min="0" max="10">
  </div>
  <div class="feld">
      <label for="spieler${spielerAnzahl}_3er"></label>
      <input id="spieler${spielerAnzahl}_3er" class="spieler${spielerAnzahl}_oben" name="3er ${spielerName}" placeholder="3er ${spielerName}" type="number" min="0" max="15">
  </div>
  <div class="feld">
      <label for="spieler${spielerAnzahl}_4er"></label>
      <input id="spieler${spielerAnzahl}_4er" class="spieler${spielerAnzahl}_oben" name="4er ${spielerName}" placeholder="4er ${spielerName}" type="number" min="0" max="20">
  </div>
  <div class="feld">
      <label for="spieler${spielerAnzahl}_5er"></label>
      <input id="spieler${spielerAnzahl}_5er" class="spieler${spielerAnzahl}_oben" name="5er ${spielerName}" placeholder="5er ${spielerName}" type="number" min="0" max="25">
  </div>
  <div class="feld border-bottom">
      <label for="spieler${spielerAnzahl}_6er"></label>
      <input id="spieler${spielerAnzahl}_6er" class="spieler${spielerAnzahl}_oben" name="6er ${spielerName}" placeholder="6er ${spielerName}" type="number" min="0" max="30">
  </div>
  <div class="feld flex flex-center">
      <button id="spieler${spielerAnzahl}_button_oben" onclick="ergebnis_oben('spieler${spielerAnzahl}')">ausrechnen</button>
  </div>
  <div class="feld border-bottom">
      <label for="spieler${spielerAnzahl}_bonus"></label>
      <input id="spieler${spielerAnzahl}_bonus" name="bonus Spieler ${spielerAnzahl}" placeholder="Bonus" type="number" min="0" max="35" readonly>
  </div>
  <div class="feld">
      <label for="spieler${spielerAnzahl}_pasch3"></label>
      <input id="spieler${spielerAnzahl}_pasch3" class="spieler${spielerAnzahl}_unten" name="Pasch 3 Spieler ${spielerAnzahl}" placeholder="Pasch 3" type="number" min="0" max="30">
  </div>
  <div class="feld">
      <label for="spieler${spielerAnzahl}_pasch4"></label>
      <input id="spieler${spielerAnzahl}_pasch4" class="spieler${spielerAnzahl}_unten" name="Pasch 4 Spieler ${spielerAnzahl}" placeholder="Pasch 4" type="number" min="0" max="30">
  </div>
  <div class="feld">
      <label for="spieler${spielerAnzahl}_fullhouse"></label>
      <input id="spieler${spielerAnzahl}_fullhouse" class="spieler${spielerAnzahl}_unten" name="Fullhouse Spieler ${spielerAnzahl}" placeholder="Fullhouse" type="number" min="0" max="25">
  </div>
  <div class="feld">
      <label for="spieler${spielerAnzahl}_klStr"></label>
      <input id="spieler${spielerAnzahl}_klStr" class="spieler${spielerAnzahl}_unten" name="kleine Straße Spieler ${spielerAnzahl}" placeholder="kl Straße" type="number" min="0" max="30">
  </div>
  <div class="feld">
      <label for="spieler${spielerAnzahl}_grStr"></label>
      <input id="spieler${spielerAnzahl}_grStr" class="spieler${spielerAnzahl}_unten" name="große Straße Spieler ${spielerAnzahl}" placeholder="gr Straße" type="number" min="0" max="40">
  </div>
  <div class="feld">
      <label for="spieler${spielerAnzahl}_kniffel"></label>
      <input id="spieler${spielerAnzahl}_kniffel" class="spieler${spielerAnzahl}_unten" name="Kniffel Spieler ${spielerAnzahl}" placeholder="Kniffel" type="number" min="0" max="30">
  </div>
  <div class="feld border-bottom">
      <label for="spieler${spielerAnzahl}_chance"></label>
      <input id="spieler${spielerAnzahl}_chance" class="spieler${spielerAnzahl}_unten" name="Chance Spieler ${spielerAnzahl}" placeholder="Chance" type="number" min="0" max="30">
  </div>
  <div class="feld flex flex-center">
      <button id="spieler${spielerAnzahl}_button" onclick="ergebnisSpieler('spieler${spielerAnzahl}')">ausrechnen</button>
  </div>
</div>`;
  const node = document.createElement("div");
  document.getElementById("players").appendChild(node);
  node.outerHTML = html;
  document.getElementById("neuerSpieler").value = "";
}

function setPlaceholder(spieler) {
  let name1 = document.getElementById(spieler).value;

  for (let i = 1; i <= 6; i++) {
    document.getElementById(
      `${spieler}_${i}er`
    ).placeholder = `${i}er ${name1}`;
  }
}

function ergebnisSpieler_oben(spieler) {
  let spielerErgebnis_oben = 0;
  let spieler_oben = document.getElementsByClassName(`${spieler}_oben`);
  for (let i = 0; i < spieler_oben.length; i++) {
    if (parseFloat(spieler_oben[i].value))
      spielerErgebnis_oben += parseFloat(spieler_oben[i].value);
  }
  return spielerErgebnis_oben;
}

function bonus(spieler, ergebnisOben) {
  let spielerBonus = document.getElementById(`${spieler}_bonus`);
  spielerBonus.value = 0;
  if (ergebnisOben >= 63) {
    spielerBonus.value = 35;
  }
  return spielerBonus.value;
}

function ergebnis_oben(spieler) {
  const ergebnisOben = ergebnisSpieler_oben(spieler);
  bonus(spieler, ergebnisOben);
  document.getElementById(`${spieler}_button_oben`).innerText =
    ergebnisOben + " Punkte";
}

function ergebnisSpieler(spieler) {
  const ergebnisOben = ergebnisSpieler_oben(spieler);

  const spielerBonus = bonus(spieler, ergebnisOben);

  let spielerErgebnis_unten = 0;
  let spieler_unten = document.getElementsByClassName(`${spieler}_unten`);
  for (let i = 0; i < spieler_unten.length; i++) {
    if (parseFloat(spieler_unten[i].value))
      spielerErgebnis_unten += parseFloat(spieler_unten[i].value);
  }

  let spielerErgebnis =
    parseInt(ergebnisOben) +
    parseInt(spielerBonus) +
    parseInt(spielerErgebnis_unten);
  document.getElementById(`${spieler}_button`).innerText =
    spielerErgebnis + " Punkte";
}
