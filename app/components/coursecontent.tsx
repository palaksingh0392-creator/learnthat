import { Lesson } from "@/data/coursemodule";
import { LessonItem } from "@/app/components/lessonitem";

export function CourseContent({
  lessons,
  selectedLessonId,
  onSelect,
}: {
  lessons: Lesson[];
  selectedLessonId: string;
  onSelect: (lesson: Lesson) => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold mb-4">Course Content</h3>

      <div className="space-y-2">
        {lessons.map((lesson, index) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            index={index}
            isActive={lesson.id === selectedLessonId}
            onClick={() => onSelect(lesson)}
          />
        ))}
      </div>
    </div>
  );
}
