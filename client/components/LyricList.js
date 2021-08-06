//66

import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_LIKES } from "../queries/fetchSongs";

const LyricList = ({ songLyric }) => {
  const [likeLyric, { error, loading }] = useMutation(ADD_LIKES);

  if (loading) return <h3>Loading...</h3>;
  if (error) return `error ${error.message}`;

  const handleOnLike = (id) => {
    console.log(id);
    likeLyric({
      variables: { id },
    });
  };

  return (
    <div>
      <ul className='collection'>
        {songLyric.map(({ id, content, likes }) => (
          <ul key={id}>
            <li>{content}</li>
            <i className='material-icons' onClick={() => handleOnLike(id)}>
              thumb_up
            </i>
            {likes}
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default LyricList;
