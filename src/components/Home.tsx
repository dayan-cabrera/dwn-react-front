import React from "react";

const Home = () => {
  return (
    <>
      <div className="section light-color-gradient">
        <div className="container" style={{ opacity: 1 }}>
          <div className="w-layout-grid hero-grid">
            <div className="text-box _500px">
              <h1 className="heading h1">Access to Cuban content platforms</h1>
              <p className="paragraph large">
                "Discover cinema in your hand: Simplify your life with our
                platform, where each episode and subtitle are just a click
                away."
              </p>
              <div className="spacer _16"></div>
              <a href="/sign-up" className="button w-button">
                Get Access Now
              </a>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logo_white.jpg`}
              loading="eager"
              width="337"
              id="w-node-_2c511369-eabb-a0ff-6024-6e8ecffbdf82-40ac4d19"
              alt=""
              className="hero-illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Continúa definiendo otros componentes similares para el resto del contenido...

export default Home;