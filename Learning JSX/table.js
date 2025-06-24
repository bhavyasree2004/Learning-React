const students = [
  { name: "Bhavya", age: 21, marks: 25 },
  { name: "Kusuma", age: 21, marks: 23 },
  { name: "Monikeswari", age: 20, marks: 28 },
];
function Element() {
  return (
    <>
      <h1> Sample table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.marks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Element />);
