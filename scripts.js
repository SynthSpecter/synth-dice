const diceResult = document.getElementById('diceResult')
const faceCount = document.getElementById('faceCount')
const rollButton = document.getElementById('rollButton')

function rollDice() {
  const faces = parseInt(faceCount.value)
  if (isNaN(faces) || faces < 2 || faces > 100) {
    alert('Veuillez entrer un nombre de faces valide entre 2 et 100.')
    return
  }

  // Animation de "roulement"
  let rolls = 0
  const rollInterval = setInterval(() => {
    diceResult.textContent = Math.floor(Math.random() * faces) + 1
    rolls++
    if (rolls >= 10) {
      clearInterval(rollInterval)
      // Résultat final
      diceResult.textContent = Math.floor(Math.random() * faces) + 1
    }
  }, 50)

  rollButton.disabled = true
  setTimeout(() => {
    rollButton.disabled = false
  }, 600)
}

rollButton.addEventListener('click', rollDice)

// Validation de l'entrée
faceCount.addEventListener('input', function () {
  let value = parseInt(this.value)
  if (isNaN(value) || value < 2) {
    this.value = 2
  } else if (value > 100) {
    this.value = 100
  }
})
