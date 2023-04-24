//numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 0] = "ReadData";
    RequestType[RequestType["SaveDate"] = 1] = "SaveDate";
    RequestType[RequestType["DeleteData"] = 2] = "DeleteData";
})(RequestType || (RequestType = {}));
//console.log(RequestType);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["deleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.deleteData);
console.log(RequestType2["readData"]);
//hetergenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read_Data";
    RequestType3["deleteData"] = "Delete_Data";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
