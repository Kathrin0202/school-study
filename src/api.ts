export async function getCourses() {
  const response = await fetch("https://logiclike.com/docs/courses.json", {
    method: "GET",
  });

  if (response.status === 200) {
    return response.json();
  }

 else {
    throw new Error("Курсы не найдены");
  }
}
