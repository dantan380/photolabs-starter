import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [like, setLike] = useState(false);
  const liked = () => {setLike(!like)};
  return (
    <div className="photo-list__fav-icon" onClick={liked}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={like}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;