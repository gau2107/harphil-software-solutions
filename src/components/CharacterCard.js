import { Link } from "react-router-dom";

export default function CharacterCard({ id, name, status, image, location }) {
  return (
    <Link to={`character/${id}`} className="mb-4">
      <div className="bg-white rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out relative h-full">
        <span className={`absolute top-2 right-2  text-white px-2 py-1 rounded-full capitalize
      ${status === 'Alive' ? 'bg-green-500' : status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'}`}>{status}</span>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="mb-2">
            <span className="text-black">Name: </span>
            <span className="text-gray-700 mb-2">{name}</span>
          </div>
          <div className="mb-2">
            <span className="text-black">Location: </span>
            <span className="text-gray-700 mb-2">{location?.name || '-'}</span>
          </div>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-green-900 to-green-500 animate-fadeIn absolute bottom-0"></div>
      </div >
    </Link>
  )
}