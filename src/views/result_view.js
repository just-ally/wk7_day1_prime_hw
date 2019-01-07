const PubSub = require('../helpers/pub_sub.js')

const ResultView = function(){

};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('PrimeChecker:result-checked', (event) => {
    const checkedNumber = event.detail;
    this.displayResult(checkedNumber)
  });
}

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `Is your number a prime number? ${result}!`;
}

module.exports = ResultView;
