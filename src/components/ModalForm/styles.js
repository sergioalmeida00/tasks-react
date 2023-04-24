import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`

export const Container = styled.div`
  width: 100%;
  max-width: 26.8rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.COLOR.gray[600]};
  border-radius: 8px;

  .group{
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    select{
      width: 100%;
      padding: 1rem;
      border-radius: 8px;
      background:  ${({ theme }) => theme.COLOR.gray[500]};
      border: none;
      color:  ${({ theme }) => theme.COLOR.gray[300]};
    }
  }

  footer{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 1rem;

    a{
      text-decoration: none;
      color:  ${({ theme }) => theme.COLOR.gray[300]};
      font-weight: bold;
      transition: filter 0.2s ease-in;
      cursor: pointer;

      &:hover{
        filter: brightness(0.9);
      }
    }

    button{
      &:hover{
        filter: brightness(0.9);
      }
      &[disabled]{
        background:  ${({ theme }) => theme.COLOR.gray[300]};
        cursor: not-allowed;
      }
    }
  }
`