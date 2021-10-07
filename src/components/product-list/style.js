import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const ProductListe = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  img {
    width: 50px;
  }
  li {
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    align-items: center;
    flex-direction: column;
    border: 3px solid black;
    padding: 10px;
  }
  li:hover {
    border-color: purple;
    color: white;
    img {
      width: 70px;
    }
    button {
      background-color: red;
      width: 100px;
    }
  }
  button {
    background-color: lime;
    border-radius: 15px;
    border: none;
  }
`;
export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  li {
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    gap: 10px;
    align-items: center;
    font-size: 10px;
    flex-direction: column;
    border: 3px solid black;
    padding: 10px;
  }

  button {
    border-radius: 15px;
    background-color: lime;
    border: none;
    font-size: 8px;
    width: 50px;
  }

  li:hover {
    border-color: red;
    color: white;
    img {
      width: 40px;
    }
    button {
      background-color: red;
      width: 60px;
    }
  }
  img {
    width: 25px;
  }
`;
