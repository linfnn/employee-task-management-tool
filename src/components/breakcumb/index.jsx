import { Typography } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const BreakCumb = ({ dataProp }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => setInnerWidth(window.innerWidth));
    return window.removeEventListener("scroll", () =>
      setInnerWidth(window.innerWidth)
    );
  }, [innerWidth]);
  return (
    <>
      {innerWidth > 655 ? (
        <Typography variant="h4">
          <b>SKIPLI TEST</b>
        </Typography>
      ) : (
        <></>
      )}
      <hr></hr>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/admin">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>{dataProp}</BreadcrumbItem>
      </Breadcrumb>
      {dataProp == "Chat" ? (
        <></>
      ) : (
        <Typography
          className="text-center"
          variant={
            innerWidth < 375
              ? "h5"
              : innerWidth >= 375 && innerWidth < 426
              ? "h4"
              : "h3"
          }
        >
          {dataProp} Management
        </Typography>
      )}
    </>
  );
};

export default BreakCumb;
