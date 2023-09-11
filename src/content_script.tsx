const contentTable = document.querySelector("body")!;
const link = document.createElement("a");
link.href = "https://www.google.com";
link.innerHTML = "Google";
contentTable.replaceWith(link);
