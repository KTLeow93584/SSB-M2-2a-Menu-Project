function MenuCategory({ name, foods }) {
  return (
    <>
      <div>
        <h2>{name}</h2>
        {foods}
      </div>
    </>
  );
}

function MenuItem({ name, price, nutritionInfo }) {
  return (
    <>
      <p>
        <strong>{name}</strong> | {"$" + price}
        <NutritionalInfo nutrientName={"Calories"} amount={nutritionInfo.calorieCount} measurementUnit="kcal" />
        <NutritionalInfo nutrientName={"Protein"} amount={nutritionInfo.proteinCount} measurementUnit="g" />
        <NutritionalInfo nutrientName={"Carbs"} amount={nutritionInfo.carbCount} measurementUnit="g" />
        <NutritionalInfo nutrientName={"Fat"} amount={nutritionInfo.fatCount} measurementUnit="g" />
      </p>
    </>
  );
}

function NutritionalInfo({ nutrientName, amount, measurementUnit }) {
  return (
    <>
      <p>
        <small>
          {nutrientName + ": " + amount + measurementUnit}
        </small>
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Kaz's Hawkers' Delight</h1>

      { /* Main Course */}
      <MenuCategory name={"Main Course"} foods={MainCourse} />

      { /* Appetizers */}
      <MenuCategory name={"Appetisers"} foods={Appetizers} />

      { /* Desserts */}
      <MenuCategory name={"Desserts"} foods={Desserts} />

      { /* Desserts */}
    </>
  );
}

const MainCourse = (
  <>
    <MenuItem name={"Mac N' Cheese"} price={"9.00"} nutritionInfo={{ calorieCount: 376, proteinCount: 9.7, carbCount: 47, fatCount: 16 }} />
    <MenuItem name={"Spicy Prawn Noodle"} price={"5.00"} nutritionInfo={{ calorieCount: 210, proteinCount: 18, carbCount: 23, fatCount: 5.1 }} />
    <MenuItem name={"Laksa"} price={"6.00"} nutritionInfo={{ calorieCount: 613, proteinCount: 23, carbCount: 64, fatCount: 31 }} />
  </>
);

const Appetizers = (
  <>
    <MenuItem name={"Caesar Salad"} price={"5.50"} nutritionInfo={{ calorieCount: 481, proteinCount: 10, carbCount: 23, fatCount: 40 }} />
    <MenuItem name={"Vegetarian Salad"} price={"4.50"} nutritionInfo={{ calorieCount: 114, proteinCount: 3.7, carbCount: 11, fatCount: 6.8 }} />
    <MenuItem name={"Fruity Salad"} price={"5.00"} nutritionInfo={{ calorieCount: 97, proteinCount: 1.4, carbCount: 24, fatCount: 0.5 }} />
  </>
);

const Desserts = (
  <>
    <MenuItem name={"Nyonya Chendul"} price={"2.50"} nutritionInfo={{ calorieCount: 355, proteinCount: 3.1, carbCount: 49, fatCount: 18 }} />
    <MenuItem name={"Sundae Crepe (2pc)"} price={"3.50"} nutritionInfo={{ calorieCount: 880, proteinCount: 12, carbCount: 118.3, fatCount: 31.3 }} />
    <MenuItem name={"Durian Ais Kacang"} price={"6.00"} nutritionInfo={{ calorieCount: 83, proteinCount: 1, carbCount: 19, fatCount: 0.7 }} />
    <MenuItem name={"Signature Ice Cream Biscuit (3pc)"} price={"3.50"} nutritionInfo={{ calorieCount: 212, proteinCount: 4, carbCount: 28, fatCount: 9.5 }} />
  </>
);

export default App;