"use client";

import { usePostProject } from "@/hooks";
import { Input } from "@/components";
import { ProjectRequestType } from "@/types";
import { PROJECT_PAGE_PATH } from "@/constant";

import { useRouter } from "next/navigation";

import { useState } from "react";

const ONTOLOGY_ID = 34956166 as const;

const CreateProjectPage = () => {
  const [name, setName] = useState<string>("");

  const { push } = useRouter();

  const { mutate: create } = usePostProject({
    onSuccess: () => {
      push(PROJECT_PAGE_PATH);
    },
  });

  const submitProject = () => {
    if (name.length < 2) return;

    const requestData: ProjectRequestType = {
      name: name,
      ontologyId: ONTOLOGY_ID,
    };

    create(requestData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-500 p-8 rounded shadow-md w-80">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          프로젝트 생성
        </h2>
        <Input
          text={"프로젝트 이름"}
          inputValue={name}
          setInputValue={setName}
        />
        <button
          onClick={submitProject}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:bg-indigo-600"
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default CreateProjectPage;
