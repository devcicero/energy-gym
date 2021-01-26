import React from "react";

const Main = () => {
  return (
    <main>
      <section className="hero">
        <div className="container row">
          <div className="hero-form col col-50">
            <h2>Apply Now</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi explicabo nesciunt deleniti tempora vitae ullam ex
              maiores. Voluptates, obcaecati. Sint!
            </p>
            <form>
              <input placeholder="First Name" required />
              <input placeholder="Last Name" required />
              <input placeholder="Email Address" required />
              <button>register now</button>
            </form>
          </div>
          <div className="hero-content col col-50">
            <h1>Get motivated</h1>
            <h2>with our certified</h2>
            <h2>personal trainers today</h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
