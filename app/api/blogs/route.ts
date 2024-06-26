import Blog from "@/databases/mongoDB/models/blogModel";
import ConnectMongoDB from "@/databases/mongoDB/mongodb";
import { NextRequest } from "next/server";
import slugify from "slugify";

ConnectMongoDB();

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("slug");
  const categoryNames = searchParams.getAll("category");
  const type = searchParams.get("type");

  if (query != null) {
    try {
      const blog = await Blog.findOne({
        slug: query,
      });
      return Response.json(blog);
    } catch (error) {
      console.log(error);
      return Response.json({ message: "Not Found" });
    }
  } else {
    try {
      let query: any = {};
      if (categoryNames.length > 0) {
        query = { categories: { $all: categoryNames } };
      }
      if (type) {
        query.type = type;
      }
      const blogs = await Blog.find(query);
      return Response.json(blogs);
    } catch (error) {
      console.log(error);
      return Response.json({ message: "Not Found" });
    }
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  body.slug = slugify(body.title);
  try {
    const blog = await Blog.create(body);
    return Response.json(blog);
  } catch (error) {
    console.log(error);
  }
};
