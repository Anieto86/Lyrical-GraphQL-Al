import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import { GET_SONGS, ADD_SONG } from "../queries/fetchSongs";

const CreateSong = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [addSong, { loading, error }] = useMutation(ADD_SONG);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong({
      variables: { title },
      refetchQueries: [{ query: GET_SONGS }],
    }).then(() => history.push("/"));
  };

  return (
    <div>
      <h3>Create a new Song</h3>
      <Link to='/'>BACK</Link>
      <form onSubmit={handleSubmit}>
        <label>Song Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </form>
    </div>
  );
};

export default CreateSong;
