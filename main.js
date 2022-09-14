function cal() {
    kg = document.getElementById("kg").value;
    result = kg * 5.658 + 0.0204;
    result = Math.round(result * 100000) / 100000 / 1000;
    document.getElementById("result").textContent = result;
}