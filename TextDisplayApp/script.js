document.getElementById('submitButton').addEventListener('click', function() {
  const text = document.getElementById('textInput').value;
  document.getElementById('displayText').innerText = text;
});
