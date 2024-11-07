
var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
    branch: "main",
    repo: "https://github.com/YolandaQingniu/QNSDK_DOC_RENPHO.git"
  },
  function(err) {
    if (err) {
      console.error("GitHub 更新失败:", err);
    } else {
      console.log("GitHub 更新成功！");
    }
  }
);
