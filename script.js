document.addEventListener("DOMContentLoaded", function () {
    const articlesContainer = document.getElementById("linkedin-articles");
    
    // Replace with your LinkedIn article links
    const articles = [
        { title: "Talent Myth", url: "https://www.linkedin.com/posts/its-rahulms_the-talent-myth-hard-work-or-cosmic-luck-activity-7303351491442946048-opW5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiq1scBIlDT9ipmQLdOduGsCCnk7fN3TP8" },
        { title: "Wheres the AI", url: "https://www.linkedin.com/posts/its-rahulms_hopelesscore-on-instagram-hopecore-fy-activity-7303393668499968000-Foyu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiq1scBIlDT9ipmQLdOduGsCCnk7fN3TP8" }
	{ title: "Stress", url: "www.linkedin.com/posts/its-rahulms_stress-doesnt-come-from-hard-workit-comes-activity-7303595246901239808-qdt_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiq1scBIlDT9ipmQLdOduGsCCnk7fN3TP8" },
        { title: "Keep Going", url: "www.linkedin.com/posts/its-rahulms_the-year-that-changes-everything-i-recently-activity-7303685862507089920-nQpi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiq1scBIlDT9ipmQLdOduGsCCnk7fN3TP8" }
	{ title: "Queens Gambit", url: "www.linkedin.com/posts/its-rahulms_queens-gambit-why-women-supporting-women-activity-7303844388797878273-HLzB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiq1scBIlDT9ipmQLdOduGsCCnk7fN3TP8" },
        { title: "Are we Really Living", url: "https://linkedin.com" }
    ];

    articles.forEach(article => {
        const articleElement = document.createElement("p");
        articleElement.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
        articlesContainer.appendChild(articleElement);
    });
});
