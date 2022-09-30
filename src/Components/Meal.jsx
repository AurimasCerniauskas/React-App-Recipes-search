function Meal({line}) {
  return (

    <div className="list-row">
      <div className="list-row-img"><img className="mr-3" src={line.strMealThumb+'/preview'} alt="Generic" /></div>
      <div className="list-row-desc">
        <h3 className="mt-0">{line.strMeal}</h3> <button>Patinka</button>
        <p>{line.strInstructions}</p>
      </div>
    </div>
  );
}

export default Meal;
