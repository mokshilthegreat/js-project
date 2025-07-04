//Q-1
function totalExpense(expenses) {
  let sum = 0;
  for (let i = 0; i < expenses.length; i++) {
    sum += expenses[i];
  }
  return sum;
}
const weeklyExpenses = [200, 150, 100, 350, 50];
const total = totalExpense(weeklyExpenses);
console.log(`Total expense: ₹${total}`); 

//Q-2
function highestTemp(temps) {
  return Math.max(temps);
}
console.log(highestTemp([32, 35, 30, 31, 33, 36, 34]));

//Q-3