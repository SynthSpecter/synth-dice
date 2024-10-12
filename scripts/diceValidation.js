// Validation de l'entrée du nombre de faces
// Validation of the face count input
function validateFaceCount(input) {
  let value = parseInt(input.value)
  if (isNaN(value) || value < DICE_CONFIG.MIN_FACES) {
    input.value = DICE_CONFIG.MIN_FACES
  } else if (value > DICE_CONFIG.MAX_FACES) {
    input.value = DICE_CONFIG.MAX_FACES
  }
}
