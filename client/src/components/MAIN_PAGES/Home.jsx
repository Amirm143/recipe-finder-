import { Link } from "react-router-dom";
import Nav from "./Nav";
import RecipeCard from "../API_PAGES/RecipeCard";
import Quote from "../MAIN_PAGES/Quote";

export default function Favourite({ recipes }) {
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",

  ]
  return (
    <>
      <div className="container">
        {recipes.length === 0 ? (
          <>
          <div className="m-5">
            <div className="section hero">
              <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">Embark on a culinary odyssey with TasteTreasure.com! 🌍✨ Explore a world of delectable and complimentary recipes that span the globe. 🍲 Delight your taste buds and feed your soul as you dive into a rich tapestry of flavors. 🎨 Our platform is your gateway to the art of taste, providing you with an immersive culinary experience without any expense. 🆓 Join us in savoring the joy of gastronomy – your passport to a world of epicurean delight begins at TasteTreasure.com. 🌟 Start your flavorful journey today! 🍽️✈️!</p>
                <Link className="btn btn-dark " to="/recipes">explore now</Link>
              </div>
              <div className="col gallery">
                {images.map((src, index) => (
                  <img key={index} src={src} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <Quote />
          </div>
          </>
          
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
            {recipes.map((recipe) => (
              <RecipeCard recipes={recipe} key={recipe._id} />
            ))}
          </div>
        )
        }
      </div>
    </>
  );
}
