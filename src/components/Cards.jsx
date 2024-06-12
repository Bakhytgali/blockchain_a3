import React from 'react';
import "../styles/cards.css";
import "../index.css";

const Cards = () => {

    const programs = [
        {
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZj-dB23f89QskKVneQB8GF8bkpAEWe7NddA&s",
            title: "Anti Cancer",
            subtitle: "Join us in our efforts to develop treatments and support for cancer patients."
        },
        {
            imgUrl: "https://d39raawggeifpx.cloudfront.net/styles/16_9_desktop/s3/articleimages/bneGENERIC_FLOODING_FLOODS_KAZAKHSTAN_CLIMATE_CRISIS_110424.jpg",
            title: "Floodings in Kazakhstan",
            subtitle: "Help communities affected by floods in Kazakhstan by providing relief and support."
        },
        {
            imgUrl: "https://sunshineandsmiles.org.uk/images/site/general/downs-syndrome-association.png",
            title: "Down Syndrome Association",
            subtitle: "Support initiatives dedicated to raising awareness and improving the lives of individuals with autism."
        }
    ];

    return (
        <div className="container my-5">
            <h3 className="programs-title">
                PROGRAMS
            </h3>
            <div className="row justify-content-center mt-5">
                {programs.map((program, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card program-card h-100">
                            <img src={program.imgUrl} className="card-img-top" alt={program.title} />
                            <div className="card-body">
                                <h5 className="card-title">{program.title}</h5>
                                <p className="card-text">{program.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
