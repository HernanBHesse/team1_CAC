//Router DOM
import {useParams} from "react-router-dom";

//Components
import { ContentContainer } from "../../components";

const Shops = () => {

    const titulo = useParams();

  return (
    <>
      <ContentContainer titleSection={titulo.tiendas} />
    </>
  );
};

export default Shops;