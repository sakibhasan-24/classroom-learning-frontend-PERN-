export const DEPARTMENT=[
    "CS",
    "Software Engineering",
    "Information Technology",
    "MATH",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
    "Economics",
    "Political Science",
    "Psychology",
    "Sociology",
    "Anthropology",
    "Philosophy",
    "Religion",
    "Art",
    "Music",
    "Theatre",
    "Film",


]


export const DEPARTMENT_OPTION=DEPARTMENT.map((dept)=>{
    return {
        label:dept,
        value:dept
    }
})