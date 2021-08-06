//66

import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_LIKES } from "../queries/fetchSongs";

const LyricList = ({ songLyric }) => {
  const [likeLyric, { error, loading }] = useMutation(ADD_LIKES);

  if (error) return `error ${error.message}`;

  const handleOnLike = (id, likes) => {
    console.log(id);
    likeLyric({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  };

  return (
    <div>
      <ul className='collection'>
        {songLyric.map(({ id, content, likes }) => (
          <li key={id}>
            {content}
            <div className='vote-box'>
              <i
                className='material-icons'
                onClick={() => handleOnLike(id, likes)}
              >
                thumb_up
              </i>
              {likes}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LyricList;
