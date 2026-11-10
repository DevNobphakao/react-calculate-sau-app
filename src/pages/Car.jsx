import { Link } from "react-router";
import car from "./../assets/car.png";
import { useState } from "react";
import { Swal } from "sweetalert2";

export default function Car() {
  const [calculatorName, setCalculatorName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carInterest, setCarInterest] = useState("");
  const [downPayment, setDownPayment] = useState(15);
  const [carTerm, setCarTerm] = useState(24);
  const [installment, setInstallment] = useState("0.00");

  const handleCalculateClick = (e) => {
    e.preventDefault();

    if (calculatorName === "") {
      Swal.fire({
        title: "คำเตือน",
        text: "กรุณาป้อนชื่อผู้คำนวณ",
        icon: "warning",
      });
      return;
    }

    if (carPrice === "") {
      Swal.fire({
        title: "คำเตือน",
        text: "กรุณาป้อนราคารถ",
        icon: "warning",
      });
      return;
    }

    if (carInterest === "") {
      Swal.fire({
        title: "คำเตือน",
        text: "กรุณาป้อนดอกเบี้ยต่อปี",
        icon: "warning",
      });
      return;
    }

    if (downPayment === "") {
      Swal.fire({
        title: "คำเตือน",
        text: "กรุณาเลือกเงินดาวน์",
        icon: "warning",
      });
      return;
    }

    if (carTerm === "") {
      Swal.fire({
        title: "คำเตือน",
        text: "กรุณาเลือกจำนวนเดือนที่ผ่อน",
        icon: "warning",
      });
      return;
    }

    let price = Number(carPrice);
    let interest = Number(carInterest);
    let downPaymentAmount = (downPayment / 100) * price;
    let loanAmount = price - downPaymentAmount;
    let monthlyInterestRate = interest / 100 / 12;
    let numberOfPayments = Number(carTerm);

    if (monthlyInterestRate === 0) {
      let monthlyPayment = loanAmount / numberOfPayments;
      setInstallment(monthlyPayment.toFixed(2));
    } else {
      let monthlyPayment =
        (loanAmount *
          monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      setInstallment(monthlyPayment.toFixed(2));
    }

  };

  const handleResetClick = (e) => {
    e.preventDefault();
    setCalculatorName("");
    setCarPrice("");
    setCarInterest("");
    setDownPayment(15);
    setCarTerm(24);
    setInstallment("0.00");
  };

  return (
    <div className="w-[50%] border border-gray-300 mt-30 mx-auto rounded-2xl
                    p-10 flex flex-col items-center gap-3 shadow-2xl">
      <h1 className="text-2xl font-bold text-blue-800">
        Car Installment Calculator
      </h1>
      <h3 className="text-xl text-gray-600">คำนวณ Car Installment</h3>
      <img src={car} alt="รถยนต์" className="w-32 h-32 object-contain" />

      <form className="w-full flex flex-col gap-3">
        <label htmlFor="calculator-name" className="text-lg font-kanit">
          ชื่อผู้คำนวณ
        </label>
        <input
          id="calculator-name"
          type="text"
          placeholder=""
          className="border border-gray-300 p-2 rounded-md"
          value={calculatorName}
          onChange={(e) => setCalculatorName(e.target.value)}
        />

        <label htmlFor="car-price" className="text-lg font-kanit">
          ราคารถ (บาท)
        </label>
        <input
          id="car-price"
          type="number"
          min="1"
          placeholder=""
          className="border border-gray-300 p-2 rounded-md"
          value={carPrice}
          onChange={(e) => setCarPrice(e.target.value)}
        />
        <label htmlFor="car-interest" className="text-lg font-kanit">
          ดอกเบี้ยต่อปี (%)
        </label>
        <input
          id="car-interest"
          type="number"
          min="0"
          step="any"
          placeholder=""
          className="border border-gray-300 p-2 rounded-md"
          value={carInterest}
          onChange={(e) => setCarInterest(e.target.value)}
        />

        <fieldset className="font-kanit">
          <legend className="text-lg">เงินดาวน์ (%)</legend>
          <div className="flex flex-wrap gap-x-12 gap-y-2">
            {[15, 20, 25, 30, 35].map((rate) => (
              <label key={rate} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="down-payment"
                  value={rate}
                  defaultChecked={rate === 15}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                />
                {rate}%
              </label>
            ))}
          </div>
        </fieldset>

        <label htmlFor="car-term" className="text-lg font-kanit">
          จำนวนเดือนที่ผ่อน
        </label>
        <select
          id="car-term"
          value={carTerm}
          onChange={(e) => setCarTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="24">24 เดือน</option>
          <option value="36">36 เดือน</option>
          <option value="48">48 เดือน</option>
          <option value="60">60 เดือน</option>
          <option value="72">72 เดือน</option>
          <option value="84">84 เดือน</option>
        </select>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="flex-1 bg-blue-500 text-white p-2 rounded-md
                       mt-3 hover:bg-blue-700 cursor-pointer"
            onClick={handleCalculateClick}
          >
            คำนวณ
          </button>
          <button
            type="reset"
            className="flex-1 bg-gray-300 text-black p-2 rounded-md
                       mt-3 hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={handleResetClick}
          >
            ล้างข้อมูล
          </button>
        </div>
      </form>

      <div className="w-full flex justify-center items-center mt-2 font-kanit">
        <p>ผ่อนชำระต่อเดือน:</p>
        <p className="text-xl font-bold text-blue-800 ml-2 font-kanit">
          {installment}
        </p>
      </div>

      <Link
        to="/"
        className="w-full text-center bg-gray-300 hover:bg-gray-700 p-2
                   rounded-md mt-5 font-kanit text-black"
      >
        กลับหน้าหลัก
      </Link>
    </div>
  );
}