import Link from "next/link";
import { Course } from "@/data/coursemodule";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.slug}`}>
      <div className="rounded-2xl bg-white shadow hover:shadow-xl transition cursor-pointer overflow-hidden">
        <div className="h-40 bg-linear-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl">
          ▶
        </div>

        <div className="p-4 space-y-2">
          <span className="text-xs bg-muted px-2 py-1 rounded">
            {course.category}
          </span>

          <h3 className="font-semibold text-lg">{course.title}</h3>

          <p className="text-sm text-muted-foreground">{course.description}</p>

          <div className="flex justify-between text-sm pt-2">
            <span>{course.totalLessons} lessons</span>
            <span>{course.duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
