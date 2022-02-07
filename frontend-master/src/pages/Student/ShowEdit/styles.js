import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  width: 100%;
  margin: 0 auto;

  form {
    padding: 0;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 2.4rem;
      }

      .buttons {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          svg {
            margin-right: 10px;
          }

          border: 0;
          padding: 0 10px;
          margin-left: 10px;
          border-radius: 4px;
          color: #fff;
          font-size: 1.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 36px;
        }

        button.save {
          background: var(--color-success);

          &:hover {
            background: var(--color-success-dark);
          }
        }

        button.close {
          background: var(--text-color-light);

          &:hover {
            background: var(--text-color-dark);
          }
        }

        button.consult {
          background: var(--color-info-dark);

          &:hover {
            background: var(--color-info);
          }
        }
      }
    }

    hr {
      width: 100%;
      margin: 7px 0;
      border-top: 1px solid #ccc;
    }

    div.arrow{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      div.seta{
        width: 0; 
        border:solid transparent;
        border-width: 30px;
        border-top-color: #000;
        border-bottom-width:0;
      }
    }

    div.content {
      padding: 30px;
      background: #fff;
      margin: 10px;
      width: 100%;

      label {
        display: block;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 20px;
      }

      input {
        width: 100%;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        margin-top: 5px;
        margin-bottom: 3px;
      }

      > span {
        margin-left: 10px;
        font-size: 1.2rem;
        font-stretch: italic;
        text-transform: none;
        color: var(--color-error);
      }
    }
  }
`;

export const DivBoxRow = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const DivBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width:100%;
  padding-left: 20px;

  label {
    display: block;
    align-self: flex-start;

    span {
      text-transform: none;

      &.age {
        margin-left: 25px;
        font-weight: normal;
      }
    }
  }
`;
