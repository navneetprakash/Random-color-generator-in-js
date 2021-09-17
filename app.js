const generateButton = document.getElementById('btn');
const backgroundColor = document.querySelector('.container');
const showColorCodes = backgroundColor.querySelector('.color-codes');

let randomColor;

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

// button click event for generating new color codes
generateButton.addEventListener('click', function () {
  let colors = [];

  for (let i = 0; i < 3; i++) {
    colors.push(Math.floor(Math.random() * 255));
  }
  randomColor = 'rgb(' + colors.join(',') + ')';
  backgroundColor.style.backgroundColor = randomColor;
  showColorCodes.textContent = randomColor;
});

showColorCodes.addEventListener('click', copyToClipboard);
