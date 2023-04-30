import styled from "styled-components";

export const Container = styled.section`
  max-width: 46rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  .task-info{
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;  

    span {
      color: ${({ theme }) => theme.COLOR.blue[400]};
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 0.8rem;
   }
   span strong{
    color: ${({ theme }) => theme.COLOR.gray[200]};
    background: ${({ theme }) => theme.COLOR.gray[400]};
    padding: 0.3rem;
    border-radius: 8px;
    font-size: 0.75rem;
   }
  }

  >button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLOR.gray[200]};
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;


    svg{
      transform: ${({ orderBy }) => (orderBy ? 'rotate(-180deg)' : 'rotate(0deg)') };
      transition: transform 0.3s ease-in;
    }
  }

  .task{
    margin-top: 1.5rem;
  }

  .task-empty{
      margin-top: 5.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      color:${({ theme }) => theme.COLOR.gray[300]};
      font-size: 1rem;

      > img{
        width:3.5rem ;
        height: 3.5rem;
        margin-bottom: 1rem;
      }
  }
`