import { useLayoutEffect, useState } from "react";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import MobileSidebar from "../components/sidebar/MobileSidebar";
import AccountForm from "../components/forms/AccountForm";

const AccountPage = () => {
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
        <AdminSidebar contentProp={<AccountForm />} activeFlag="accounts" />
      ) : (
        <MobileSidebar contentProp={<AccountForm />} activeFlag="accounts" />
      )}
    </>
  );

};

export default AccountPage;
