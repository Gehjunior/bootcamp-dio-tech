// Definindo o nome e a quantidade de experiência (XP) do herói

let nomeDoHeroi = "BotGit07"; // Substitua "BotGit07" pelo nome do seu herói
let xpHeroi = 5000; // Substitua "Valor" pela quantidade de XP do seu herói

// Estrutura switch para determinar o nível do herói com base na XP

let nivelHeroi;

switch (true) {
  case xpHeroi < 1000:
    nivelHeroi = "Ferro";
    break;
  case xpHeroi >= 1001 && xpHeroi <= 2000:
    nivelHeroi = "Bronze";
    break;
  case xpHeroi >= 2001 && xpHeroi <= 5000:
    nivelHeroi = "Prata";
    break;
  case xpHeroi >= 6001 && xpHeroi <= 7000:
    nivelHeroi = "Ouro";
    break;
  case xpHeroi >= 7001 && xpHeroi <= 8000:
    nivelHeroi = "Platina";
    break;
  case xpHeroi >= 8001 && xpHeroi <= 9000:
    nivelHeroi = "Ascendente";
    break;
  case xpHeroi >= 9001 && xpHeroi <= 10000:
    nivelHeroi = "Imortal";
    break;
  default:
    nivelHeroi = "Radiante";
}

// Exibir a mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelHeroi);
