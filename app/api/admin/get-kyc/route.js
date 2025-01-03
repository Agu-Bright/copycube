import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import connectDB from "@utils/connectDB";
import { NextResponse } from "next/server";
import Order from "@models/order";
import Log from "@models/log";
import Kyc from "@models/kyc";
export const GET = async (req) => {
  //check if user is authenticated
  const session = await getServerSession(
    req,
    {
      ...NextResponse,
      getHeader: (name) => NextResponse.headers?.get(name),
      setHeader: (name, value) => NextResponse.headers?.set(name, value),
    },
    authOptions
  );
  if (!session) {
    return Response.json(
      { message: "You must be logged in." },
      { status: 401 }
    );
  }
  if (session?.user.role !== "admin") {
    return Response.json({ message: "Unauthorized route" }, { status: 409 });
  }
  try {
    await connectDB;
    const kyc = await Kyc.find();
    const kycs = kyc.reverse();
    return Response.json({ message: "success", kycs }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
