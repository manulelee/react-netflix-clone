import { useParams } from "react-router-dom";

const TitlePage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Title Page</h1>
      <p>{id} movie page</p>
    </div>
  );
};
export default TitlePage;
