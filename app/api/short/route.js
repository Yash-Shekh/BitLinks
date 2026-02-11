import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;   // ✅ no parentheses
  const db = client.db("BitLinks");
  const collection = db.collection("URL");
  const shorturl = body.shorturl.trim().toLowerCase();


  // check if the short url exists
  const existing = await collection.findOne({ shorturl: shorturl });
  if (existing) {
    return Response.json({ success: false, error: true, message: "Short URL already exists" }, { status: 400 });
  }

  await collection.insertOne({
    url: body.url,
    shorturl: shorturl,
  });

  return Response.json({ success: true, error: false, message: "finished" });
}

// import clientPromise from "@/lib/mongodb";

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     if (!body?.url || !body?.shorturl) {
//       return Response.json(
//         { success: false, error: true, message: "Missing fields" },
//         { status: 400 }
//       );
//     }

//     let shorturl = body.shorturl.trim().toLowerCase();

//     try {
//       new URL(body.url);
//     } catch {
//       return Response.json(
//         { success: false, error: true, message: "Invalid URL" },
//         { status: 400 }
//       );
//     }

//     const client = await clientPromise;
//     const db = client.db("BitLinks");
//     const collection = db.collection("URL");

//     const existing = await collection.findOne({ shorturl });
//     if (existing) {
//       return Response.json(
//         { success: false, error: true, message: "Short URL already exists" },
//         { status: 409 }
//       );
//     }

//     await collection.insertOne({ shorturl, url: body.url });

//     return Response.json({
//       success: true,
//       error: false,
//       shorturl
//     });
//   } catch (err) {
//     return Response.json(
//       { success: false, error: true, message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
