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

//Podemos adicionar extra query a un query anterior en este caso agrefue lyrics que fue realizado para la mutacion ADD_LYRIC
export const GET_SONG = gql`
  query GetSong($id: ID!) {
    song(id: $id) {
      title
      id
      lyrics {
        id
        content

        likes
      }
    }
  }
`;

//pequenio detalle , likes debe ser paso en GET_SONG para que luego pase a
//songDetail y luego lo pase como prop en songLyric  y pueda ser desectructurado y visualizado en <LyricList/>

export const ADD_LYRIC = gql`
  mutation AddLyric($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;

export const ADD_LIKES = gql`
  mutation AddLikes($id: ID) {
    likeLyric(id: $id) {
      id
      likes
      content
    }
  }
`;
