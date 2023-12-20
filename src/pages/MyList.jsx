import { useSelector } from "react-redux";
import TitleCard from "../components/TitleCard";

const MyListPage = () => {
  const items = useSelector((state) => state.favorite);
  //console.log(items);
  return (
    <div className="content flex flex-col mt-14">
      <h1 className="text-2xl font-bold">My List</h1>
      {items.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {items.map((item) => (
            <TitleCard key={item.id} movie={item} />
          ))}
        </div>
      ) : (
        <p className="flex-grow self-center flex items-center ">Your list is empty, please add some title</p>
      )}
    </div>
  );
};
export default MyListPage;
