//numeric enum
enum RequestType {
  ReadData,
  SaveDate,
  DeleteData,
}

//console.log(RequestType);

// string enum

enum RequestType2 {
  readData = "Read_Data",
  deleteData = "Delete_Data",
}
console.log(RequestType2.deleteData);
console.log(RequestType2["readData"]);

//hetergenous enum

enum RequestType3 {
  readData = "Read_Data",
  deleteData = "Delete_Data",
  id = 101,
}

console.log(RequestType3);
