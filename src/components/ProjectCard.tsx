import { useState } from "react";

import { CollectionType } from "@/types";
import { ToggleCloseIcon, ToggleOpenIcon } from "@/assets";

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
          {isOpen ? <ToggleOpenIcon /> : <ToggleCloseIcon />}
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
