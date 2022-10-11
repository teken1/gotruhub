import React from "react";
import { Link } from "react-router-dom";
import { CustomerProfileContent, MainLayout } from "../../components";

export const CustomerProfile = () => {
  return (
    <MainLayout>
      <CustomerProfileContent />
    </MainLayout>
  );
};
