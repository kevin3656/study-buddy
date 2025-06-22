// Notes.jsx
"use client";
import React from "react";
import { Notes as StyledNotes } from "./styles"; // import the styled component

// 
export default function Notes(props) {
  return <StyledNotes {...props}>{props.children}</StyledNotes>;
}
