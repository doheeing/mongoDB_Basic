const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const users = database.collection(`users`);

  // const userData = await users.insertOne({name :'dohee', age : '20'})
  // console.log("result", userData);

  //   const userList = [
  //     { name: "철수", age: 30 },
  //     { name: "제시카", age: 25 },
  //   ];
  //   const userListResult = await users.insertMany(userList);
  //   console.log("result", userListResult);

  // const findUser = await users.findOne({age :{$gt : 20}});
  // console.log("result", findUser);

  //   const updateUser = await users.updateOne(
  //     { name: "dohee" },
  //     { $set: { age: 18 } }
  //   );
  //   console.log("result", updateUser);

//   const deleteUser = await users.deleteMany({ age: { $gt: 20 } });
//   console.log("result", deleteUser);

const userData = await users.find({name:"dohee"}).project({name :1, _id:0}).toArray();
console.log("userData", userData);
}
run();
