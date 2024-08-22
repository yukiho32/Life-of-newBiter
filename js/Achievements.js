function toggleDetails(item) {
    const details = item.querySelector('.achievement-details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    }
    else {
        details.style.display = 'none';
    }
}
