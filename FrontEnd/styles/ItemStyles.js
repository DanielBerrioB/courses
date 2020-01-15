import styled from "styled-components";

const ItemStyles = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  border: solid 1px #000;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px -3px 3px 1px rgba(0, 0, 0, 0.2);
  img {
    width: 40%;
    height: 30%;
    object-fit: cover;
    float: left;
  }

  span {
    border-radius: 30px;
    border: solid 1px #000;
    padding: 5px;
  }

  .top {
    margin: 0;
    display: flex;
    box-shadow: 0 1px 0 gray;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  .body {
    float: left;
    text-align: left;
    margin-left: 20px;
    height: 140px;
  }
  .bottom {
    float: left;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #price {
    color: ${props => props.theme.blue};
    font-size: 2rem;
  }
`;

export default ItemStyles;
