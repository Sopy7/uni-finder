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
            {
                name: "University of Tokyo",
                image: "https://via.placeholder.com/150",
                link: "https://www.u-tokyo.ac.jp",
                admissionRate: "21%",
                location: "Tokyo, Japan",
                cost: "¥535,800 per year",
                timeToDegree: "4 years",
                description: "Japan's leading university, excelling in science and humanities.",
                focus: ["Sciences", "Engineering", "Arts"],
            },
            {
                name: "ETH Zurich",
                image: "https://via.placeholder.com/150",
                link: "https://ethz.ch",
                admissionRate: "27%",
                location: "Zurich, Switzerland",
                cost: "$1,500 per year",
                timeToDegree: "3 years (bachelor's), 2 years (master's)",
                description: "Premier university for science, engineering, and technology.",
                focus: ["Engineering", "Sciences"],
            },
            {
                name: "University of Melbourne",
                image: "https://via.placeholder.com/150",
                link: "https://www.unimelb.edu.au",
                admissionRate: "38%",
                location: "Melbourne, Australia",
                cost: "AUD 30,000–$40,000 per year",
                timeToDegree: "3 years (bachelor's), 2 years (master's)",
                description: "Australia's top university with strong research capabilities.",
                focus: ["Arts", "Business", "Sciences"],
            },
            {
                name: "University of Cape Town",
                image: "https://via.placeholder.com/150",
                link: "https://www.uct.ac.za",
                admissionRate: "45%",
                location: "Cape Town, South Africa",
                cost: "R75,000 per year",
                timeToDegree: "3 years",
                description: "Premier university in Africa, excelling in law and commerce.",
                focus: ["Business", "Arts"],
            },
            {
                name: "National University of Singapore",
                image: "https://via.placeholder.com/150",
                link: "https://www.nus.edu.sg",
                admissionRate: "27%",
                location: "Singapore",
                cost: "SGD 15,000–$30,000 per year",
                timeToDegree: "4 years",
                description: "Asia's leading university with a global focus.",
                focus: ["Engineering", "Sciences", "Business"],
            },
            {
                name: "University of Toronto",
                image: "https://via.placeholder.com/150",
                link: "https://www.utoronto.ca",
                admissionRate: "43%",
                location: "Toronto, Canada",
                cost: "CAD 6,100–$45,000 per year",
                timeToDegree: "4 years",
                description: "Top Canadian university with diverse programs.",
                focus: ["Engineering", "Arts", "Sciences"],
            },
            {
                name: "Tsinghua University",
                image: "https://via.placeholder.com/150",
                link: "https://www.tsinghua.edu.cn",
                admissionRate: "16%",
                location: "Beijing, China",
                cost: "CNY 40,000 per year",
                timeToDegree: "4 years",
                description: "Known for its engineering and science programs.",
                focus: ["Engineering", "Sciences"],
            },
            {
                name: "University of São Paulo",
                image: "https://via.placeholder.com/150",
                link: "https://www.usp.br",
                admissionRate: "20%",
                location: "São Paulo, Brazil",
                cost: "Free for Brazilian students",
                timeToDegree: "4 years",
                description: "Latin America's top university for innovation and research.",
                focus: ["Sciences", "Arts"],
            },
            {
                name: "Technical University of Munich",
                image: "https://via.placeholder.com/150",
                link: "https://www.tum.de",
                admissionRate: "20%",
                location: "Munich, Germany",
                cost: "€144 per semester",
                timeToDegree: "3 years (bachelor's), 2 years (master's)",
                description: "Highly ranked for engineering, science, and medicine.",
                focus: ["Engineering", "Sciences"],
            },
            {
                name: "University of Auckland",
                image: "https://via.placeholder.com/150",
                link: "https://www.auckland.ac.nz",
                admissionRate: "45%",
                location: "Auckland, New Zealand",
                cost: "NZD 6,000–$30,000 per year",
                timeToDegree: "3 years",
                description: "New Zealand's leading university with strong research focus.",
                focus: ["Arts", "Sciences", "Business"],
            },
            {
                name: "Seoul National University",
                image: "https://via.placeholder.com/150",
                link: "https://en.snu.ac.kr",
                admissionRate: "24%",
                location: "Seoul, South Korea",
                cost: "KRW 6,000,000 per year",
                timeToDegree: "4 years",
                description: "South Korea's top university with a global research reputation.",
                focus: ["Engineering", "Business"],
            },
            {
                name: "University of Hong Kong",
                image: "https://via.placeholder.com/150",
                link: "https://www.hku.hk",
                admissionRate: "18%",
                location: "Hong Kong",
                cost: "HKD 42,100 per year",
                timeToDegree: "4 years",
                description: "Premier university in Asia, excelling in multiple disciplines.",
                focus: ["Sciences", "Business", "Engineering"],
            },
            {
                name: "University of British Columbia",
                image: "https://via.placeholder.com/150",
                link: "https://www.ubc.ca",
                admissionRate: "46%",
                location: "Vancouver, Canada",
                cost: "CAD 5,000–$30,000 per year",
                timeToDegree: "4 years",
                description: "A leading global university with strengths in research and innovation.",
                focus: ["Arts", "Engineering", "Sciences"],
            }
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

            document.getElementById("submitQuiz").addEventListener("click", processQuiz);
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
