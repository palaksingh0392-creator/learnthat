import { courses } from "@/data/coursemodule";
import { notFound } from "next/navigation";
import CourseClient from "@/app/courses/courseclient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = courses.find((c) => c.slug === slug);

  if (!course) return notFound();

  return <CourseClient course={course} />;
}
