"use client";

import { useState } from "react";
import { VideoPlayer } from "@/app/components/videoplayer";
import { CourseContent } from "@/app/components/coursecontent";

export default function CourseClient({ course }: any) {
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
        <div className="lg:col-span-2 space-y-4">
          <VideoPlayer lesson={selectedLesson} />

          <div>
            <h2 className="text-xl font-semibold">{selectedLesson.title}</h2>
            <p className="text-muted-foreground">
              Duration: {selectedLesson.duration}
            </p>
          </div>
        </div>

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
