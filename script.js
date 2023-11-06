let result = '';

function appendToResult(value) {
    result += value;
    document.getElementById("result").value = result;
}

function calculateResult() {
    result = result.replace(/%/g, '/100');
    result = result.replace(/²/g, '**2');
    result = result.replace(/×/g, '*');

    try {
        result = eval(result);
        document.getElementById("result").value = result;
    } catch (error) {
        result = 'Error';
        document.getElementById("result").value = result;
    }
}

function clearResult() {
    result = '';
    document.getElementById("result").value = '';
}
