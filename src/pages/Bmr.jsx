
import { Link } from "react-router";
import bmr from "./../assets/bmr.png";

export default function Bmr() {
    return (
        <div className="w-[90%] max-w-[510px] border border-gray-200
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
                />

                <label className="text-xs font-kanit">
                    ป้อนส่วนสูง (เซนติเมตร)
                </label>
                <input
                    type="number"
                    className="w-full border border-gray-200 p-2 rounded-md
                    outline-none focus:border-indigo-400"
                />

                <label className="text-xs font-kanit">
                    ป้อนอายุ (ปี)
                </label>
                <input
                    type="number"
                    className="w-full border border-gray-200 p-2 rounded-md
                    outline-none focus:border-indigo-400"
                />

                <fieldset className="font-kanit text-xs mt-1">
                    <legend>เพศ:</legend>

                    <label className="flex items-center gap-1 mt-1">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            defaultChecked
                        />
                        ชาย
                    </label>

                    <label className="flex items-center gap-1 mt-1">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
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
                    >
                        คำนวณ BMR
                    </button>

                    <button
                        type="reset"
                        className="flex-1 bg-red-500 text-white
                        text-xs font-kanit p-2.5 rounded-md
                        hover:bg-red-600 cursor-pointer shadow"
                    >
                        รีเซ็ต
                    </button>
                </div>
            </form>

            <div className="w-full flex justify-center items-center
                mt-1 font-kanit text-sm">
                <p>ค่า BMR ที่คำนวณได้:</p>
                <p className="font-bold text-indigo-600 ml-1">
                    0.00
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

