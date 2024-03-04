function addSavings() {
    var incomeType = document.getElementById('incomeType').value;
    var incomeAmount = parseFloat(document.getElementById('incomeAmount').value);
    var balanceSavings = parseFloat(document.getElementById('balanceSavings').innerText.replace('₹', '').trim());
    var currentDate = new Date().toLocaleString(); // Get current date and time

    if (!incomeType || !incomeAmount) {
        alert("Please add your income");
    } else {
        balanceSavings += incomeAmount;
        document.getElementById('balanceSavings').innerHTML = `₹ ${balanceSavings}`;
        alert("Amount added successfully");
    }

    // Assuming incometableresult is the correct id for the table
    incometableresult.innerHTML += `<tbody>
        <td class="p-3" >${incomeType}</td>
        <td class="p-3">+${incomeAmount}</td>
        <td class="p-3">${balanceSavings}</td>
        <td class="p-3">${currentDate}</td>
        </tbody>`;
}

let totalExpense=0;
function addExpense() {
    var expenseType = document.getElementById('expenseType').value;
    var expenseValue = parseFloat(document.getElementById('expenseAmount').value);
    var balanceSavings = parseFloat(document.getElementById('balanceSavings').innerText.replace('₹', '').trim());
    var currentDate = new Date().toLocaleString(); // Get current date and time

    if (!expenseType || !expenseValue) {
        alert("Please add your expense");
    } else {
        balanceSavings -= expenseValue;
        document.getElementById('balanceSavings').innerHTML = `₹ ${balanceSavings}`;

        totalExpense += expenseValue;
        document.getElementById('balanceExpense').innerHTML = `₹ ${totalExpense}`;
        alert("Expense added successfully");
    }

    // Assuming expensetableresult is the correct id for the table
    expensetableresult.innerHTML += `<tbody>
        <td class="p-3" >${expenseType}</td>
        <td class="p-3">${expenseValue}</td>
        <td class="p-3" >${balanceSavings}</td>
        <td class="p-3" >${currentDate}</td>
        </tbody>`;
}


document.getElementById('name').innerHTML=`${uname}`;


function logout()
{
    localStorage.clear();
    window.location='./login.html';

}

function reset()
{
    // Clear input fields for income
    document.getElementById('incomeType').value = "";
    document.getElementById('incomeAmount').value = "";

    // Clear input fields for expense
    document.getElementById('expenseType').value = "";
    document.getElementById('expenseAmount').value = "";

    // Reset balance savings and expense to zero
    document.getElementById('balanceSavings').innerHTML = "₹ 0";
    document.getElementById('balanceExpense').innerHTML = "₹ 0";

    // Clear tables for income and expense transactions
    document.getElementById('incometableresult').innerHTML = "";
    document.getElementById('expensetableresult').innerHTML = "";

    // Reset totalExpense variable
    totalExpense = 0;
    
}