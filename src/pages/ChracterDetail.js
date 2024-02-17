import { useDispatch, useSelector } from "react-redux"
import { getSingleCharacter, setSingleCharacter } from "../store/CharacterSlice";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function CharacterDetail() {

  const character = useSelector((state) => state.characters.selectedCharacter);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCharacter(id));
  }, []);

  useEffect(() => {
    if (!character || !character.id) {
      getCharacter();
    }
  }, []);

  const getCharacter = async () => {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await resp.json();
    if (data.error)
      Swal.fire({
        position: "top-end",
        icon: "error",
        toast: true,
        title: data.error,
        showConfirmButton: false,
        heightAuto: false,
        timer: 2500
      });
    else
      dispatch(setSingleCharacter(data));
  }



  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 m-2">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="flex flex-col items-center mb-6">
            <img src={character.image} alt="Profile" className="w-64 h-64 rounded-full mb-4" />
            <h2 className="text-xl font-semibold uppercase">{character.name}</h2>
          </div>


          <div className="mb-4">
            <div className="mb-1">
              <span className="text-gray-600 font-bold">Status: </span>
              <span className="text-bold">{character.status}</span>
            </div>

            <div className="mb-1">
              <span className="text-gray-600 font-bold">Species: </span>
              <span className="text-bold">{character.species}</span>
            </div>
            <div className="mb-1">
              <span className="text-gray-600 font-bold">Last location found: </span>
              <span className="text-bold">{character.location?.name}</span>
            </div>
            <div className="mb-1">
              <span className="text-gray-600 font-bold">Gender: </span>
              <span className="text-bold">{character.gender} </span>
            </div>
            <div className="mb-8">
              <span className="text-gray-600 font-bold">First seen in: </span>
              <span>{character.origin?.name}</span>
            </div>
          </div>
          <div className="text-center">
            <Link to="/" >
              <button className="bg-black text-white uppercase py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-gray-800">
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}