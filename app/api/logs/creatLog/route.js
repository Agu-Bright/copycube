import User from "@models/user";
import connectDB from "@utils/connectDB";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Log from "@models/log";
import Category from "@models/Category";

export const POST = async (req, res) => {
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
  if (session?.user?.role !== "admin") {
    return Response.json({ message: "Unauthorized Route" }, { status: 401 });
  }
  try {
    await connectDB;
    const body = await req.json();

    const category = await Category.findOne({ catType: body.catType });
    if (!category) {
      return new Response(
        JSON.stringify({ success: false, message: "Category Doesn't Exist" }),
        { status: 500 }
      );
    }
    console.log("category", category);
    const logs = await Log.create({
      social: body.social,
      description: body.description,
      logs: body.logs,
      category: category._id,
      price: body?.price,
      image: body?.image,
    });
    return new Response(JSON.stringify({ success: true, logs }), {
      status: 200,
    });
  } catch (error) {
    if ((error.code = 11000 && error.keyPattern && error.keyValue)) {
      return new Response(
        JSON.stringify({ success: false, message: "User already exist" }),
        { status: 500 }
      );
    }
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
};
