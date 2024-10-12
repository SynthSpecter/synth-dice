// Fonction pour animer le lancer de dé
// Function to animate the dice roll
function animateDiceRoll(faces, callback) {
  let rolls = 0
  const rollInterval = setInterval(() => {
    diceResult.textContent = Math.floor(Math.random() * faces) + 1
    rolls++
    if (rolls >= DICE_CONFIG.ANIMATION_ROLLS) {
      clearInterval(rollInterval)
      callback()
    }
  }, DICE_CONFIG.ANIMATION_INTERVAL)
}
