/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const card = document.querySelector("#card");
const paloUp = document.querySelector("#paloUp");
const cardValue = document.querySelector("#cardValue");
const paloDown = document.querySelector("#paloDown");
const generarCartaBtn = document.querySelector("#generarCartaBtn");

const palos = ["♦", "♥", "♠", "♣"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function generarValorAleatorio() {
  return valores[Math.floor(Math.random() * valores.length)];
}

function generarPaloAleatorio() {
  return palos[Math.floor(Math.random() * palos.length)];
}

function aplicarColor(palo) {
  if (palo === "♦" || palo === "♥") {
    card.style.color = "red";
  } else {
    card.style.color = "black";
  }
}

function generarCartaAleatoria() {
  const paloAleatorio = generarPaloAleatorio();
  const valorAleatorio = generarValorAleatorio();

  paloUp.textContent = paloAleatorio;
  cardValue.textContent = valorAleatorio;
  paloDown.textContent = paloAleatorio;

  aplicarColor(paloAleatorio);
}

generarCartaBtn.addEventListener("click", generarCartaAleatoria);

generarCartaAleatoria();
