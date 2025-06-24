let firstName="Bhavya"
let lastName="Munagavalasa"
function Element(){
    return (
        <><h2>Welcome Ms {lastName || firstName}</h2></>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Element/>);