const Display = ({ calculatedTip, total, people, handleResetBtn }) => {
  const returnCurrencyAmt = (amt) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amt);

  return (
    <div className="display">
      <div className="totals">
        <div className="display-row">
          <div className="display-label">
            <p className="header">Tip Amount</p>
            <p className="unit">/ person</p>
          </div>
          <p className="value">
            {returnCurrencyAmt(
              `${calculatedTip ? calculatedTip / people : "0"}`
            )}
          </p>
        </div>
        <div className="display-row">
          <div className="display-label">
            <p className="header">Total</p>
            <p className="unit">/ person</p>
          </div>
          <p className="value">
            {returnCurrencyAmt(`${total ? total / people : "0"}`)}
          </p>
        </div>
      </div>
      {total ? (
        <button className="btn" onClick={handleResetBtn}>
          Reset
        </button>
      ) : (
        <button className="btn" disabled>
          Reset
        </button>
      )}
    </div>
  );
};

export default Display;
