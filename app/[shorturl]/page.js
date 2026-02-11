import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { shorturl } = await params;
  
  const client = await clientPromise;
  const db = client.db("BitLinks");
  const collection = db.collection("URL");

  const doc = await collection.findOne({ shorturl });

  console.log("PARAM:", shorturl);

  const docs = await collection.findOne({ shorturl });

  console.log("DOC:", docs);

  if (!doc?.url) {
    redirect("/");
  }

  redirect(doc.url);
}
