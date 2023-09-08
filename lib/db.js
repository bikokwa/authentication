import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  let client;
  try {
    client = await MongoClient.connect(
      "mongodb+srv://m001-student:gCtumjzxv65FHfXe@sandbox.i9yi5.mongodb.net/authentiq?retryWrites=true&w=majority"
    );

    return client;
  } catch (error) {}
}
