import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const studentResults = [
  {
    courseCode: "CSC201",
    courseTitle: "Data Structures",
    credit: 3,
    grade: "B",
    gradePoint: 4.0,
  },
  {
    courseCode: "MTH202",
    courseTitle: "Probability and Statistics",
    credit: 4,
    grade: "A",
    gradePoint: 5.0,
  },
  {
    courseCode: "PHY203",
    courseTitle: "Electromagnetism",
    credit: 3,
    grade: "B",
    gradePoint: 4.0,
  },
  {
    courseCode: "ENG204",
    courseTitle: "Advanced English Composition",
    credit: 2,
    grade: "A",
    gradePoint: 5.0,
  },
  {
    courseCode: "CHE205",
    courseTitle: "Physical Chemistry",
    credit: 3,
    grade: "C",
    gradePoint: 3.0,
  },
  {
    courseCode: "CSC206",
    courseTitle: "Object-Oriented Programming",
    credit: 3,
    grade: "A",
    gradePoint: 5.0,
  },
  {
    courseCode: "MTH207",
    courseTitle: "Discrete Mathematics",
    credit: 3,
    grade: "B",
    gradePoint: 4.0,
  },
];

export function StudTable() {
  return (
    <Table className="bg-white border border-neutral-100 shadow-md ">
      <TableCaption className="text-xs">
        Your results displayed above
      </TableCaption>
      <TableHeader className="bg-neutral-100">
        <TableRow className="">
          <TableHead className="w-[100px] text-sm">Course Code</TableHead>
          <TableHead className="text-sm">Course Title</TableHead>
          <TableHead className="text-sm">Credit</TableHead>
          <TableHead className="text-right text-sm">Grade</TableHead>
          <TableHead className="text-right text-sm">Grade Point</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {studentResults.map((s) => (
          <TableRow key={s.courseCode}>
            <TableCell className=" text-xs text-neutral-600">
              {s.courseCode}
            </TableCell>
            <TableCell className=" text-xs text-neutral-600">
              {s.courseTitle}
            </TableCell>
            <TableCell className=" text-xs text-neutral-600">
              {s.credit}
            </TableCell>
            <TableCell className="text-right text-xs text-neutral-600">
              {s.grade}
            </TableCell>
            <TableCell className="text-right text-xs text-neutral-600">
              {s.gradePoint}
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell colSpan={5}>
            <div className="flex flex-wrap gap-14">
              <span className="font-medium text-xs flex items-center gap-4">
                Total Credit Requirement:
                <span className="text-blue-900">9</span>
              </span>
              <span className="font-medium text-xs flex items-center gap-4">
                Total Credit Taken: <span className="text-blue-900">12</span>
              </span>
              <span className="font-medium text-xs flex items-center gap-4">
                CGPA: <span className="text-blue-900">4.78</span>
              </span>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
