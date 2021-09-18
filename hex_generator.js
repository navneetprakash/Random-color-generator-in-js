const generateButton = document.getElementById('btn');
const backgroundColor = document.querySelector('.container');
const showColorCodes = backgroundColor.querySelector('.color-codes');

let color = '';

//coping the colors to the clipboard
function copyToClipboard() {
  const copyText = showColorCodes;
  const input = document.createElement('textarea');

  if (!navigator.clipboard) {
    //   use this old method for old browsers

    input.value = copyText.textContent;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    input.remove();
    alert('Copied to clipboard: ' + input.value);
  } else {
    // Modern method for new browsers

    navigator.clipboard
      .writeText(showColorCodes.textContent)
      .then(function () {
        alert('Copied to clipboard: ' + showColorCodes.textContent);
      })
      .catch(function (error) {
        alert(error);
      });
  }
}

// generate a random hex color
function generateRandomHexColor() {
  let selectColorCodes = '0123456789ABCDEF';
  let colorTagStart = '#';
  for (let i = 0; i < 6; i++) {
    colorTagStart += selectColorCodes[Math.floor(Math.random() * 16)];
  }
  color = colorTagStart;
  showColorCodes.textContent = colorTagStart;
  backgroundColor.style.backgroundColor = colorTagStart;
  return colorTagStart;
}

// button click events
generateButton.addEventListener('click', generateRandomHexColor);
showColorCodes.addEventListener('click', copyToClipboard);
