function changeMoney() {
    var outputMoney = 0;
    var inputMoney = parseInt(document.getElementById("inputMoney").value);
    var fromMoney = document.getElementById("fromMoney").value;
    console.log(fromMoney);
    var toMoney = document.getElementById("toMoney").value;
    console.log(toMoney);
    if(fromMoney=="VND" && toMoney=="USD")
    document.getElementById("outputMoney").value = inputMoney/23000;
    if(fromMoney=="VND" && toMoney=="AUD")
    document.getElementById("outputMoney").value = inputMoney/15000;
    if(fromMoney=="AUD" && toMoney=="USD")
    document.getElementById("outputMoney").value = inputMoney*15000/23000;
    if(fromMoney=="AUD" && toMoney=="VND")
    document.getElementById("outputMoney").value = inputMoney*15000;
    if(fromMoney=="USD" && toMoney=="VND")
    document.getElementById("outputMoney").value = inputMoney*23000;
    if(fromMoney=="USD" && toMoney=="AUD")
    document.getElementById("outputMoney").value = inputMoney*23000/15000;
}

