import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardComponent.css';
import op from './img/op.jpg';
import ns from './img/ns.webp';
import jk from './img/jk.png';
import tr from './img/tr.jpg';

function CardComponent() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src={op}  alt="Image 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">One Piece</h5>
              <p className="card-text">Gold Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world.  <br />Aired: Oct 20, 1999 <br />Status: Currently Airing <br />Genres: Action, Adventure, Comedy,.</p>
              <a href="https://aniwatch.to/one-piece-100" className="btn btn-primary">Watch Now</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={ns} alt="Image 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Naruto Shippuden</h5>
              <p className="card-text">It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world. <br />Aired: Feb 15, 2007 <br />Status: Finished Airing <br />Genres: Action, Adventure, Comedy, Martial Arts, Shounen, Super Power</p>
              <a href="https://aniwatch.to/naruto-shippuden-355?ref=search" className="btn btn-primary">Watch Now</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={jk} alt="Image 3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Jujutsu Kaisen</h5>
              <p className="card-text">Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. <br />Aired: Jul 6, 2023 <br />Status: Currently Airing <br />Genres: Action, Fantasy, School, Shounen</p>
              <a href="https://aniwatch.to/jujutsu-kaisen-2nd-season-18413" className="btn btn-primary">Watch Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={tr} alt="Image 4" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Tokyo Revengers</h5>
              <p className="card-text">The third season of Tokyo Revengers. With a future where Toman has been destroyed by Mikey's twisted ideas and Takemichi returning to the past, he decides to become stronger in order to stop Kisaki's plans. <br />Aired: Oct 4, 2023 <br />Status: Currently Airing <br />Genres: Action, Drama, Romance, Supernatural</p>
              <a href="https://aniwatch.to/tokyo-revengers-tenjiku-hen-18575" className="btn btn-primary">Watch Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
