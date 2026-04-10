import { SparklesText } from "@/components/ui/sparkles-text";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import courseData from "@/data/module.json"; // Import your JSON here
import { Button } from "@/components/ui/button";
export default function Course() {
  return (
    <>
      <section className="py-20 pt-30 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <SparklesText>Popular Courses</SparklesText>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {courseData.map((course) => (
              <Card
                key={course.id}
                className={`${course.theme.cardBg} border-none shadow-sm rounded-[40px] p-4 flex flex-col transition-all hover:shadow-xl hover:-translate-y-1`}
              >
                <CardContent className="pt-6 grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">
                      {/* You can replace this with course images later */}
                      🎓
                    </div>
                    <Badge
                      className={`${course.theme.badge} border-none rounded-md px-3 py-1 text-[10px]`}
                    >
                      {course.category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 leading-tight text-slate-900">
                    {course.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="flex justify-between items-center text-xs font-medium text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200" />{" "}
                      {/* Avatar Placeholder */}
                      {course.instructor}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span> {course.rating}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center border-t rounded-t-2xl border-slate-100/50 dark:bg-slate-500 pt-6">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    {course.price}
                  </span>
                  <Button
                    variant={course.theme.buttonVariant as any}
                    className={`rounded-full px-6 ${course.id === 2 ? "bg-[#2a2d2f]  text-white hover:bg-[#8a82e6]" : ""}`}
                  >
                    Join Now →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
