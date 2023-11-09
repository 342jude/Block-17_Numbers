class Numbers {
  constructor() {
    this.numbers = [];
    this.intervalId = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      this.numbers.push(randomNumber);
      this.render();
      //check if there are 10 nummbers, if so, clear the interval
      if (this.numbers.length === 10) {
        // this.clearInterval();
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  // update the unordered list with the new number.
  render() {
    const numbersList = document.getElementById("numbers");
    numbersList.innerHTML = "";
    this.numbers.forEach((number) => {
      const listItem = document.createElement("li");
      listItem.textContent = number;
      numbersList.appendChild(listItem);
    });
  }
}
const s2 = new Numbers();
console.log(s2);

