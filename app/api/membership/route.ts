// app/api/membership/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Example: Log form data (you can replace this with database logic)
    console.log("Received form data:", formData);

    // Return a success response
    return NextResponse.json({ message: "Form submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error handling the form submission:", error);
    return NextResponse.json({ message: "An error occurred." }, { status: 500 });
  }
}
