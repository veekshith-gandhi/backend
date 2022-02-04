const users = [
  "boss",
  "veekshith",
  "gandhi",
  "rahul",
  "sunil",
  "rohith",
  "manu",
  "veer",
  "zara",
  "suoap",
];

function getAllUsers() {
  return users;
}
function getUser(index) {
  if (index >= 0 && index <= users.length) {
    return users[index];
  } else {
    return null;
  }
}
function addUsers(name) {
  users.push(name);
  return users;
}

module.exports = {
  getAllUsers,
  getUser,
  addUsers,
};
