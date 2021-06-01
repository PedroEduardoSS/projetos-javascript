arr = []
let result = document.getElementById("balance");

function adicionarBudget(){
    let budget = document.querySelector("#budget").value;
    arr.push(budget);
}

function adicionarExpenses(){
    let expenses = document.querySelector("#expenses").value;
    arr.push(expenses);
}

function calcular(){
    let amount = arr[0].concat("-",arr[1]);
    result.innerHTML = eval(amount);
}

function limpar(){
    arr.shift();
    arr.shift();
    console.log(arr);
    result.innerHTML = " ";
}