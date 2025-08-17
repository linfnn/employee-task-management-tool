
import { useLayoutEffect, useState } from "react";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import MobileSidebar from "../components/sidebar/MobileSidebar";
import ChatContainer from "../components/chat";

const ChatPage = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
    return window.removeEventListener("resize", () =>
      setInnerWidth(window.innerWidth)
    );
  }, [innerWidth]);
  return (
    <>
      {innerWidth > 655 ? (
        <AdminSidebar contentProp={<ChatContainer />} activeFlag="chats" />
      ) : (
        <MobileSidebar contentProp={<ChatContainer />} activeFlag="chats" />
      )}
    </>
  );

};

export default ChatPage;
