import styled from 'styled-components';

export const Container = styled.div``;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #349beb;
  color: #fff;
  border: 0;
  padding: 0;
  margin-left: 10px;
  border-radius: 4px;
  height: 40px;
  width: 30%;
  align-self: center;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 200px;
  width: 460px;
  margin: 80px auto;
  align-items: center;

  input {
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 13px;
    margin-bottom: 20px;
    width: 41%;
    margin-top: 20px;
  }
`;
