import styled from "styled-components"

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  background:  ${({ theme }) => theme.COLOR.gray[500]};
  border: none;
  color:  ${({ theme }) => theme.COLOR.gray[100]};
`