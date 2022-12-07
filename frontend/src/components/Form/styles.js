import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  gap: 8px;
  /* flex-wrap: wrap; */
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  @media (max-width: 500px) {
    max-width: 80vw;
  }
`;

export const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  .input {
    width: 400px;
    max-width: 90%;
    height: 35px;
    padding-left: 10px;
    margin-right: 5em;
    border: 1px solid #bbb;
    border-radius: 5px;
    box-shadow: 1px 2px 3px #ccc;
    @media (max-width: 500px) {
      margin-right: 0;
      max-width: 80%;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CheckboxInputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 5em;
  @media (max-width: 500px) {
    align-items: center;
    justify-content: center;
    margin-right: 0;
    margin-left: 15px;
  }
`;

export const RadioArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 40px;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 400px;
  max-width: 80%;
  height: 35px;
  padding-left: 10px;
  margin-right: 5em;
  border: 1px solid #bbb;
  border-radius: 5px;
  box-shadow: 1px 2px 3px #ccc;
  @media (max-width: 500px) {
    margin-right: 0;
    max-width: 80%;
  }
`;

export const RadioInput = styled.input`
  padding: 8px;
  @media (max-width: 500px) {
    padding: 5rem;
    /* display: flex; */
    /* justify-content: center; */
    max-width: 80%;
    margin-left: 120px;
  }
`;

export const ImageInput = styled.input`
  padding: 8px;
  margin-right: 5em;
  @media (max-width: 500px) {
    max-width: 80%;
    margin-right: 0;
    margin-left: 10px;
  }
  img {
    margin-right: 5em;
  }
`;

export const Checkbox = styled.input`
  padding: 8px;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 20px;
  padding: 5px 10px;
  font-weight: 400;
  @media (max-width: 500px) {
    align-self: flex-start;
    font-size: 12px;
    margin-right: 0;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 20px;
  padding: 5px 10px;
  font-weight: 400;
  @media (max-width: 500px) {
    align-self: flex-start;
    padding-left: 40px;
    margin-top: -20px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  text-align: right;
  padding-right: 10px;
  max-width: 20%;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 14px;
    font-weight: 500;
    align-self: flex-start;
    padding-left: 40px;
    max-width: 100%;
  }
`;

export const TextArea = styled.textarea`
  width: 400px;
  margin-right: 5em;
  border: 1px solid #bbb;
  border-radius: 5px;
  padding-left: 10px;
  box-shadow: 1px 2px 3px #ccc;
  @media (max-width: 500px) {
    max-width: 80%;
    margin-right: 0;
  }
`;

export const Button = styled.button`
  height: 42px;
  padding: 10px;
  cursor: pointer;
  width: 80%;
  align-self: center;
  border-radius: 5px;
  border: none;
  background-color: #2c73f2;
  color: white;
`;
