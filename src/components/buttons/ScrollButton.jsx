import { useLayoutEffect } from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import { GoMoveToTop } from "react-icons/go";

const ScrollButton = () => {
  const [show, setShow] = useState(false);
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 600 ? setShow(true) : setShow(false);
    });
  }, [show]);
  return (
    <Button
      style={{
        display: show ? "block" : "none",
        zIndex: 10,
        borderRadius: "50%",
        position: "fixed",
        right: 45,
        bottom: 45,
        padding: "10px 16px",
      }}
      onClick={() => {
        return window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
      }}
    >
      <GoMoveToTop style={{ width: 25, height: 25 }} />
    </Button>
  );
};

export default ScrollButton;
