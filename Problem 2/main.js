let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let card = document.querySelector("#cardsuits").value;
  let AnimalName = document.querySelector("#AnimalName").value;
  let Fruit = document.querySelector("#Fruit").value;
  let result = document.getElementById("result");
  probabilityToBeatBoss(card, AnimalName, Fruit);
});
function percentageanimal(y, animalname) {
  let winrate = 0;
  let loserate = 0;
  let total = 0;

  for (i = 0; i < y.length; i++) {
    if (y[i]["AnimalName"] === animalname && y[i]["Result"] === true) {
      winrate++;
      total++;
    } else if (y[i]["AnimalName"] === animalname && y[i]["Result"] === false) {
      loserate++;
      total++;
    }
  }
  let percentage = (winrate * 100) / total;
  return percentage;
}
function percentagecard(y, cardsuit) {
  let winrate = 0;
  let loserate = 0;
  let total = 0;
  for (i = 0; i < y.length; i++) {
    if (y[i]["CardSuit"] === cardsuit && y[i]["Result"] === true) {
      winrate++;
      total++;
    } else if (y[i]["CardSuit"] === cardsuit && y[i]["Result"] === false) {
      loserate++;
      total++;
    }
  }
  let percentage = (winrate * 100) / total;
  return percentage;
}
function percentagefruit(y, Fruit) {
  let winrate = 0;
  let loserate = 0;
  let total = 0;

  for (i = 0; i < y.length; i++) {
    if (y[i]["Fruit"] === Fruit && y[i]["Result"] === true) {
      winrate++;
      total++;
    } else if (y[i]["Fruit"] === Fruit && y[i]["Result"] === false) {
      loserate++;
      total++;
    }
  }
  let percentage = (winrate * 100) / total;
  return percentage;
}
function probabilityToBeatBoss(card, animal, fruit) {
  fetch("./prediction.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      x = JSON.stringify(data);
      y = JSON.parse(x);
      let a = percentageanimal(y, animal);
      let b = percentagefruit(y, fruit);
      let c = percentagecard(y, card);
      let prob = ((a + b + c) / 3).toFixed(2);
      result.innerHTML = prob;
    })
    .catch((error) => console.error("Failed to fetch data:", error));
}
