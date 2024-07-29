import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// imp: if we remove paramater then next.js automatically cache output of endpoint, so to prevent it we have to keep parameter
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json(users);
}
