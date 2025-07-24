import "./App.css";
import React from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
export default class App extends React.Component {
  // Create state for the expenses here
  constructor() {
    super();
    this.state = {
      transactions: [],
      totalAmount: "",
      income: "",
      expense: "",
    };
  }

  addTransaction = (newTransaction) => {
    const updatedTransactions = [...this.state.transactions, newTransaction];
    let newTotalAmount = Number(this.state.totalAmount);
    let newTransactionAmount = Number(newTransaction.amount);
    let newIncome = Number(this.state.income);
    let newExpense = Number(this.state.expense);
    if (newTransactionAmount > 0) {
      newIncome += newTransactionAmount;
    } else {
      newExpense += Math.abs(newTransactionAmount);
    }
    newTotalAmount += newTransactionAmount;

    this.setState({
      transactions: updatedTransactions,
      totalAmount: newTotalAmount,
      expense: newExpense,
      income: newIncome,
    });
  };

  render() {
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          {/* Render expense form here */}
          <ExpenseForm addTransaction={this.addTransaction} />
          <div className="expenseContainer">
            {/* Render Expense Info here
            Render Expense List here */}
            <ExpenseInfo
              amount={this.state.totalAmount}
              expense={this.state.expense}
              income={this.state.income}
            />
            <ExpenseList list={this.state.transactions} />
          </div>
        </div>
      </>
    );
  }
}
