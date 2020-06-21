// simple localStorage database
function set (itemName, itemValue) {
  let databaseString = localStorage.getItem("an-awesome-localstorage-db");
  let databaseObject = databaseString ? JSON.parse(databaseString) : {};
  databaseObject[itemName] = itemValue;
  localStorage.setItem("an-awesome-localstorage-db", JSON.stringify(databaseObject));
  return itemValue;
}

function get (itemName) {
  let databaseString = localStorage.getItem("an-awesome-localstorage-db");
  let databaseObject = databaseString ? JSON.parse(localStorage.getItem("an-awesome-localstorage-db")) : {};
  return databaseObject[itemName];
}

function increment (itemName) {
  let num = get(itemName) || 0;
  num++;
  set(itemName, num);
  return num;
}

export default {
  set,
  get,
  increment
}
