import React from "react";
import { Pagination } from "@mui/material";
import { usePegination } from "../hooks/Pagination";
import { useState } from "react";
import { useEffect } from "react";
const Records = ({ data }) => {
  const [rowData, setRowData] = useState([]);
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, //its important
    displayPage,
  ] = usePegination(5, data.length);

  useEffect(() => {
    {
      data.map((row) => {
        setRowData(row);
      });
    }
  }, []);
  //   console.log(rowData);
  return (
    <div>
      <h1>User Posts</h1>
      {/* {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i < endPageIndex; i++) {
          displayPosts.push(
            <div key={data[i].id}>
              <h3>
                <span>{i + 1}</span> {data[i].title}{" "}
              </h3>
              <p>{data[i].body}</p>
            </div>
          );
        }
        return displayPosts;
      })()} */}

      {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i < endPageIndex; i++) {
          displayPosts.push(
            <div key={rowData.id}>
              <h3>
                <span>{i + 1}</span> {rowData.title}{" "}
              </h3>
              <p>{rowData.body}</p>
            </div>
          );
        }
        return displayPosts;
      })()}

      <Pagination
        color="primary"
        count={totalPages}
        onChange={(event, value) => displayPage(value)}
      />
    </div>
  );
};

export default Records;
