import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  display: flex;
`;

export const RadioInput = styled.input`
  padding-right: 5px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 0 8px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export const TextArea = styled.textarea``;

export const Button = styled.button`
  height: 42px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73f2;
  color: white;
`;
