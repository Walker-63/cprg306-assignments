import StudentInfo from "./StudentInfo";
import Link from "next/link";


export default function page() {
  return(
    <main>

        <h1>
          CPRG 306: Web Development 2 - Assignments
        </h1>

        <StudentInfo />

        <div>

          <Link href="week2">
            Week 2
          </Link> 

          <p></p>
          
          <Link href="week3">
            Week 3
          </Link>

        </div>
    </main>
  )
}