const onClickAdd = () => {
  const inputText = document.querySelector(".input-text").value;
  document.querySelector(".input-text").value = "";

  const completeButton = document.createElement("button");
  completeButton.addEventListener("click", () => {
    const ulCompleted = document.querySelector(".complete-list")
    div.removeChild(completeButton);
    div.removeChild(deleteButton);
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener('click', () => {
      div.removeChild(backButton);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);
      ul.appendChild(div);
    })
    div.appendChild(backButton);
    ulCompleted.appendChild(div);
  });
  completeButton.innerText = "完了";
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.querySelector(".incomplete-list").removeChild(deleteTarget);
  });
  deleteButton.innerText = "削除";

  const div = document.createElement("div");
  div.className = "list-row"
  const li = document.createElement("li");
  li.innerText = inputText;

  // ulの子要素にdivを追加
  const ul = document.querySelector(".incomplete-list")
  ul.appendChild(div);

  // divの子要素にタグを追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
}

document.querySelector(".add-button").addEventListener("click", () => onClickAdd());