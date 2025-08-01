import { useState } from "react";
import Header from "./assets/components/Header/Header";
import InputNumbers from "./assets/components/InputNumbers/InputNumbers";
import TableResults from "./assets/components/TableResults/TableResults";

function App() {
  const [inputs, setInputs] = useState({
    firstContribution: 10000,
    monthlyContribution: 500,
    yearOfRepayment: 5,
  });

  function handleInputs(identifier, inputNumbers) {
    setInputs((prevState) => {
      return {
        ...prevState,
        [identifier]: +inputNumbers,
      };
    });
  }

  return (
    <>
      <Header />
      <InputNumbers inputsData={inputs} onChange={handleInputs} />
      <TableResults dataInput={inputs} />
    </>
  );
}

export default App;
