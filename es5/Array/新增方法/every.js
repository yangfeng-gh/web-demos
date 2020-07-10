var database = {
  users: ["张含韵", "江一燕", "李小璐"],
  sendEmail: function (user) {
    if (this.isValidUser(user)) {
      console.log("你好，" + user);
    } else {
      console.log("抱歉，"+ user +"，你不是本家人");
    }
  },
  isValidUser: function (user) {
    return /^张/.test(user);
  }
};

// 给每个人法邮件
database.users.forEach(  // database.users中人遍历
  database.sendEmail,    // 发送邮件
  database               // 使用database代替上面标红的this
);
