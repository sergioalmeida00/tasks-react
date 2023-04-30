import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 46rem;
  width: 100%;
  height: 5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.COLOR.gray[500]};
  border-radius: 8px;

  & + &{
    margin-top: 0.75rem;
  }

  >h3{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1rem;
    text-transform: uppercase;
    line-height: 1.19rem;
    margin-right: auto;

    strong{
      font-size: 0.7rem;
      background: ${({ theme }) => theme.COLOR.blue[500]};
      border-radius: 4px;
      margin-top: 0.2rem;
      padding: 0 0.7rem;
    }
  }

  .check-button{
    min-width: 1.125rem;
    height: 1.125rem;
    background: none;
    border: 0;
    cursor: pointer;

    > div{
      width: 100%;
      height: 100%;
      border: 2px solid ${({ theme }) => theme.COLOR.blue[400]};
      border-radius: 50%;
    }
  }

  .button-delete{
    border: none;
    background: transparent;
    color:  ${({ theme }) => theme.COLOR.gray[300]};
    font-weight: bold;
    cursor: pointer;
    font-size: 1.3rem;
    transition: color 0.2s ease-in;

    &:hover{
      color: ${({ theme }) => theme.COLOR.red[400]};
    }
  }

  ${({ theme,isCompleted }) => isCompleted && css`
    .check-button > div {
      background:${theme.COLOR.purple[500]};
    }
    h3{
      color: ${theme.COLOR.gray[300]};
      text-decoration: line-through;
    }
  `}
`