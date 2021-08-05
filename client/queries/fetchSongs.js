import { gql } from "@apollo/client";

export const GET_SONGS = gql`
  {
    songs {
      id
      title
    }
  }
`;

export const DELETE_SONGS = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;
