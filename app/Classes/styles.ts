import styled from "styled-components";

interface NotesProps {
  $left?: boolean;
  $top?: string;
}


export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  background-color:rgb(227, 243, 245);
  font-family: 'ariel', sans-serif;
  color:rgb(0, 0, 0);
  font-size: 20px;
`;

export const Notes = styled.div<NotesProps>`
  width: 400px;
  height: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(4, 75, 169, 0.1);
  padding: 16px;
  background-color:rgb(215, 226, 253);
  box-sizing: border-box;
  margin-top: 15px;
  margin-left: ${(props) => (props.$left ? "20px" : "auto")};
  margin-right: ${(props) => (props.$left ? "auto" : "20px")};
  font-size: 20px;
  color: #333;
  font-family: 'Arial', sans-serif;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

  }

  li {
    font-size: 50px;
    color: rgb(0, 69, 106);
    margin-bottom: 0px;
  }
`;
export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: rgb(213, 233, 247);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px;
  padding: 10px;
  box-sizing: border-box;
  align-items: start;
`;

export const NoteTitle = styled.div`
  margin-top: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: #00456a;
`;

export const NewPageContainer = styled.div`
  width: 400px;
  height: 200px;
  margin-top: 15px;
  background: #e0f7fa;
  border: 2px dashed #00bcd4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00bcd4;
  font-size: 1.5rem;
  font-family: 'Arial', sans-serif;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: #b2ebf2;
    border-color: #0097a7;
  }
`;