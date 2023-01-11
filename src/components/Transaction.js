import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  let amount;
  let flag;
  const { deleteTransaction } = useContext(GlobalContext);

  if (transaction.amount > 0) {
    amount = `+$${transaction.amount}`;
    flag = "plus";
  } else {
    amount = `-$${Math.abs(transaction.amount)}`;
    flag = "minus";
  }

  return (
    <li className={flag}>
      {transaction.text} <span>{amount}</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
