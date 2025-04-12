import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Datos de experiencia laboral
const experienceItems = [
  {
    id: 1,
    date: "07/09/2024 - Presente",
    position: "Becario de Desarrollo Web",
    company: "Trust People Company",
    description:
      "Desarrollo de aplicaciones web utilizando React, Nex.js y bases de datos SQL.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <ol className="relative border-s border-gray-700">
        {experienceItems.map((item) => (
          <li key={item.id} className="mb-10 ms-4">
            {/* Punto indicador */}
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>

            {/* Fecha con icono */}
            <div className="flex items-center mb-1 text-sm text-gray-400">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <time>{item.date}</time>
            </div>

            {/* Título y empresa */}
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-white">
                {item.position}
              </h3>
              <Badge
                variant="outline"
                className="text-blue-300 border-blue-800"
              >
                {item.company}
              </Badge>
            </div>

            {/* Descripción */}
            <p className="text-base font-normal text-gray-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
