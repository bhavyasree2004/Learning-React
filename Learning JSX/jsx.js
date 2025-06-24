const jsxExp= <h2> JSX Expression</h2>
const App = () => {
  return (
    <>
      <h1>Let's learn JSX</h1>
      {jsxExp}
    </>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
