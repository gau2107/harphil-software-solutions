import { Link } from "react-router-dom";

export default function BackToHomeButton() {
  return (
    <div className="text-center">
      <Link to="/" >
        <button className="bg-black text-white uppercase py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-800">
          Back to home
        </button>
      </Link>
    </div>
  )
}