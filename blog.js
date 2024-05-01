document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const showLessButtons = document.querySelectorAll('.show-less-btn');

    readMoreButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const article = this.parentNode;
            const excerpt = article.querySelector('.section-description');
            const fullArticle = article.querySelector('.full-article');
            const showLessButton = article.querySelector('.show-less-btn');

            excerpt.style.display = 'none';
            fullArticle.style.display = 'block';
            this.style.display = 'none';
            showLessButton.style.display = 'inline-block'; // Show the "Show Less" button
        });
    });

    showLessButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const article = this.parentNode;
            const excerpt = article.querySelector('.section-description');
            const fullArticle = article.querySelector('.full-article');
            const readMoreButton = article.querySelector('.read-more-btn');

            excerpt.style.display = 'block';
            fullArticle.style.display = 'none';
            this.style.display = 'none';
            readMoreButton.style.display = 'inline-block'; // Show the "Read More" button
        });
    });
});
