<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume Templates</title>
    <link rel="stylesheet" href="styles.css">
    <script>
        // Resume Data (Simulated Dynamic Loading)
        const resumeTemplates = [
            { title: "Basic Resume", img: "img/resume-1.jpeg", link: "1/index.html" },
            { title: "Modern Resume", img: "img/resume-2.jpeg", link: "2/index.html" },
            { title: "Creative Resume", img: "img/resume-3.jpg", link: "3/index.html" },
            { title: "Professional Resume", img: "img/resume-4.jpeg", link: "4/index.html" },
            { title: "Executive Resume", img: "img/resume-5.jpeg", link: "5/index.html" },
        ];

        // Load Resume Templates Dynamically
        function loadResumes() {
            const container = document.getElementById("resumeContainer");
            container.innerHTML = "";
            
            resumeTemplates.forEach(resume => {
                let resumeCard = document.createElement("div");
                resumeCard.classList.add("resume-card");
                resumeCard.innerHTML = `
                    <a href="${resume.link}">
                        <img src="${resume.img}" alt="${resume.title}">
                        <h3>${resume.title}</h3>
                    </a>
                `;
                container.appendChild(resumeCard);
            });
        }

        // Dark/Light Mode Toggle
        function toggleTheme() {
            document.body.classList.toggle("dark-mode");
        }

        // Search Functionality
        function searchResumes() {
            let input = document.getElementById("searchBox").value.toLowerCase();
            let cards = document.getElementsByClassName("resume-card");

            Array.from(cards).forEach(card => {
                let title = card.getElementsByTagName("h3")[0].innerText.toLowerCase();
                if (title.includes(input)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        }

        // Load Resumes on Page Load
        document.addEventListener("DOMContentLoaded", loadResumes);
    </script>
</head>
<body>
    <header>
        <h1>Resume Templates</h1>
        <input type="text" id="searchBox" onkeyup="searchResumes()" placeholder="Search resumes...">
        <button onclick="toggleTheme()">Toggle Theme</button>
    </header>
    <main>
        <div id="resumeContainer" class="resume-container"></div>
    </main>
</body>
</html>
