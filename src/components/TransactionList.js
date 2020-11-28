const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li className="plus">
          Camera
          <span>+$100</span>
          <button className="delete-btn">x</button>
        </li>
        <li className="minus">
          Book
          <span>-$300</span>
          <button className="delete-btn">x</button>
        </li>
        <li className="plus">
          Pen
          <span>+$30</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};

export default TransactionList;
