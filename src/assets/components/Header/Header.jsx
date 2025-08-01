import redCar from "../../../../public/images/960x0.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={redCar} alt="" />
      <h2>Cars on loan</h2>
    </div>
  );
}
