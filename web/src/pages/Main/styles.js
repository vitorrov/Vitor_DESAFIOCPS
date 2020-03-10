import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Spartan:400,700&display=swap');
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-family: 'Spartan', sans-serif;
  }

  p {
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-family: 'Spartan', sans-serif;
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid #eee;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px;
  height: 130px;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

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
