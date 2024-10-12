const diceResult = document.getElementById('diceResult')
const faceCount = document.getElementById('faceCount')
const rollButton = document.getElementById('rollButton')

// Fonction principale pour lancer le dé
// Main function to roll the dice
function rollDice() {
  const faces = parseInt(faceCount.value)
  if (
    isNaN(faces) ||
    faces < DICE_CONFIG.MIN_FACES ||
    faces > DICE_CONFIG.MAX_FACES
  ) {
    alert(
      `Veuillez entrer un nombre de faces valide entre ${DICE_CONFIG.MIN_FACES} et ${DICE_CONFIG.MAX_FACES}.`
    )
    return
  }

  rollButton.disabled = true

  animateDiceRoll(faces, () => {
    // Résultat final
    // Final result
    diceResult.textContent = Math.floor(Math.random() * faces) + 1
    setTimeout(() => {
      rollButton.disabled = false
    }, DICE_CONFIG.BUTTON_DISABLE_TIME)
  })
}

// Écouteurs d'événements
// Event listeners
rollButton.addEventListener('click', rollDice)
faceCount.addEventListener('input', function () {
  validateFaceCount(this)
})
