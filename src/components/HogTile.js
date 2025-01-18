import React from "react";

function HogTile({ hog }) {
    return (
        <div className="ui eight wide column">
           <h3>{hog.name}</h3>
           <img src={hog.image} alt={hog.name} />
           <p>{hog.specialty}</p>
           <p>{hog.weight}</p>
           <p>Greased: {hog.greased ? "Yes" : "No"}</p>
        </div>
    );
}

export default HogTile;

// name: "Babe",
// specialty: "Being incredibly cute",
// greased: false,
// weight: 2.0,
// "highest medal achieved": "bronze",
// image:
//   "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
// },