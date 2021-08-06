import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SONG } from "../queries/fetchSongs";

import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetail = ({ match }) => {
  const { loading, data, error } = useQuery(GET_SONG, {
    //hay que pasar el id:con match.params.id.
    variables: { id: match.params.id.trim() },
    //segun el tutorial se tiene que refechar el query pero lo testie y no fue necesario. Debe ser por la actualizacion de apolloClient. El tutorial es viejo.
    refetchQueries: [{ query: GET_SONG }],
  });

  if (loading) return <h2>Loading...</h2>;
  if (error) return `${error}`;

  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>{data.song.title}</h3>
      <LyricCreate songId={data.song.id} />
      <LyricList songLyric={data.song.lyrics} />
    </div>
  );
};

export default SongDetail;

//Para hacer fetch a una sola cancion debo usar match.params.id en la variables. No es un fetch commun. match.params.id sirver para machear la ruta con el id que estoy pidiendo es muy importante hacer esto cuando se quiere hacer get de un solo id.
