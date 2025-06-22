"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PageContainer, SideBar, ContentContainer } from "./styles";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// Set the workerSrc so PDF.js can load properly
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export default function Home() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    }
  };

  return (
    <PageContainer>
      <SideBar>
        <h1 style={{ fontSize: "24px" }}>nudge</h1>
        <p style={{ fontSize: "16px" }}>open notes</p>
        <label style={{ cursor: "pointer" }}>
          Select PDF
          <input
            type="file"
            accept="application/pdf"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>
      </SideBar>
      <ContentContainer style={{ overflowY: "scroll", maxHeight: "100vh" }}>
        {pdfFile ? (
          <Document
            file={pdfFile}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={console.error}
          >
            {Array.from(new Array(numPages), (_, index) => (
              <div
                key={`page_${index}`}
                style={{
                  marginBottom: "24px",
                  marginTop: index === 0 ? "24px" : "0",
                }}
              >
                <Page
                  pageNumber={index + 1}
                  width={600} // Optional, match your layout
                />
              </div>
            ))}
          </Document>
        ) : (
          "Open Pdf or Notes to Begin"
        )}
      </ContentContainer>
    </PageContainer>
  );
}
