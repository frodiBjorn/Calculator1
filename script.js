const num1 = +document.getElementById('num1').value,
    num2 = +document.getElementById('num2').value,
    btnPlus = document.getElementById('btnPlus'),
    btnMinus = document.getElementById('btnMinus'),
    btnMul = document.getElementById('btnMul'),
    btnDivision = document.getElementById('btnDivision'),
    out = document.getElementById('out');


function sum() {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    const result = num1 + num2;
    out.textContent = result;
};

function raznost() {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    const result = num1 - num2;
    out.textContent = result;
};

function mul() {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    const result = num1 * num2;
    out.textContent = result;
};

function divorse() {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    const result = num1 / num2;
    out.textContent = result;
};
