import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 46rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.COLOR.gray[500]};
  border-radius: 8px;

  & + &{
    margin-top: 0.75rem;
  }

  >p{
    font-size: 0.875rem;
    line-height: 1.19rem;
    margin-right: auto;
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
    font-size: 0.9rem;
    transition: color 0.1s;
  }

  ${({ theme,isCompleted }) => isCompleted && css`
    .check-button > div {
      background:${theme.COLOR.purple[500]};
    }
    p{
      color: ${theme.COLOR.gray[300]};
      text-decoration: line-through;
    }
  `}
`