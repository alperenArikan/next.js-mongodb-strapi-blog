import { connectToDatabase } from "../../../util/mongodb";
export default async (req, res) => {

  const {page,limit} = req.query
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("posts")
    .find({})
    .limit(+limit)
    .skip(page*3)
    .toArray();

  res.json(movies);
};


