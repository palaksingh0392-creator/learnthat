"use client";

import { useState } from "react";
import { courses } from "@/data/coursemodule";
import { VideoPlayer } from "@/app/components/videoplayer";
import { CourseContent } from "@/app/components/coursecontent";
import { notFound } from "next/navigation";

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) return notFound();

  const [selectedLesson, setSelectedLesson] = useState(course.lessons[0]);

  return (
    <div className="container mx-auto py-10">
      <button
        onClick={() => history.back()}
        className="mb-6 text-sm text-muted-foreground hover:underline"
      >
        ← Back to Courses
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-4">
          <VideoPlayer lesson={selectedLesson} />

          <div>
            <h2 className="text-xl font-semibold">{selectedLesson.title}</h2>
            <p className="text-muted-foreground">
              Duration: {selectedLesson.duration}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:sticky lg:top-20 h-fit">
          <CourseContent
            lessons={course.lessons}
            selectedLessonId={selectedLesson.id}
            onSelect={setSelectedLesson}
          />
        </div>
      </div>
    </div>
  );
}
