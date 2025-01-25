const universities = [
    {
        name: "Stanford University",
        image: "https://via.placeholder.com/150",
        link: "https://www.stanford.edu",
        admissionRate: "4%",
        location: "California, USA",
        cost: "$53,529 per year",
        timeToDegree: "4 years",
        description: "Renowned for technology, engineering, law, and business programs.",
        focus: ["Engineering", "Business", "Law", "Sciences"],
    },
    {
        name: "Harvard University",
        image: "https://via.placeholder.com/150",
        link: "https://www.harvard.edu",
        admissionRate: "5%",
        location: "Massachusetts, USA",
        cost: "$50,420 per year",
        timeToDegree: "4 years",
        description: "Top-ranked university globally, excelling in law, medicine, and business.",
        focus: ["Law", "Business", "Sciences"],
    },
    {
        name: "University of Oxford",
        image: "https://via.placeholder.com/150",
        link: "https://www.ox.ac.uk",
        admissionRate: "17%",
        location: "Oxford, England",
        cost: "£9,250 (UK students), £26,770–£37,510 (international students)",
        timeToDegree: "3-4 years",
        description: "World-class education and research opportunities, particularly in law and arts.",
        focus: ["Arts", "Sciences", "Business", "Law"],
    },
    {
        name: "University of Cambridge",
        image: "https://via.placeholder.com/150",
        link: "https://www.cam.ac.uk",
        admissionRate: "20%",
        location: "Cambridge, England",
        cost: "£9,250 (UK students), £22,227 (international students)",
        timeToDegree: "3-4 years",
        description: "A globally renowned university with top-notch law, science, and business programs.",
        focus: ["Engineering", "Sciences", "Business", "Law"],
    },
    {
        name: "University of Tokyo",
        image: "https://via.placeholder.com/150",
        link: "https://www.u-tokyo.ac.jp",
        admissionRate: "21%",
        location: "Tokyo, Japan",
        cost: "¥535,800 per year",
        timeToDegree: "4 years",
        description: "Japan's leading university, excelling in law, science, and humanities.",
        focus: ["Sciences", "Engineering", "Law", "Arts"],
    },
    {
        name: "National University of Singapore",
        image: "https://via.placeholder.com/150",
        link: "https://www.nus.edu.sg",
        admissionRate: "27%",
        location: "Singapore",
        cost: "SGD 15,000–$30,000 per year",
        timeToDegree: "4 years",
        description: "Asia's leading university, excelling in law, engineering, and sciences.",
        focus: ["Engineering", "Sciences", "Business", "Law"],
    },
    {
        name: "University of Melbourne",
        image: "https://via.placeholder.com/150",
        link: "https://www.unimelb.edu.au",
        admissionRate: "38%",
        location: "Melbourne, Australia",
        cost: "AUD 30,000–$40,000 per year",
        timeToDegree: "3 years (bachelor's), 2 years (master's)",
        description: "Australia's top university with strong law and research capabilities.",
        focus: ["Arts", "Business", "Sciences", "Law"],
    },
    {
        name: "University of Toronto",
        image: "https://via.placeholder.com/150",
        link: "https://www.utoronto.ca",
        admissionRate: "43%",
        location: "Toronto, Canada",
        cost: "CAD 6,100–$45,000 per year",
        timeToDegree: "4 years",
        description: "Top Canadian university offering diverse programs, including law and arts.",
        focus: ["Engineering", "Arts", "Sciences", "Law"],
    },
    {
        name: "University of Cape Town",
        image: "https://via.placeholder.com/150",
        link: "https://www.uct.ac.za",
        admissionRate: "45%",
        location: "Cape Town, South Africa",
        cost: "R75,000 per year",
        timeToDegree: "3 years",
        description: "Premier university in Africa, excelling in law, commerce, and arts.",
        focus: ["Business", "Arts", "Law"],
    },
    {
        name: "Tsinghua University",
        image: "https://via.placeholder.com/150",
        link: "https://www.tsinghua.edu.cn",
        admissionRate: "16%",
        location: "Beijing, China",
        cost: "CNY 40,000 per year",
        timeToDegree: "4 years",
        description: "Known for its engineering and law programs.",
        focus: ["Engineering", "Sciences", "Law"],
    },
    {
        name: "University of Hong Kong",
        image: "https://via.placeholder.com/150",
        link: "https://www.hku.hk",
        admissionRate: "18%",
        location: "Hong Kong",
        cost: "HKD 42,100 per year",
        timeToDegree: "4 years",
        description: "Premier university in Asia, excelling in law, sciences, and business.",
        focus: ["Sciences", "Business", "Engineering", "Law"],
    },
    {
        name: "University of British Columbia",
        image: "https://via.placeholder.com/150",
        link: "https://www.ubc.ca",
        admissionRate: "46%",
        location: "Vancouver, Canada",
        cost: "CAD 5,000–$30,000 per year",
        timeToDegree: "4 years",
        description: "A leading global university with law, arts, and engineering programs.",
        focus: ["Arts", "Engineering", "Sciences", "Law"],
    },
    {
        name: "University of Sydney",
        image: "https://via.placeholder.com/150",
        link: "https://www.sydney.edu.au",
        admissionRate: "30%",
        location: "Sydney, Australia",
        cost: "AUD 30,000–$50,000 per year",
        timeToDegree: "4 years",
        description: "Australia's oldest university, known for research and top law programs.",
        focus: ["Sciences", "Business", "Arts", "Law"],
    },
    {
        name: "Seoul National University",
        image: "https://via.placeholder.com/150",
        link: "https://en.snu.ac.kr",
        admissionRate: "24%",
        location: "Seoul, South Korea",
        cost: "KRW 6,000,000 per year",
        timeToDegree: "4 years",
        description: "South Korea's top university, offering strong law and global research programs.",
        focus: ["Engineering", "Business", "Law"],
    },
    {
        name: "National Taiwan University",
        image: "https://via.placeholder.com/150",
        link: "https://www.ntu.edu.tw",
        admissionRate: "20%",
        location: "Taipei, Taiwan",
        cost: "TWD 40,000 per semester",
        timeToDegree: "4 years",
        description: "Taiwan's leading university, excelling in law, arts, and sciences.",
        focus: ["Sciences", "Arts", "Law"],
    },
    {
        name: "University of São Paulo",
        image: "https://via.placeholder.com/150",
        link: "https://www.usp.br",
        admissionRate: "20%",
        location: "São Paulo, Brazil",
        cost: "Free for Brazilian students",
        timeToDegree: "4 years",
        description: "Latin America's top university for law and innovation research.",
        focus: ["Sciences", "Arts", "Law"],
    },
    {
        name: "University of Auckland",
        image: "https://via.placeholder.com/150",
        link: "https://www.auckland.ac.nz",
        admissionRate: "45%",
        location: "Auckland, New Zealand",
        cost: "NZD 6,000–$30,000 per year",
        timeToDegree: "3 years",
        description: "New Zealand's leading university, known for law and business programs.",
        focus: ["Arts", "Sciences", "Business", "Law"],
    },
];

let favorites = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("homeLink").addEventListener("click", showLandingPage);
    document.getElementById("quizLink").addEventListener("click", showQuizPage);
    document.getElementById("searchLink").addEventListener("click", showSearchPage);
    document.getElementById("favoritesLink").addEventListener("click", showFavoritesPage);
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) document.body.classList.add(savedTheme);

    showLandingPage(); // Default to Home page
});

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark-mode" : "");
}

function showLandingPage() {
    console.log("Home page loaded");
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="section">
            <h2>Welcome to University Finder</h2>
            <p>Discover the perfect university tailored to your needs. Take a quiz, search, or explore your favorites!</p>
            <button onclick="showQuizPage()">Take the Quiz</button>
            <button onclick="showSearchPage()">Search Universities</button>
        </div>
    `;
}

function showQuizPage() {
    console.log("Quiz page loaded");
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="section">
            <h2>Find Your Ideal University</h2>
            <label for="field">Preferred Field of Study:</label>
            <select id="field">
                <option value="Engineering">Engineering</option>
                <option value="Business">Business</option>
                <option value="Law">Law</option>
                <option value="Sciences">Sciences</option>
            </select>
            <label for="location">Preferred Location:</label>
            <select id="location">
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
            </select>
            <label for="budget">Maximum Tuition Cost:</label>
            <select id="budget">
                <option value="20000">Up to $20,000</option>
                <option value="50000">Up to $50,000</option>
                <option value="100000">Up to $100,000</option>
            </select>
            <button onclick="processQuiz()">Find Universities</button>
        </div>
    `;
}

function showSearchPage() {
    console.log("Search page loaded");
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="section">
            <h2>Search Universities</h2>
            <input type="text" id="searchBar" placeholder="Type a university name..." onkeyup="filterUniversities()" />
            <div id="searchResults"></div>
        </div>
    `;
    displayAllUniversities();
}

function showFavoritesPage() {
    console.log("Favorites page loaded");
    const content = document.getElementById("content");
    content.innerHTML = favorites.length
        ? favorites
              .map(
                  (uni) => `
            <div class="university-card">
                <img src="${uni.image}" alt="${uni.name}">
                <div class="info">
                    <h3>${uni.name}</h3>
                    <p>${uni.description}</p>
                    <a href="${uni.link}" target="_blank">Learn More</a>
                </div>
            </div>
        `
              )
              .join("")
        : "<p>You have no favorites yet. Start exploring universities!</p>";
}

function displayAllUniversities() {
    const results = document.getElementById("searchResults");
    results.innerHTML = universities
        .map(
            (uni) => `
        <div class="university-card">
            <img src="${uni.image}" alt="${uni.name}">
            <div class="info">
                <h3>${uni.name}</h3>
                <p>${uni.description}</p>
                <a href="${uni.link}" target="_blank">Learn More</a>
            </div>
        </div>
    `
        )
        .join("");
}

function filterUniversities() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const filtered = universities.filter((uni) => uni.name.toLowerCase().includes(query));
    const results = document.getElementById("searchResults");
    results.innerHTML = filtered.length
        ? filtered
              .map(
                  (uni) => `
            <div class="university-card">
                <img src="${uni.image}" alt="${uni.name}">
                <div class="info">
                    <h3>${uni.name}</h3>
                    <p>${uni.description}</p>
                    <a href="${uni.link}" target="_blank">Learn More</a>
                </div>
            </div>
        `
              )
              .join("")
        : "<p>No universities found. Try searching again!</p>";
}
