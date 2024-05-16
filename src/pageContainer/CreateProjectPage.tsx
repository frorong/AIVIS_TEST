"use client";

import { useGetProjectList } from "@/hooks";
import { ProjectCard } from "@/components";
import { CollectionType } from "@/types";

import { useEffect, useState } from "react";

interface Props {
  projectId: string;
}

const DetailPage: React.FC<Props> = ({ projectId }) => {
  return (
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-3xl font-semibold mb-4 text-gray-500">프로젝트</h2>
    </div>
  );
};

export default DetailPage;
