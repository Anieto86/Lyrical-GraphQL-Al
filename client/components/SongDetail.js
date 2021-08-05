import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SONG } from "../queries/fetchSongs";

const SongDetail = ({ match }) => {
  const { loading, data, error } = useQuery(GET_SONG, {
    //hay que pasar el id:con match.params.id.
    variables: { id: match.params.id },
  });
  console.log(match);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error...</h2>;

  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>{data.song.title}</h3>
      <h3>{data.song.id}</h3>
      <h3>{match.params.id}</h3>
    </div>
  );
};

export default SongDetail;

//Para hacer fetch a una sola cancion debo usar match.params.id en la variables. No es un fetch commun. match.params.id sirver para machear la ruta con el id que estoy pidiendo es muy importante hacer esto cuando se quiere hacer get de un solo id.
