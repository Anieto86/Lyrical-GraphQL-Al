import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import { GET_SONGS, DELETE_SONG } from "../queries/fetchSongs";

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
      variable: { id },
    });
  };

  return (
    <div className='container'>
      <h3>Song List</h3>
      {data.songs.map(({ title, id }, i) => (
        <div key={id}>
          <li>
            {title} {id} <button onClick={handleDelete}>Delete</button>
          </li>
        </div>
      ))}
      <button onClick={handleSubmit(id)}>Create song</button>
    </div>
  );
};

export default SongList;
