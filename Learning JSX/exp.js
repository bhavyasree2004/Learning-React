var a = [2,3,4,5,6,7,8,9,10,22,33,334,222];
let obj = {
  name: "Bhavya",
  Id: "S190346",
};
const element = (
  <>
    {
        a.filter((num)=> num%2==0).map((num)=><h2>{num}</h2>)
    }
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
