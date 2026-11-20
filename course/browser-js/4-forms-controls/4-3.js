let form = document.forms.calculator;

function calculate(){    
    const initial = Number(form.elements.money.value);              // 10000
    const years = Number(form.elements.months.value) / 12;          // 12 miesięcy → 1 rok
    const interest = Number(form.elements.interest.value) / 100;    // 5 → 0.05

    let result = Math.round(initial * (1 + interest) ** years);
    
    let moneyBefore = document.getElementById('money-before');
    let moneyAfter = document.getElementById('money-after');

    moneyBefore.innerHTML = initial;
    moneyAfter.innerHTML = result;

    let px = result / initial * 100;

    let heightAfter = document.getElementById('height-after');
    heightAfter.style.height = `${px}px`;
}

form.addEventListener('change', calculate);
calculate();