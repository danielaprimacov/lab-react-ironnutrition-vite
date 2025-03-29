import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";

function FoodList({ foods, deleteFood, addNewFood }) {
  return (
    <>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood={addNewFood} />
      {foods.map((item) => (
        <FoodBox key={item.id || index} food={item} deleteFood={deleteFood} />
      ))}
    </>
  );
}

export default FoodList;
