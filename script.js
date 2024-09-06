document.addEventListener('DOMContentLoaded', function() {
    // BMI Calculation
    document.getElementById('bmiForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const weight = parseFloat(document.getElementById('bmiWeight').value);
        const height = parseFloat(document.getElementById('bmiHeight').value) / 100;
        const bmi = weight / (height * height);
        const bmiResult = document.getElementById('bmiResult');
        bmiResult.innerHTML = `مؤشر كتلة الجسم الخاص بك هو: ${bmi.toFixed(2)}`;
        
        const ctx = document.getElementById('bmiChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['BMI'],
                datasets: [{
                    label: 'مؤشر كتلة الجسم',
                    data: [bmi],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });

    // Calories Calculation
    document.getElementById('caloriesForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const weight = parseFloat(document.getElementById('caloriesWeight').value);
        const height = parseFloat(document.getElementById('caloriesHeight').value);
        const age = parseFloat(document.getElementById('caloriesAge').value);
        const activityLevel = parseFloat(document.getElementById('caloriesActivity').value);

        const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Basic Mifflin-St Jeor formula for men
        const dailyCalories = bmr * activityLevel;

        const caloriesResult = document.getElementById('caloriesResult');
        caloriesResult.innerHTML = `احتياجاتك اليومية من السعرات الحرارية هي: ${dailyCalories.toFixed(2)} سعر حراري`;
        
        const ctx = document.getElementById('caloriesChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['سعرات حرارية'],
                datasets: [{
                    label: 'احتياجات السعرات الحرارية',
                    data: [dailyCalories],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });

    // Body Fat Calculation
    document.getElementById('bodyFatForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const weight = parseFloat(document.getElementById('bodyFatWeight').value);
        const height = parseFloat(document.getElementById('bodyFatHeight').value);
        const age = parseFloat(document.getElementById('bodyFatAge').value);
        const gender = document.getElementById('bodyFatGender').value;

        const bmi = weight / ((height / 100) ** 2);
        let bodyFatPercentage;

        if (gender === 'male') {
            bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - 16.2;
        } else {
            bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - 5.4;
        }

        const bodyFatResult = document.getElementById('bodyFatResult');
        bodyFatResult.innerHTML = `نسبة الدهون في جسمك هي: ${bodyFatPercentage.toFixed(2)}%`;

        const ctx = document.getElementById('bodyFatChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['نسبة الدهون'],
                datasets: [{
                    label: 'نسبة الدهون في الجسم',
                    data: [bodyFatPercentage],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });

    // Nutrition Suggestions
    document.getElementById('nutritionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const weight = parseFloat(document.getElementById('nutritionWeight').value);
        const height = parseFloat(document.getElementById('nutritionHeight').value);
        const age = parseFloat(document.getElementById('nutritionAge').value);
        const gender = document.getElementById('nutritionGender').value;

        let suggestion = '';

        if (age < 18) {
            suggestion = 'تحتاج إلى نظام غذائي متوازن يناسب نموك.';
        } else if (age >= 18 && age <= 50) {
            suggestion = 'احرص على تناول كمية كافية من البروتين والخضروات.';
        } else {
            suggestion = 'تجنب الأطعمة الغنية بالدهون واضف الأطعمة الغنية بالألياف.';
        }

        document.getElementById('nutritionSuggestions').innerHTML = `<p>${suggestion}</p>`;
    });

    // Dark Mode Toggle
    document.getElementById('darkModeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
