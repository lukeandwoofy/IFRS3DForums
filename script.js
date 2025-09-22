function showPostForm(category) {
    document.getElementById(category + '-form').style.display = 'block';
}

// Placeholder for form submission (add actual backend integration here)
document.querySelectorAll('.post-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Post submitted! (This is a demo; no real posting occurs.)');
    });
});
