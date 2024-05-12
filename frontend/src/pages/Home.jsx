import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../asserts/image.jpg';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="container" style={{ marginTop: '5rem' }}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card h-100 border-0">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1600965962102-9d260a71890d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D" alt="Card image cap" style={{ borderRadius: '2rem'  }}/>
            <div><h3>Swimming facilities</h3></div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0">
          <img className="card-img-top" src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFkbWludG9ufGVufDB8fDB8fHww" alt="Card image cap" style={{ borderRadius: '2rem'  }} />
          <div><h3>Badminton facilities</h3></div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0">
          <img className="card-img-top" src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D" alt="Card image cap" style={{ borderRadius: '2rem'  }} />
          <div><h3>Cricket facilities</h3></div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-0">
          <img className="card-img-top" src="https://images.unsplash.com/photo-1553005746-9245ba190489?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZvbGxleWJhbGx8ZW58MHx8MHx8fDA%3D" alt="Card image cap" style={{ borderRadius: '2rem'  }} />
          <div><h3>Volleyball facilities</h3></div>
          </div>
        </div>
      </div>

      <Link to="/book-resource" className="btn btn-primary" style={{ marginBottom: '2rem' }}>Book Facility</Link>

      <h2 style={{ marginTop: '2rem' }}>Available Resources</h2>

      <div className="container" style={{ marginTop: '5rem' }}>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-5 g-4">
          <div className="col">
            <div className="card border-0" style={{ width: '16rem' }}>
            <Link to="/book-resource">
              <img className="card-img-top" src="https://cdn.pixabay.com/photo/2013/07/13/09/46/cricket-155965_1280.png" alt="Card image cap" style={{ borderRadius: '2rem', height:'16rem' }} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Bats</h5>
                <p className="card-text">2 Bats</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ width: '16rem' }}>
            <Link to="/book-resource">
              <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/01/31/23/16/ball-2028095_1280.png" alt="Card image cap" style={{ borderRadius: '2rem', height:'16rem' }} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Volley Ball</h5>
                <p className="card-text">5 Volley Balls</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ width: '16rem' }}>
            <Link to="/book-resource">
              <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/03/31/15/04/badminton-1292970_1280.png" alt="Card image cap" style={{ borderRadius: '2rem', height:'16rem' }} />
              </Link>
              <div className="card-body">
              <h5 className="card-title">Shuttlecocks</h5>
                <p className="card-text">0 Shuttlecocks</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ width: '16rem' }}>
            <Link to="/book-resource">
              <img className="card-img-top" src="https://cdn.pixabay.com/photo/2022/07/01/11/40/racket-7295461_640.png" alt="Card image cap" style={{ borderRadius: '2rem' , height:'16rem'}} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Rackets</h5>
                <p className="card-text">3 Rackets</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ width: '16rem' }}>
            <Link to="/book-resource">
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDoAfS445XHP7ikbqrycUbGF-RT2l4PeV8S8VQZFt31g&s" alt="Card image cap" style={{ borderRadius: '2rem', height:'16rem' }} />
            </Link>  
                <div className="card-body">
                <h5 className="card-title">Kickboard</h5>
                <p className="card-text">5 Kickboard</p>
              </div>
            </div>
          </div>
          <div className="col">
        <div className="card border-0" style={{ width: '16rem' }}>
          <Link to="/book-resource">
            <img className="card-img-top" src="https://cdn.pixabay.com/photo/2014/04/02/17/04/tennis-ball-307846_640.png" alt="Tennis Balls" style={{ borderRadius: '2rem', height:'16rem' }} />
          </Link>
          <div className="card-body">
            <h5 className="card-title">Tennis Balls</h5>
            <p className="card-text">3 Tennis Balls</p>
          </div>
        </div>
</div>
        </div>
      </div>
    </div>
  );
}
