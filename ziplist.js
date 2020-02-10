const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(test1, test2) {
  const result = [];
  for (let i = 0; i < test1.length; i++) {
    result.push(test1[i], test2[i]);
  }
  return result;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(test1, test2) {
  return _.flatten(_.zip(test1, test2));
}

console.log(zipListTheSimpleWay(list1, list2));
