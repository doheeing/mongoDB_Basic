const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const student = database.collection(`student`);

  // const studentList = [
  //   { _id: 1, test1: 95, test2: 92, test3: 90, modified: new Date("01/05/2020") },
  //   {
  //     _id: 2,
  //     test1: 98,
  //     test2: 100,
  //     test3: 102,
  //     modified: new Date("01/05/2020"),
  //   },
  //   { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") },
  // ];

  // const studentListData = await student.insertMany(studentList);
  // console.log("result", studentListData);

  // const studentUpdate = await student.updateOne(
  //     {_id : 3},
  //     {$set:{test3 : 98}}
  // );
  // console.log("result", studentUpdate);

//   const studentUpdate = await student.updateMany(
//     {},
//     { $set: { test1: 0, status: "modified" } }
//   );
//   console.log("result", studentUpdate);

// const studentDelete = await student.deleteOne({test2 : 92})
// console.log("result", studentDelete);

const studentDelete = await student.deleteMany({ test1: 0 });
console.log("result", studentDelete);
}

run();
