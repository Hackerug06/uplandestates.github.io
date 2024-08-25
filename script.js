let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    if (index >= testimonials.length) {
        currentTestimonialIndex = 0;
    } else if (index < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    } else {
        currentTestimonialIndex = index;
    }
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
    });
}

function prevTestimonial() {
    showTestimonial(currentTestimonialIndex - 1);
}

function nextTestimonial() {
    showTestimonial(currentTestimonialIndex + 1);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    this.reset();
});
