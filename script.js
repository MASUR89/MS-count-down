// უკუთვლას ვაკეთებ ახალ წლამდე
const newYear = new Date('January 1, 2025 00:00:00');
const interval = setInterval(calculateTime, 1000);

function calculateTime() {
    const now = new Date();
    const remainingTime = newYear - now; 
    
    // დარჩენილ; დრო გადამყავს დღეებში, საათებში, წუთებში და წამებში
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}
const socialMedia = document.querySelector('.icons');
    socialMedia.addEventListener('mouseover', () => {
        socialMedia.src = './Group 6.svg';
    });

    socialMedia.addEventListener('mouseout', () => {
        socialMedia.src = './group 6.png';
    });