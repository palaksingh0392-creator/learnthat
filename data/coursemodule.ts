export type Lesson = {
  id: string
  title: string
  duration: string
  videoUrl: string
}

export type Course = {
  id: string
  slug: string
  title: string
  description: string
  category: string
  totalLessons: number
  duration: string
  lessons: Lesson[]
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "ui-ux-design",
    title: "UI/UX Design Masterclass",
    description: "Learn UI/UX fundamentals including wireframing and prototyping.",
    category: "Design",
    totalLessons: 3,
    duration: "8 hours",
    lessons: [
      {
        id: "l1",
        title: "Introduction to UI/UX Design",
        duration: "15:20",
        videoUrl: "/videos/sample.mp4"
      },
      {
        id: "l2",
        title: "Design Principles",
        duration: "20:10",
        videoUrl: "/videos/sample.mp4"
      },
      {
        id: "l3",
        title: "Color Theory and Typography",
        duration: "18:30",
        videoUrl: "/videos/sample.mp4"
      }
    ]
  }
]