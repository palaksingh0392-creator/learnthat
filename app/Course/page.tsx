import { courses } from "@/data/coursemodule";
import { CoursesGrid } from "@/app/components/coursesgrid";

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm text-muted-foreground uppercase">
          Explore our collection
        </p>

        <h1 className="text-4xl font-bold mt-2">Popular Courses</h1>

        <p className="text-muted-foreground mt-3">
          Dive into curated courses designed to help you master new skills.
        </p>
      </div>

      <CoursesGrid courses={courses} />
    </div>
  );
}
