// Function to calculate the maturity amount (supports compound interest)
function calculateMaturityAmount() {
    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const tenure = parseFloat(document.getElementById('tenure').value);
    const frequency = parseInt(document.getElementById('compoundFrequency').value);

    if (isNaN(principle) || isNaN(interestRate) || isNaN(tenure) || principle <= 0 || interestRate <= 0 || tenure <= 0) {
        document.getElementById('result').innerHTML = `<p>Please enter valid positive numbers for all fields.</p>`;
        return;
    }

    // Compound interest formula
    const maturityAmount = principle * Math.pow(1 + interestRate / frequency, frequency * tenure);
    const interestEarned = maturityAmount - principle;

    document.getElementById('result').innerHTML = `
        <p><strong>Principle Amount:</strong> ${principle.toFixed(2)}</p>
        <p><strong>Interest Earned:</strong> ${interestEarned.toFixed(2)}</p>
        <p><strong>Maturity Amount:</strong> ${maturityAmount.toFixed(2)}</p>
    `;
}

// Reset function
function resetCalculator() {
    document.getElementById('principle').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('tenure').value = '';
    document.getElementById('compoundFrequency').value = '1';
    document.getElementById('result').innerHTML = `Your result will include the principle amount, interest earned, and maturity amount here.`;
}


// Event Listeners
document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);
document.getElementById('resetBtn').addEventListener('click', resetCalculator);
