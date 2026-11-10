import { Link } from "react-router";
import bmi from "./../assets/bmi.png";
import { useState } from "react";
import { Swal } from "sweetalert2";

export default function Bmi() {
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [bmiValue, setBmi] = useState("0.00")

    const handleCalculate = (e) => {
        e.preventDefault()

        if (weight === "") {
            Swal.fire({
                title: 'คำเตือน',
                text: 'กรุณาป้อนน้ำหนัก',
                icon: 'warning',
            });
            return
        }

        if (height === "") {
            Swal.fire({
                title: 'คำเตือน',
                text: 'กรุณาป้อนส่วนสูง',
                icon: 'warning',
            });
            return
        }

        let w = Number(weight);
        let h = Number(height);
        let bmiResult = w / ((h / 100) * (h / 100));

        setBmi(bmiResult.toFixed(2));
    }

    const handleResetClick = (e) => {
        e.preventDefault();

        setWeight("");
        setHeight("");
        setBmi("0.00");
    }
       
    return (
        <>
            <div className="w-[50%] border border-gray-300 mt-30 mx-auto rounded-2xl
                      p-10 flex flex-col items-center gap-3 shadow-2xl">
                {/* แสดงหัวเรื่องและรูป  */}
                <h1 className="text-2xl font-bold text-blue-800">BMI Calculator</h1>
                <h3 className="text-xl text-gray-600">คำนวณ BMI</h3>
                <img src={bmi} alt="bmi" className="w-25 h-25" />

                {/* ส่วนแสดงฟอร์มกรอกข้อมูล */}
                <form className="w-full flex flex-col gap-3">
                    <p className="text-lg font-kanit">ป้อนน้ำหนัก (kg):</p>
                    <input type="number" placeholder="น้ำหนัก" value={weight} onChange={(e) => setWeight(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md placeholder:font-Kanit" />
                    <p className="text-lg font-kanit">ป้อนส่วนสูง (cm):</p>
                    <input type="number" placeholder="ส่วนสูง" value={height} onChange={(e) => setHeight(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md placeholder:font-Kanit" />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md
                        mt-3 hover:bg-blue-700 cursor-pointer" onClick={handleCalculate}>

                        คำนวณ
                    </button>
                    <button type="submit" className="bg-gray-300 text-back p-2 rounded-md
                        mt-1 hover:bg-gray-700 cursor-pointer"
                        onClick={handleResetClick}>
                        รีเซ็ต
                    </button>
                </form>

                {/* ส่วนแสดงผลลัพธ์ */}
                <div className="w-full flex justify-center items-center mt-2 font-kanit">
                    <p>ค่า BMI ที่คำนวณได้:</p>
                    <p className="text-xl font-bold text-blue-800 ml-2  font-kanit">
                        {bmiValue}
                    </p>
                </div>

                {/* ส่วนแสดงลิงค์กลับไปหน้าหลัก */}
                <Link to="/" className="w-full text-center bg-gray-300 hover:bg-gray-700 p-2
                                  rounded-md mt-5 font-kanit text-black">
                    กลับไปหน้าหลัก
                </Link>
            </div>
        </>
    )
}