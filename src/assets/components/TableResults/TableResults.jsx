import { calculatePlan, formatter } from "../../util/calculations";
import "./TableResults.css";

export default function TableResults({ dataInput }) {
  const result = calculatePlan(dataInput);
  console.log(result);

  return (
    <table>
      <thead className="table">
        <tr>
          <th>| Year </th>
          <th>| Interest </th>
          <th>| Year contribution </th>
          <th>| Whole plan(Interest) </th>
          <th>| Whole plan without first contribution |</th>
        </tr>
      </thead>
      <tbody>
        {result.map((yearData) => {
          return (
            <tr key={yearData.yearOfRepaymentResult}>
              <td className="center"> {yearData.yearOfRepaymentResult} </td>
              <td className="center"> {yearData.interestResult} </td>
              <td className="center">
                {" "}
                {formatter.format(yearData.yearContributionResult)}{" "}
              </td>
              <td className="center">
                {" "}
                {formatter.format(yearData.wholePlanInterestResult)}{" "}
              </td>
              <td className="center">
                {" "}
                {formatter.format(
                  yearData.wholePlanWithoutFirstContributionResult
                )}{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
