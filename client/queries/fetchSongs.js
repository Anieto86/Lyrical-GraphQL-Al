import { gql } from "@apollo/client";

export const GET_SONGS = gql`
  {
    songs {
      id
      title
    }
  }
`;

export const DELETE_SONG = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;
