import React, { useState } from "react";
import { ADD_LYRIC } from "../queries/fetchSongs";
import { useMutation } from "@apollo/client";

const LyricCreate = ({ songId }) => {
  const [content, setContent] = useState("");
  const [addLyricToSong, { error, loading }] = useMutation(ADD_LYRIC);

  if (loading) return <h3>Loading..</h3>;
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    addLyricToSong({
      variables: {
        content,
        songId,
      },
    }).then(() => setContent(""));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a Lyric</label>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
      </form>
    </div>
  );
};

export default LyricCreate;
