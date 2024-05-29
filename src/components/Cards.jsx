import React from 'react';

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
        <div className="container">
            <h3 style={{color: "#fff", fontWeight: "700", fontSize: "30px", textAlign: "center"}}>
                PROGRAMS
            </h3>
            <div className="row justify-content-center mt-5">
                {programs.map((program, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card h-100" style={{ borderColor: "#006769", backgroundColor: "#006769" }}>
                            <img src={program.imgUrl} className="card-img-top" alt={program.title} style={{ height: "200px", objectFit: "cover" }} />
                            <div className="card-body" style={{ color: "#fff" }}>
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
