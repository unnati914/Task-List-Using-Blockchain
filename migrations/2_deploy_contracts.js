var TaskList = artifacts.require("./TaskList.sol");

module.exports = function(deployer) {
  deployer.deploy(TaskList);
};
