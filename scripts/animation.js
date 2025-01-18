document.addEventListener("DOMContentLoaded", () => {
    // Анімація заповнення шкали
    const animatedPath = document.getElementById("animated-path");
    animatedPath.style.transition = "stroke-dashoffset 1s ease-in-out";
    animatedPath.style.strokeDashoffset = "400"; // 80% від 1500
});

  // Функція для анімації чисел
  function animateScore(start, end, duration) {
    const scoreElement = document.getElementById("score");
    const range = end - start;
    const startTime = performance.now();

    function updateScore(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Обмежуємо прогрес до 1
      const currentScore = Math.floor(start + range * progress);

      scoreElement.textContent = currentScore;

      if (progress < 1) {
        requestAnimationFrame(updateScore); // Продовжуємо, поки прогрес < 1
      }
    }
    requestAnimationFrame(updateScore);
}

document.addEventListener("DOMContentLoaded", () => {
    animateScore(300, 720, 1000); // Анімація від 300 до 720 за 2 секунди
});