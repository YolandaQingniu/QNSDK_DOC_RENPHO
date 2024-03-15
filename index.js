var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
    branch: "main",
    repo: "https://github.com/YolandaQingniu/QNSDK_DOC_RENPHO.git"
  },
  function(err) {
    console.log("github更新" + err);
  }
);
