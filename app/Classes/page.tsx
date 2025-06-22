"use client";
import { useState } from "react";
import {
  Container,
  PageWrapper,
  Notes,
  NoteTitle,
  NewPageContainer
} from "./styles";
import styled from "styled-components";

interface Page {
  id: number;
  name: string;
  date: string;
  createdAt: Date;
}

const NoteBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  const [pages, setPages] = useState<Page[]>([]);
  const [isCreatingPage, setIsCreatingPage] = useState<boolean>(false);
  const [newPageName, setNewPageName] = useState<string>("");

  const handleAddNewPage = () => {
    setIsCreatingPage(true);
  };

  const handleCreatePage = () => {
    if (newPageName.trim()) {
      const newPage: Page = {
        id: Date.now(),
        name: newPageName.trim(),
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        createdAt: new Date(),
      };

      setPages([...pages, newPage]);
      setNewPageName("");
      setIsCreatingPage(false);
    }
  };

  const handleCancelCreate = () => {
    setNewPageName("");
    setIsCreatingPage(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreatePage();
    } else if (e.key === "Escape") {
      handleCancelCreate();
    }
  };

  return (
    <>
      <Container>N u d g e</Container>
      <PageWrapper>
        {/* New Page Creation */}
        {isCreatingPage ? (
          <div
            style={{
              width: "400px",
              height: "200px",
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "#e0f7fa",
              border: "2px solid #00bcd4",
              borderRadius: "8px",
              padding: "20px",
              gap: "15px",
            }}
          >
            <input
              type="text"
              value={newPageName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewPageName(e.target.value)
              }
              onKeyDown={handleKeyPress}
              placeholder="Enter page name..."
              autoFocus
              style={{
                width: "90%",
                padding: "10px",
                border: "1px solid rgb(2, 10, 11)",
                borderRadius: "4px",
                fontSize: "16px",
                color: "black",
                textAlign: "center",
              }}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={handleCreatePage}
                style={{
                  padding: "8px 16px",
                  background: "#00bcd4",
                  color: "black",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Create
              </button>
              <button
                onClick={handleCancelCreate}
                style={{
                  padding: "8px 16px",
                  background: "#ccc",
                  color: "black",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <NewPageContainer onClick={handleAddNewPage}>
            Add a New Page +
          </NewPageContainer>
        )}

        {/* Render Dynamic Pages */}
        {pages.map((page) => (
          <NoteBlock key={page.id}>
            <Notes>
              <ul>
                <li>{page.name}</li>
              </ul>
            </Notes>
            <NoteTitle>Date: {page.date}</NoteTitle>
          </NoteBlock>
        ))}
      </PageWrapper>
    </>
  );
}
