import "./InputNumbers.css";

export default function InputNumbers({ inputsData, onChange }) {
  return (
    <div className="inputs">
      <div className="input">
        <label htmlFor="">First contribution</label>
        <input
          type="number"
          required
          value={inputsData.firstContribution}
          onChange={(event) =>
            onChange("firstContribution", event.target.value)
          }
        />
      </div>
      <div className="input">
        <label htmlFor="">Monthly contribution</label>
        <input
          type="number"
          required
          value={inputsData.monthlyContribution}
          onChange={(event) =>
            onChange("monthlyContribution", event.target.value)
          }
        />
      </div>
      <div className="input">
        <label htmlFor="">How long(years repayment) </label>
        <input
          type="number"
          required
          value={inputsData.yearOfRepayment}
          onChange={(event) => onChange("yearOfRepayment", event.target.value)}
        />
      </div>
    </div>
  );
}
