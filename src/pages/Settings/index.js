import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { MainLayout, SettingsContent } from "../../components";

export const Settings = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const params = useParams();

  console.log(location);
  console.log(params);
  console.log(searchParams);
  // setSearchParams({ you: "yj" });

  return (
    <MainLayout>
      <SettingsContent />
    </MainLayout>
  );
};
