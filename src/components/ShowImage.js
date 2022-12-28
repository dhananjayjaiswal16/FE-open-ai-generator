import React from 'react'

const ShowImage = ({ imageUrl }) => {
  //console.log("imageUrl in ShowImage", imageUrl);
  return (
    <section class="image">
      <div class="image-container">
        <h2 class="msg"></h2>
        <img src={imageUrl} alt="" id="image" />
      </div>
    </section>
  )
}

export default ShowImage;
