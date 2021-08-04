import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import { GET_SONGS, DELETE_SONG } from "../queries/fetchSongs";

const SongList = () => {
  const history = useHistory();
  const { error, loading, data } = useQuery(GET_SONGS);

  if (loading) return <h3>loading...</h3>;
  if (error) return <h3>error...</h3>;

  const handleSubmit = () => {
    history.push("/songs/new");
  };

  return (
    <div className='container'>
      <h3>Song List</h3>
      {data.songs.map(({ title, id }, i) => (
        <div key={id}>
          <li>
            {title} {id}
          </li>
        </div>
      ))}
      <button onClick={handleSubmit}>Create song</button>
    </div>
  );
};

export default SongList;

// const [deleteSong] = useMutation(DELETE_SONG, {
//   update(cache, {data: {deleteSong}}){
//     const {songs} = cache.readQuery({query: GET_SONGS})
//     cache.writeQuery({
//       query: GET_SONGS,
//       data: {songs: songs.concat([deleteSong])}
//     })
//   }
// });

// const onDeletSong = (id) => {
// deleteSong({
//     variables: {id}
//   })
// }

// {!loading
//   ? (<>
//       <ul className='collection'>
//       {data.songs.map(({id, title}) => (
//           <li key={id} className='collection-item'>
//             <Link to={`/song/${id}`}>
//               {title}
//             </Link>
//             <i className='material-icons' onClick={() => onDeletSong(id)}>
//               delete
//             </i>
//           </li>))
//         }
//       </ul>
//       <Link to='/songs/new' className='btn-floating btn-large red right'>
//         <i className='material-icons'>add</i>
//       </Link>
//     </>)
//   : (<div>
//     Loading...
//   </div>)}
