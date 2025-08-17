import { useLayoutEffect, useState } from "react";
import EmployeeTable from "../components/table/EmployeeTable";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import MobileSidebar from "../components/sidebar/MobileSidebar";
import "../css/dashboardPage.css";

const DashboardPage = () => {
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
        <AdminSidebar contentProp={<EmployeeTable />} activeFlag="employees" />
      ) : (
        <MobileSidebar contentProp={<EmployeeTable />} activeFlag="employees" />
      )}
    </>
  );

};

export default DashboardPage;
