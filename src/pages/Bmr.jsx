import { Link } from "react-router";
import bmr from "./../assets/bmr.png";
import { useState } from "react";
import { Swal } from "sweetalert2";

export default function Bmr() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("male");
    const [bmrValue, setBmr] = useState("0.00");

const handleCalBmrClick = (e) => {
        e.preventDefault();

        if (weight === "") {
            Swal.fire({
                title: 'คำเตือน',
                text: 'กรุณาป้อนน้ำหนัก',
                icon: 'warning',
            });
            return;
        }
        if (height === "") {
            Swal.fire({
                title: 'คำเตือน',
                text: 'กรุณาป้อนส่วนสูง',
                icon: 'warning',
            });
            return;
        }
        if (age === "") {
            Swal.fire({
                title: 'คำเตือน',
                text: 'กรุณาป้อนอายุ',
                icon: 'warning',
            });
            return;
        }
        
        let w = Number(weight);
        let h = Number(height);
        let a = Number(age);
        let bmrResult;

        if (gender === "male") {
            bmrResult = 66.47 + (13.75 * w) + (5.003 * h) - (6.755 * a);
        } else {
            bmrResult = 655.1 + (9.563 * w) + (1.850 * h) - (4.676 * a);
        }

        setBmr(bmrResult.toFixed(2));
    }

const handleResetClick = (e) => {
        e.preventDefault();
        
        setWeight("");
        setHeight("");
        setAge("");
        setGender("male");
        setBmr("0.00");
    }

    return (
        <div className="w-[90%] max-w-127.5 border border-gray-200
            mt-10 md:mt-16 mx-auto rounded-xl p-5 md:p-6
            flex flex-col items-center gap-2 shadow-2xl bg-white">

            <h1 className="text-xl font-bold text-slate-800">
                BMR Calculator
            </h1>

            <h3 className="text-sm text-gray-600">
                คำนวณ BMR
            </h3>

            <img
                src={bmr}
                alt="bmr"
                className="w-36 h-36 object-contain my-2"
            />

            <form className="w-full flex flex-col gap-2">
                <label className="text-xs font-kanit">
                    ป้อนน้ำหนัก (กิโลกรัม)
                </label>
                <input
                    type="number"
                    className="w-full border border-gray-200 p-2 rounded-md
                    outline-none focus:border-indigo-400"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />

                <label className="text-xs font-kanit">
                    ป้อนส่วนสูง (เซนติเมตร)
                </label>
                <input
                    type="number"
                    className="w-full border border-gray-200 p-2 rounded-md
                    outline-none focus:border-indigo-400"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />

                <label className="text-xs font-kanit">
                    ป้อนอายุ (ปี)
                </label>
                <input
                    type="number"
                    className="w-full border border-gray-200 p-2 rounded-md
                    outline-none focus:border-indigo-400"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <fieldset className="font-kanit text-xs mt-1">
                    <legend>เพศ:</legend>

                    <label className="flex items-center gap-1 mt-1">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        ชาย
                    </label>

                    <label className="flex items-center gap-1 mt-1">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        หญิง
                    </label>
                </fieldset>

                <div className="flex gap-2 mt-2">
                    <button
                        type="button"
                        className="flex-1 bg-indigo-600 text-white
                        text-xs font-kanit p-2.5 rounded-md
                        hover:bg-indigo-700 cursor-pointer shadow"
                        onClick={ handleCalBmrClick }
                    >
                        คำนวณ BMR
                    </button>

                    <button
                        type="reset"
                        className="flex-1 bg-red-500 text-white
                        text-xs font-kanit p-2.5 rounded-md
                        hover:bg-red-600 cursor-pointer shadow"
                        onClick={ handleResetClick }
                    >
                        รีเซ็ต
                    </button>
                </div>
            </form>

            <div className="w-full flex justify-center items-center
                mt-1 font-kanit text-sm">
                <p>ค่า BMR ที่คำนวณได้:</p>
                <p className="font-bold text-indigo-600 ml-1">
                    {bmrValue}
                </p>
            </div>

            <Link
                to="/"
                className="w-full text-center bg-gray-200
                hover:bg-gray-300 p-2.5 rounded-md mt-1
                font-kanit text-xs text-gray-800"
            >
                กลับหน้าหลัก
            </Link>
        </div>
    );
}

