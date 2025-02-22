"use server"

export async function greetUser(formData: FormData) {
  const name = formData.get("name") as string
  return `Hello ${name}!`
}

