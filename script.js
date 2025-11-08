// variables
const cures = ['Sunshine',
'Take a walk',
'Smile more',
'Yoga',
'Think happy thoughts',
'Affirmations',
'Dieting',
'Positive attitude',
'Drink water',
'Dont eat spices',
'Box breathing',
'Apple cider vinegar',
'Take more vitamins',
'St. Johns Wort'];

// Generate a prompt when the button is clicked
function getRandomPrompt() {
  const randomIndex = Math.floor(Math.random() * cures.length);
  return cures[randomIndex];
}

// Add click event listener to the image button
document.getElementById('pillButton').addEventListener('click', function() {
  const prompt = getRandomPrompt();
  const labelText = document.getElementById('labelText');
  labelText.textContent = prompt;
});