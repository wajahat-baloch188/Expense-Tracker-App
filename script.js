// Total Budget
let inputAmount = document.getElementById("amount-input");
let inputAmountButton = document.getElementById("setBudgetBtn");
let totalBudget = document.getElementById("total-budget");

inputAmountButton.addEventListener("click", function inputButtonClicked() {
  let inputValue = +inputAmount.value;
  if (inputValue > 0) {
    totalBudget.value = inputValue;
    remainingBalance.value = inputValue;
  } else {
    alert("Please Enter a Valid Amount");
    inputAmount.value = "";
  }
});

// Amount spent info
let totalAmount = document.getElementById("total-amount");
let submitButton = document.getElementById("submit-btn1");
let remainingBalance = document.getElementById("remaining-balance");
let expenses = document.getElementById("expenses");

var category = document.getElementById("Category");
var description = document.getElementById("description");
var paymentDate = document.getElementById("payment-date");
let arr = [];

submitButton.addEventListener("click", function submitButtonClicked() {
  let inputValue = +inputAmount.value; // Assign the current value of inputAmount to inputValue
  let productPrice = +totalAmount.value;
  let categoryData = category.value;
  let descriptionData = description.value;
  let paymentData = paymentDate.value;

  let obj = {
    productPrice: productPrice,
    categoryData: categoryData,
    descriptionData: descriptionData,
    paymentData: paymentData,
  };
  arr.push(obj);

  let inputTotalAmount = +totalAmount.value;

  if (inputValue > 0) {
    remainingBalance.value -= inputTotalAmount;
    expenses.value = Number(expenses.value) + inputTotalAmount;

    totalAmount.value = "";
    category.value = "";
    description.value = "";
    paymentDate.value = "";
  } else {
    alert("Please enter a Budget");
  }
});

// Dates, Category, description
document.getElementById("submit-btn1").addEventListener("click", function () {
  let inputValue = +inputAmount.value;

  var category = document.getElementById("Category").value;
  var paymentDate = document.getElementById("payment-date").value;
  if (category != "" && paymentDate != "" && inputValue >= 0) {
    listBoxes();
  } else {
    alert("please Enter all required Information");
  }
});

// List Display
let listCount = 0;
function listBoxes() {
  let listBox = document.querySelector(".list-box");

  // Create a new list div
  const newList = document.createElement("div");
  newList.className = "list";

  // Create input fields for the list
  let newInput = `
    <input type="text" readonly class="list-input-display" id="list-display-1" value="${
      arr[arr.length - 1].categoryData
    }" />
    <input type="text" readonly class="list-input-display" id="list-display-2" value="${
      arr[arr.length - 1].descriptionData
    }" />
    <input type="number" readonly class="list-input-display" id="list-display-3" value="${
      arr[arr.length - 1].productPrice
    }" />
    <input type="text" readonly class="list-input-display" id="list-display-4" value="${
      arr[arr.length - 1].paymentData
    }" />
    <button class="delete-button">×</button>`;

  newList.innerHTML = newInput;
  listBox.appendChild(newList);

  const deleteButton = newList.querySelector(".delete-button");
  deleteButton.addEventListener("click", function () {
    newList.remove();
    const index = Array.from(listBox.children).indexOf(newList);
    deleteClick(index);
  });
  listCount++;
}

function deleteClick(index) {
  let removedItem = arr.splice(index, 1)[0].productPrice;
  remainingBalance.value = +remainingBalance.value + removedItem;
  expenses.value = +expenses.value - removedItem;
}
