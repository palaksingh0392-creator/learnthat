import { Course } from "@/data/coursemodule";
import { CourseCard } from "@/app/components/coursecard";

export function CoursesGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
