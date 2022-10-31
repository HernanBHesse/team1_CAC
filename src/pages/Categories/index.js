//Router DOM
import {useParams} from "react-router-dom";

//Components
import { ContentContainer } from "../../components";

const Categories = () => {

    const titulo = useParams();

  return (
    <>
      <ContentContainer titleSection={titulo.categorias} />
    </>
  );
};

export default Categories;
