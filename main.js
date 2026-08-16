const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll("nav a");

const options = {
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0.0
}

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            activeSection = entry.target.id;
            history.pushState({}, "", "#" + activeSection);
            navList.forEach(a => {
                a.classList.remove("active");
                if (a.getAttribute("href").slice(1) == activeSection) {
                    a.classList.add("active");
                }
            });
        }
    });
}

const observer = new IntersectionObserver(callback, options)

sections.forEach(section => observer.observe(section));