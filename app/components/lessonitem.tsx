import { Lesson } from "@/data/coursemodule";

export function LessonItem({
  lesson,
  index,
  isActive,
  onClick,
}: {
  lesson: Lesson;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`p-3 rounded-lg cursor-pointer transition ${
        isActive ? "bg-blue-100 border border-blue-300" : "hover:bg-muted"
      }`}
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium">
          {index + 1}. {lesson.title}
        </span>
        <span>{lesson.duration}</span>
      </div>
    </div>
  );
}
