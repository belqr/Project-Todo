import styled from 'styled-components';

export const Container = styled.div `
  margin: 2rem auto;
  max-width: 30rem;
  padding: 1rem;

  h1 {
    margin: 1rem auto;
    padding-bottom: 5px;
    max-width: 30rem;
    text-align: center;
    font-weight: 900;
    border-bottom: 1px solid #333333;
  }

  form {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 5px;

    input {
      padding: 10px 15px;
      width: 80%;
      border: none;
      border-radius: 5px;
      font-size: 1.25rem;
      font-weight: 600;

      ::placeholder {
        color: #93BDFF;
      }
    }

    #btn-add {
      width: 3rem;
      border: none;
      border-radius: 5px;
      background-color: #ffffff;
      font-size: 2rem;
      font-weight: 900;
      background: #8288FF;
      background: #333333;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: 0.4s ease;
      cursor: pointer;

      :hover {
        background: #1C1C1C;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    #btn-del {
      width: 3rem;
      border: none;
      border-radius: 5px;
      background-color: #ffffff;
      font-size: 1.8rem;
      font-weight: 900;
      background: #8288FF;
      background: #FF3727;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: 0.4s ease;
      cursor: pointer;

      :hover {
        background: #BD291D;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

export const Box =styled.div `
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  border-radius: 5px;
`