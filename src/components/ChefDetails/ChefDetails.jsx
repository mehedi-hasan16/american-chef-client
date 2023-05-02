import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import { Row } from "react-bootstrap";

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { name, picture, years_of_experience, num_recipes, bio, rating, recipes } = chefDetails;
    return (
        <div className="container">
            <div className="card mb-3 my-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Discription: {bio}</p>
                            <p className="card-text"><small className="text-body-secondary">Year of Experience: {years_of_experience}</small></p>
                            <p className="card-text"><small className="text-body-secondary">Number of Recipe: {num_recipes}</small></p>
                            <p className="card-text"><small className="text-body-secondary">Rating: {rating}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <Row xs={1} md={2}>
            {
                recipes.map(recipe=><Recipe recipe={recipe} key={recipe.id}></Recipe>)
            }
            </Row>
        </div>
    );
};

export default ChefDetails;