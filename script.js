const skills = [
    {
        id: 1,
        name: 'React.js',
        icon: 'fab fa-react',
        level: 90,
        color: 'rgb(97, 218, 251)'
    },
    {
        id: 2,
        name: 'TypeScript',
        icon: 'fab fa-js',
        level: 85,
        color: 'rgb(49, 120, 198)'
    },
    {
        id: 3,
        name: 'Node.js',
        icon: 'fab fa-node',
        level: 80,
        color: 'rgb(104, 160, 99)'
    },
    {
        id: 4,
        name: 'HTML5',
        icon: 'fab fa-html5',
        level: 95,
        color: 'rgb(227, 79, 38)'
    },
    {
        id: 5,
        name: 'CSS3',
        icon: 'fab fa-css3-alt',
        level: 90,
        color: 'rgb(21, 114, 182)'
    },
    {
        id: 6,
        name: 'Python',
        icon: 'fab fa-python',
        level: 75,
        color: 'rgb(255, 212, 59)'
    }
];

function createSkillCard(skill) {
    const card = document.createElement('div');
    card.className = 'skill-card';
    
    card.innerHTML = `
        <div class="skill-header">
            <div class="skill-icon" style="background-color: ${skill.color}">
                <i class="${skill.icon}"></i>
            </div>
            <h3 class="skill-name">${skill.name}</h3>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="background-color: ${skill.color}; width: 0%"></div>
        </div>
        <p class="skill-level">${skill.level}% Proficiency</p>
    `;
    
    return card;
}

function animateProgressBar(card, level) {
    const progressFill = card.querySelector('.progress-fill');
    setTimeout(() => {
        progressFill.style.width = `${level}%`;
    }, 200);
}

function checkVisibility(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animateProgressBar(entry.target, entry.target.dataset.level);
            observer.unobserve(entry.target);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('skills-container');
    const observer = new IntersectionObserver(checkVisibility, {
        threshold: 0.1
    });

    skills.forEach(skill => {
        const card = createSkillCard(skill);
        card.dataset.level = skill.level;
        container.appendChild(card);
        observer.observe(card);
    });
});