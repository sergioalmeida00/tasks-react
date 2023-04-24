import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLOR.gray[700]};
  width: 100%;
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  main{
    max-width: 46rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }

  button{
    background:  ${({ theme }) => theme.COLOR.blue[500]};
    border: none;
    padding: 1rem;
    border-radius: 8px;
    font-weight: bold;
    color:  ${({ theme }) => theme.COLOR.gray[100]};
    transition: background-color 0.1s;
    cursor: pointer;

    &[disabled]{
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover{
      background:  ${({ theme }) => theme.COLOR.blue[700]};
    }
  }
`