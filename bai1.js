const listCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generatorId(length, prefix = "") {
  if (!Number.isInteger(length) || length <= 0 || length >= 100) {
    console.log("length phải là số nguyên dương nhỏ hơn 100");
    return;
  }

  let strRandom = "";
  const lengthList = listCharacters.length;

  for (let i = 0; i < length; i++) {
    strRandom += listCharacters[Math.floor(Math.random() * lengthList)];
  }
  return prefix + strRandom;
}
console.log(generatorId(8, "user")); // Output: "user5a3Fb2DF"
console.log(generatorId(4, "product - ")); // Output: "product - 3a2f"
console.log(generatorId(10)); // Output: "5a3Fb2DFc1"
