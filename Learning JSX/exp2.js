let cars = ["Audi", "BMW", "RollsRoyce"];
function UnorderedList() {
  return (
    <ul>
      {cars.map((car) => (
        <li>{car}</li>
      ))}
    </ul>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<UnorderedList />);
