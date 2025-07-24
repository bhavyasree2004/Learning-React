import React from "react";
import styles from "./ExpenseForm.module.css";
import { useState } from "react";
export default function ExpenseForm(props) {
  // Create state or ref for the inputs here
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      text: text,
      amount: amount,
    };
    props.addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={handleText}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        value={amount}
        onChange={handleAmount}
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
}
