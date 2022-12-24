import React from "react";

const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark">
                <img src="/assets/bg.jpg" className="card-img" alt="background" height="700px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">Новая Коллекция</h5>
                    <p className="card-text-lead">СЛЕДИТЕ ЗА ТРЕНДАМИ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;