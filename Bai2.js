function highlightKeyword(content, keyword) {
  if (
    typeof content !== "string" ||
    typeof keyword !== "string" ||
    keyword.trim() === ""
  ) {
    return "Invalid";
  }

  const regex = new RegExp(keyword, "gi");

  return content.replace(regex, "<strong>$&</strong>");
}

console.log(
  highlightKeyword(
    "Học JavaScript không khó, Học javascript khó đã có CodeFarm lo, CodeFarm - Học là có việc!",
    "javascript",
  ),
);

console.log(highlightKeyword(123, "JS"));

console.log(highlightKeyword("Đoạn văn này không có từ đó", "javascript"));
