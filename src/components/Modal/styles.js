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

  strong{
    display: block;
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.COLOR.red[400]};
  }  
`

export const Footer = styled.footer`
    margin-top: 2.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.8rem;

    a, button{
      padding: 0.75rem 1rem;
      border: 0;
      border-radius: 8px;  
      cursor: pointer;
      transition: all 0.2s ease-in;

      &:hover{
        background:  ${({ theme }) => theme.COLOR.gray[500]};
      }
    }

    a{
      color:  ${({ theme }) => theme.COLOR.gray[300]};
      font-weight: bold;
      font-size: 0.8rem;
    }

    .button-modal-delete{
      background: ${({ theme }) => theme.COLOR.gray[600]};
      color: ${({ theme }) => theme.COLOR.red[400]};
      font-weight: bold;
      transition: all 0.2s ease-in;

      &:hover{
        background:  ${({ theme }) => theme.COLOR.red[400]};
        color: ${({ theme }) => theme.COLOR.gray[100]}; ;
      }
    }


    

`