import React from "react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { PreLicensingFirstFold } from "../components/PreLicensingFirstFold/PreLicensingFirstFold";
import { JoinCourse } from "../components/JoinCourse/JoinCourse";
import { CourseTabs } from "../components/CourseTabs/CourseTabs";
import { CourseOverview } from "../components/CourseOverview/CourseOverview";
import { FAQ } from "../components/FAQ/FAQ";
import { PackageFeatures } from "../components/PackageFeatures/PackageFeatures";
import { DidYouTakeChallengeTab } from "../components/DidYouTakeChallengeTab/DidYouTakeChallengeTab";

interface props {
  type: string;
  title: string;
}

export const ProgramPage: React.FC<props> = (props) => {
  return (
    <>
      <PageHeader heading={props.title} subHeading={props.title} />
      <DidYouTakeChallengeTab />
      <PreLicensingFirstFold title={props.title} type={props.type} />
      <JoinCourse />
      <CourseTabs />
      <CourseOverview />
      <PackageFeatures />
      <FAQ />
    </>
  );
};
