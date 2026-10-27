import { Link } from "react-router";
import car from "./../assets/car.png";

export default function Car() {
  return (
    <div className="w-[50%] border-1 border-gray-300 mt-30 mx-auto rounded-2xl
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
          className="border-1 border-gray-300 p-2 rounded-md"
        />

        <label htmlFor="car-price" className="text-lg font-kanit">
          ราคารถ (บาท)
        </label>
        <input
          id="car-price"
          type="number"
          min="1"
          placeholder=""
          className="border-1 border-gray-300 p-2 rounded-md"
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
          className="border-1 border-gray-300 p-2 rounded-md"
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
          defaultValue="24"
          className="border-1 border-gray-300 p-2 rounded-md"
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
          >
            คำนวณ
          </button>
          <button
            type="reset"
            className="flex-1 bg-gray-300 text-black p-2 rounded-md
                       mt-3 hover:bg-gray-700 hover:text-white cursor-pointer"
          >
            ล้างข้อมูล
          </button>
        </div>
      </form>

      <div className="w-full flex justify-center items-center mt-2 font-kanit">
        <p>ผ่อนชำระต่อเดือน:</p>
        <p className="text-xl font-bold text-blue-800 ml-2 font-kanit">
          0.00 บาท
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