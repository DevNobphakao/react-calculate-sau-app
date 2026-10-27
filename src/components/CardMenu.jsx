

export default function CardMenu({ pImage, pTitle, pDescription }) {
    return (

        <div className="w-62.5 border-2 border-gray-300 rounded-2xl
            flex flex-col items-center p-5 gap-2">
            <img src={pImage} alt="BMI" className="w-25" />
            <p className="font-bold font-kanit">
                {pTitle}
            </p>

            <p className="font-Itim text-sm text-gray-500 text-center">
                {pDescription}
            </p>

        </div>

    )
}
