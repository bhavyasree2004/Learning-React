import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
    background-color:${(props) => (props.filled ? props.bg : "#fff")};
    color:${(props) => (props.filled ? props.color : "black")};
    border:${(props) => (props.filled ? "none" : "3px solid black")};
    height:40px;
    width:200px;
    padding:5px;
    font-weight:bold;
    font-size:20px;
    text-transform:uppercase;
`;
