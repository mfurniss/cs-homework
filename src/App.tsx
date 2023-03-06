import React from "react";
import useFiles from "./useFiles";
import "./App.css";
import FilesContainer from './FilesContainer';

export default () => {
  const files = useFiles();

  return (
    <>
      <h1>CS Homework - Matt Furniss</h1>
      <FilesContainer files={files} />
    </>
  );
}
