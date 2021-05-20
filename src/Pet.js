import { Link } from "react-router-dom";
const Pet = ({ name, id, animal, breed, images, location }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`Type : ${animal} — Breed : ${breed} — Location : ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
