import { Lesson } from "@/data/coursemodule";

export function VideoPlayer({ lesson }: { lesson: Lesson }) {
  return (
    <video key={lesson.id} controls className="w-full rounded-xl bg-black">
      <source src={lesson.videoUrl} type="video/mp4" />
    </video>
  );
}
