import { useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import { useDispatch, useSelector } from 'react-redux';
import { insert } from "../store/CharacterSlice";
import Header from "../components/Header";

export default function Characters() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.characters.list);
  useEffect(() => {
    !list.length &&
      getList();
  }, [])

  const getList = async () => {
    const resp = await fetch("https://rickandmortyapi.com/api/character");
    const data = await resp.json();
    dispatch(insert(data.results));
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {list.length > 0 && list.map((data) => {
          return (
            <CharacterCard key={data.id} {...data} />
          )
        })}
      </div>
    </div>
  )
}