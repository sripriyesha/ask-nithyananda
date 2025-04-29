// DOM Elements
const searchInput = document.getElementById("searchInput");
const qaList = document.getElementById("qaList");

// Event Listeners
searchInput.addEventListener("input", searchQA);

function searchQA() {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredData = qaData.filter((item) => {
    const question = item.question.toLowerCase();
    const answer = item.answer.toLowerCase();
    const date = new Date(item.date).toLocaleDateString().toLowerCase();

    return (
      question.includes(searchTerm) ||
      answer.includes(searchTerm) ||
      date.includes(searchTerm)
    );
  });

  renderQA(filteredData);
}
