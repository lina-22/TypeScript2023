let userId: string | number | boolean;

userId = "101";
userId = 101;
userId = true;

function dispalyUserInfo(userId: string | number) {
  console.log(userId);
}

dispalyUserInfo("101");
dispalyUserInfo(101);
