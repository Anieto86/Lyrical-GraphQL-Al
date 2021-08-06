import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import { GET_SONGS, DELETE_SONG } from "../queries/fetchSongs";

import "../style/style.css";

const SongList = () => {
  const history = useHistory();
  const { error, loading, data } = useQuery(GET_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG);

  if (loading) return <h3>loading...</h3>;
  if (error) return <h3>error...</h3>;

  const handleSubmit = () => {
    history.push("/songs/new");
  };

  const handleDelete = (id) => {
    deleteSong({
      variables: { id },
      refetchQueries: [{ query: GET_SONGS }],
      //alternativamente se puede conrrer esta sintax que entiendo que es mejor a user refetchQueries: [{ query: GET_SONGS }],
    });
    // .then(() => data.refetch()); // tiene un problema como lo hice
  };

  return (
    <div className='container'>
      <h3>Song List</h3>
      {data.songs.map(({ title, id }, i) => (
        <div key={id} className='collection-item'>
          <li>
            <Link to={`/songs/${id}`}> {title} </Link>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        </div>
      ))}
      <button onClick={handleSubmit}>Create song</button>
    </div>
  );
};

export default SongList;
