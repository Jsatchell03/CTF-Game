const button = document.getElementById('myButton');
const clickCount = document.getElementById('clickCount');
console.log("Script.js working")

// button.addEventListener('click', function() {
//   axios.post('/increment')
//     .then(function(response) {
//       clickCount.textContent = response.data.count;
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });

// const inputText = document.getElementById('inputText');
// const flipButton = document.getElementById('flipButton');
// const result = document.getElementById('result');

// flipButton.addEventListener('click', function() {
//   const text = inputText.value;
//   axios.post('/flip_case', { text: text })
//     .then(function(response) {
//       result.textContent = response.data.flipped_text;
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });
// 🏁 Start Game (Capture the Flag)
// const startGameButton = document.getElementById('startGameButton');
// const gameOutputArea = document.getElementById('gameOutputArea');

// startGameButton.addEventListener('click', function () {
//   axios.post('/play_game')
//     .then(function (response) {
//       gameOutputArea.textContent = response.data.output;
//     })
//     .catch(function (error) {
//       console.log(error);
//       gameOutputArea.textContent = "There was an error starting the game.";
//     });
// });

document.getElementById('startGameButton').addEventListener('click', function() {
    // Show loading message
    document.getElementById('gameOutputArea').innerText = "Loading game...";
    
    // Make AJAX request to start the game
    fetch('/play_game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Replace newline characters with HTML line breaks for proper display
        const formattedOutput = data.game_output.replace(/\n/g, '<br>');
        document.getElementById('gameOutputArea').innerHTML = formattedOutput;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('gameOutputArea').innerText = "Error starting game. Please try again.";
    });
});

// const gbutton = document.getElementById('myGameButton');
// const gameOutput = document.getElementById('gameOutput');

// gbutton.addEventListener('click', function() {
//   axios.post('/increment2')
//     .then(function(response) {
//       gameOutput.textContent = response.data.gcount;
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });