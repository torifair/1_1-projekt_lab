(function () {
  const ex1Button = document.getElementById('ex1_button');
  const ex1Content = document.getElementById('ex1_content');

  ex1Button.addEventListener('click', function() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(i);
    }
    const resultString = numbers.join(', ');

    ex1Content.textContent = resultString;
  });

})();