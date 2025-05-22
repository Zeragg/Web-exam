// Form handler 
document.getElementById('contactForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    formMessage.classList.remove('hidden');
    this.reset();
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        const cardTitle = this.querySelector('.card-title').textContent;
        const modal = document.getElementById('scheduleModal');
        const scheduleData = schedules[cardTitle] || getDefaultSchedule();

        // Fill modal with data
        document.getElementById('modalTitle').textContent = `${cardTitle} - Schedule`;

        const tableBody = modal.querySelector('tbody');
        tableBody.innerHTML = '';

        // Populate the table
        scheduleData.days.forEach((day, i) => {
            tableBody.innerHTML += `
          <tr>
            <td>${day}</td>
            <td>${scheduleData.times[i]}</td>
            <td>${scheduleData.workouts[i]}</td>
            <td>${scheduleData.trainers[i]}</td>
          </tr>
        `;
        });

        // Fill additional information
        modal.querySelector('.additional-info').innerHTML = `
        <p>${scheduleData.info}</p>
        <p class="mb-0">First session is free for new clients!</p>
      `;

        // Show modal
        new bootstrap.Modal(modal).show();
    });
});

function getDefaultSchedule() {
    return {
        days: ['Monday', 'Wednesday', 'Friday'],
        times: ['10:00-11:30', '18:00-19:30', '17:00-18:30'],
        workouts: ['General Fitness', 'Strength Training', 'Cardio Session'],
        trainers: ['John Smith', 'Emily Johnson', 'Michael Brown'],
        info: 'Standard training schedule. Please check with reception for updates.'
    };
}

const schedules = {
    'Basketball': {
        days: ['Tuesday', 'Thursday', 'Saturday'],
        times: ['17:00-18:30', '19:00-20:30', '11:00-12:30'],
        workouts: ['Team Practice', 'Skills Training', 'Scrimmage Games'],
        trainers: ['David Thompson', 'Lisa Williams', 'James Wilson'],
        info: 'Basketball sessions include skill development and game play. Bring proper shoes.'
    },
    'Yoga and Pilates': {
        days: ['Monday', 'Wednesday', 'Friday'],
        times: ['07:00-08:15', '12:00-13:15', '18:30-19:45'],
        workouts: ['Hatha Yoga', 'Pilates Core', 'Yin Yoga'],
        trainers: ['Sophia Chen', 'Olivia Martinez', 'Emma Davis'],
        info: 'All levels welcome. Mats provided but you may bring your own.'
    },
    'Grappling': {
        days: ['Tuesday', 'Thursday', 'Sunday'],
        times: ['09:00-10:30', '18:00-19:30', '10:00-11:30'],
        workouts: ['Brazilian Jiu-Jitsu', 'Submission Grappling', 'No-Gi Training'],
        trainers: ['Carlos Gracie', 'Daniel Rodriguez', 'Takeshi Yamamoto'],
        info: 'Gi required for some classes. Beginners start with fundamentals.'
    },
    'Dance': {
        days: ['Monday', 'Wednesday', 'Saturday'],
        times: ['16:00-17:30', '19:00-20:30', '14:00-15:30'],
        workouts: ['Hip Hop', 'Contemporary', 'Latin Dance'],
        trainers: ['Jessica Parker', 'Marcus Lee', 'Isabella Gomez'],
        info: 'Wear comfortable clothing. Dance shoes recommended but not required.'
    },
    'Aikido': {
        days: ['Tuesday', 'Thursday', 'Saturday'],
        times: ['07:30-09:00', '17:00-18:30', '09:30-11:00'],
        workouts: ['Basic Techniques', 'Weapons Training', 'Randori Practice'],
        trainers: ['Hiroshi Saito', 'Mika Kobayashi', 'Kenji Watanabe'],
        info: 'Traditional martial art focusing on harmony and movement. Gi required.'
    }
};

function toggleMenu() {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('active');
}

