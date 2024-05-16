import { useState } from "react";

import { CollectionType } from "@/types";

const ProjectCard: React.FC<CollectionType> = ({
  id,
  ontologyName,
  numberOfImages,
  created,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md mb-4">
      <div className="border-b px-4 py-2 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-500">{name}</h3>
          <span className="text-lg font-semibold text-gray-500">
            {numberOfImages}
          </span>
          <span className="text-lg font-semibold text-gray-500">{created}</span>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-gray-500"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7V17H11V7H12ZM11 18H13V19H11V18ZM11 5H13V6H11V5ZM7 11H17V12H7V11Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7V17H11V7H12ZM11 18H13V19H11V18ZM11 5H13V6H11V5Z"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="px-4 py-2">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-gray-500">id</th>
                <th className="border px-4 py-2 text-gray-500">ontologyName</th>
                <th className="border px-4 py-2 text-gray-500">생성</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-gray-500">{id}</td>
                <td className="border px-4 py-2 text-gray-500">
                  {ontologyName ?? "anon"}
                </td>
                <td className="border px-4 py-2 text-gray-500">{created}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
