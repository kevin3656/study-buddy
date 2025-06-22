import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    background-color: lightgray;
`
export const SideBar = styled.div`
    display: flex;
    width: 20%;
    height: 100vh;
    background-color: #00719C;
    align-content: left;
    flex-direction: column;
    padding-top: 25px;
    padding-left: 25px;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* ✅ centers content horizontally */
  justify-content: flex-start;
  width: 80%;
  height: 100vh;
  background-color: white;
  overflow-y: auto;
  padding: 24px 0; /* vertical padding only */
  color: lightgrey;
`
