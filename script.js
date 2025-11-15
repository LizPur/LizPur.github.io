function calculate() {
    let anglenew = document.querySelector('#angle').value;
    if (anglenew) {
        let angleradians = anglenew * Math.PI / 180;
        alert(`Результат: ${angleradians.toFixed(2)}`);
    }
}

window.onload = () => {
  document.querySelector('#phusicbutton').addEventListener('click', calculate);
};
