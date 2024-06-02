import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { SearchPrograms } from "../components/SearchPrograms/SearchPrograms";
import { ProgramsList } from "../components/ProgramsList/ProgramsList";

export const Programs = () => {
  return (
    <>
      <PageHeader heading="Programs" subHeading="Programs" />
      <SearchPrograms />
      <ProgramsList />
    </>
  );
};
