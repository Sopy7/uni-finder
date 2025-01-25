const universities = [
    {
        name: "Stanford University",
        image: "https://via.placeholder.com/150",
        link: "https://www.stanford.edu",
        admissionRate: "4%",
        location: "California, USA",
        cost: "$53,529 per year",
        timeToDegree: "4 years",
        description: "Renowned for technology, engineering, and business programs.",
        focus: ["Engineering", "Business", "Sciences"],
    },
    {
        name: "University of Oxford",
        image: "https://via.placeholder.com/150",
        link: "https://www.ox.ac.uk",
        admissionRate: "17%",
        location: "Oxford, England",
        cost: "£9,250 (UK students), £26,770–£37,510 (international students)",
        timeToDegree: "3-4 years",
        description: "World-class education and research opportunities.",
        focus: ["Arts", "Sciences", "Business"],
    },
   
];


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("homeLink").addEventListener("click", showLandingPage);
    document.getElementById("quizLink").addEventListener("click", showQuizPage);
    document.getElementById("searchLink").addEventListener("click", showSearchPage);

    showLandingPage();
});


function showLandingPage() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="landing-page">
            <h2>Welcome to University Finder</h2>
            <p>Discover the best universities tailored to your needs. Take our quiz to get personalized recommendations or search for specific universities worldwide.</p>
            <button onclick="showQuizPage()">Take the Quiz</button>
            <button onclick="showSearchPage()">Search Universities</button>
        </div>
    `;
}


function showQuizPage() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="test-section">
            <h2>University Finder Quiz</h2>
            <form id="quizForm">
                <div class="question">
                    <label for="field">What is your preferred field of study?</label>
                    <select id="field">
                        <option value="Engineering">Engineering</option>
                        <option value="Business">Business</option>
                        <option value="Arts">Arts</option>
                        <option value="Sciences">Sciences</option>
                    </select>
                </div>
                <div class="question">
                    <label for="location">Preferred location?</label>
                    <select id="location">
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                </div>
                <div class="question">
                    <label for="budget">Maximum annual tuition cost?</label>
                    <select id="budget">
                        <option value="20000">Up to $20,000</option>
                        <option value="50000">Up to $50,000</option>
                        <option value="100000">Up to $100,000</option>
                    </select>
                </div>
                <button type="button" onclick="processQuiz()">Submit Quiz</button>
            </form>
        </div>
    `;
}


function processQuiz() {
    const field = document.getElementById("field").value;
    const location = document.getElementById("location").value;
    const budget = parseInt(document.getElementById("budget").value);

    const filteredUniversities = universities.filter((uni) => {
        const cost = parseInt(uni.cost.replace(/[^0-9]/g, ""));
        return (
            uni.focus.includes(field) &&
            uni.location.toLowerCase().includes(location.toLowerCase()) &&
            cost <= budget
        );
    });

    displayResults(filteredUniversities);
}

function displayResults(universities) {
    const content = document.getElementById("content");
    content.innerHTML = universities.length
        ? universities
              .map(
                  (uni) => `
                <div class="university-card">
                    <img src="${uni.image}" alt="${uni.name}">
                    <div class="info">
                        <h3>${uni.name}</h3>
                        <p><strong>Location:</strong> ${uni.location}</p>
                        <p><strong>Cost:</strong> ${uni.cost}</p>
                        <p><strong>Time to Degree:</strong> ${uni.timeToDegree}</p>
                        <p><strong>Admission Rate:</strong> ${uni.admissionRate}</p>
                        <p>${uni.description}</p>
                        <a href="${uni.link}" target="_blank">Visit Website</a>
                    </div>
                </div>
            `
              )
              .join("")
        : "<p>No universities match your criteria. Please refine your preferences.</p>";
}
