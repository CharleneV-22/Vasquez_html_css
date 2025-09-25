document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', toggleAccordion);
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordion.call(this);
            }
        });
    });

    function toggleAccordion() {
        const item = this.parentElement;
        const content = item.querySelector('.accordion-content');
        const isActive = item.classList.contains('active');

        // Close all other items (optional: for exclusive accordion behavior)
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
        const ariaExpanded = item.classList.contains('active');
        this.setAttribute('aria-expanded', ariaExpanded ? 'true' : 'false');

        // Optional: Dynamically adjust max-height for smoother animation (if content height varies)
        if (ariaExpanded) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '85';
        }
    }
});
