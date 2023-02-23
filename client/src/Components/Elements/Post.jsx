import React from 'react'
import pic1 from '../../assets/2.jpg'



function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src={pic1} alt="" />
      </div>
      <div className="texts">
        <h2>Eco flow teases fullhouse battery backup coming later this year</h2>
        <p className="info">
          <a className="author">Richard Jeremy</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough, the
          next logical step is to find a random paragraph
        </p>
      </div>
    </div>
  );
}

export default Post