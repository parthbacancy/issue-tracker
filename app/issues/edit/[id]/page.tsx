import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueFormSkeleton from "./loading";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
