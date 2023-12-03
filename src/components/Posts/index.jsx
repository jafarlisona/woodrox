import React from "react";

function Posts() {
  return (
    <section id="posts">
      <div className="posts-container">
        <h1>RECENT POSTS FROM OUR BLOG</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className="posts-cards">
          <div className="post-card">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg"
              alt=""
            />
            <div className="post-card-text">
              <div className="btn-group">
                <button className="current-btn">
                  <a href="#">Travel</a>
                </button>
                <button className="next-btn">
                  <a href="#">Life style</a>
                </button>
              </div>
              <a href="#">LOW COST ADVERTISING</a>
              <p>
                Acres of Diamonds… you’ve read the famous story, or at least had
                it related to you A farmer.
              </p>
              <span>31st January, 2018</span>
            </div>
          </div>
          <div className="post-card">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-2.jpg"
              alt=""
            />
            <div className="post-card-text">
              <div className="btn-group">
                <button className="current-btn">
                  <a href="#">Travel</a>
                </button>
                <button className="next-btn">
                  <a href="#">Life style</a>
                </button>
              </div>
              <a href="#">LOW COST ADVERTISING</a>
              <p>
                Acres of Diamonds… you’ve read the famous story, or at least had
                it related to you A farmer.
              </p>
              <span>31st January, 2018</span>
            </div>
          </div>
          <div className="post-card">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-3.jpg"
              alt=""
            />
            <div className="post-card-text">
              <div className="btn-group">
                <button className="current-btn">
                  <a href="#">Travel</a>
                </button>
                <button className="next-btn">
                  <a href="#">Life style</a>
                </button>
              </div>
              <a href="#">LOW COST ADVERTISING</a>
              <p>
                Acres of Diamonds… you’ve read the famous story, or at least had
                it related to you A farmer.
              </p>
              <span>31st January, 2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Posts;
