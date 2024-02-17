import { useDispatch, useSelector } from "react-redux"
import { getSingleCharacter, setSingleCharacter } from "../store/CharacterSlice";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import Swal from "sweetalert2";
import BackToHomeButton from "../components/common/BackToHomeButton";

export default function CharacterDetail() {

  const navigate = useNavigate();
  const { selectedCharacter, isError } = useSelector((state) => state.characters);

  const { id } = useParams();
  const dispatch = useDispatch();

  // fetch character from global state
  useEffect(() => {
    dispatch(getSingleCharacter(id));
  }, []);

  useEffect(() => {
    if (isError)
      if (!selectedCharacter || !selectedCharacter.id) {
        getCharacter();
      }
  }, [isError]);

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
        timer: 1500
      }).then(() => {
        navigate("/");
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
            <img src={selectedCharacter.image} alt="Profile" className="w-64 h-64 rounded-full mb-4" />
            <h2 className="text-xl font-semibold uppercase">{selectedCharacter.name}</h2>
          </div>


          <div className="mb-4">
            <div className="mb-1">
              <span className="text-gray-600 font-bold">Status: </span>
              <span className="text-bold">{selectedCharacter.status}</span>
            </div>

            <div className="mb-1">
              <span className="text-gray-600 font-bold">Species: </span>
              <span className="text-bold">{selectedCharacter.species}</span>
            </div>
            <div className="mb-1">
              <span className="text-gray-600 font-bold">Last location found: </span>
              <span className="text-bold">{selectedCharacter.location?.name}</span>
            </div>
            <div className="mb-1">
              <span className="text-gray-600 font-bold">Gender: </span>
              <span className="text-bold">{selectedCharacter.gender} </span>
            </div>
            <div className="mb-8">
              <span className="text-gray-600 font-bold">First seen in: </span>
              <span>{selectedCharacter.origin?.name}</span>
            </div>
          </div>
          <BackToHomeButton />
        </div>
      </div>
    </div>
  )
}