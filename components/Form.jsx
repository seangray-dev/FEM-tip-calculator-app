import { useState } from "react";
import dollarIcon from "../public/assets/images/icon-dollar.svg";
import personIcon from "../public/assets/images/icon-person.svg";

const Form = ({ bill, setBill, people, setPeople, tip, setTip }) => {
  const [isCustomeSelected, setIsCustomeSelected] = useState(false);

  const handleSelectedTip = (e) => {
    setTip(+e.target.value);
    setIsCustomeSelected(e.target.value === "" ? false : true);
  };

  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="bill">
            Bill
          </label>
          <p className="error"></p>
        </div>
        <div className="number-wrapper">
          <input
            type="text"
            className="number-input"
            id="bill"
            value={bill}
            onInput={(e) => setBill(+e.target.value)}
          ></input>
          <img src={dollarIcon} aria-hidden="true" className="icon" />
        </div>
      </div>

      <div className="tip-section">
        <p className="label">Select Tip %</p>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="5"
              id="input1"
            ></input>
            <label className="tip-btn" htmlFor="input1">
              5%
            </label>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="10"
              id="input2"
            ></input>
            <label className="tip-btn" htmlFor="input2">
              10%
            </label>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="15"
              id="input3"
            ></input>
            <label className="tip-btn" htmlFor="input3">
              15%
            </label>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="25"
              id="input4"
            ></input>
            <label className="tip-btn" htmlFor="input4">
              25%
            </label>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="50"
              id="input5"
            ></input>
            <label className="tip-btn" htmlFor="input5">
              50%
            </label>
          </div>
          <div className="custom-wrapper">
            <input
              type="number"
              className="tip-custom number-input"
              placeholder="Custom"
              id="custom"
              onInput={handleSelectedTip}
            />
            <label htmlFor="custom" className="tip-custom-label">
              Custom
            </label>
          </div>
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="people">
            Number Of People
          </label>
          <p className="error">{people === 0 ? "Can't be zero" : ""}</p>
        </div>
        <div className="number-wrapper">
          <input
            type="text"
            className="number-input"
            id="people"
            value={people}
            onInput={(e) => setPeople(+e.target.value)}
          ></input>
          <img src={personIcon} aria-hidden="true" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Form;
