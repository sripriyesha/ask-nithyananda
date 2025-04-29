document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const qaList = document.getElementById('qaList');
    const qaItems = document.querySelectorAll('.qa-item');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        qaItems.forEach(item => {
            const question = item.querySelector('.question').textContent.toLowerCase();
            const answer = item.querySelector('.answer').textContent.toLowerCase();
            const date = item.querySelector('.date').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || 
                answer.includes(searchTerm) || 
                date.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}); 