import { useState } from "react";
export default function InputFormUsingClass(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <>
      <div className="section">
        <Row label="Name">
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row label="Last Name">
          <input
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Row>
      </div>

      <h2>Hello,{name + " " + lastName} </h2>
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>
        {label}
        <br />
      </lable>
      {props.children}
      <hr />
    </>
  );
}
