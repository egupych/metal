//::::::::::::::::::::::::::::::::::::::::::::::::::
//Animation scroll to anchor
//::::::::::::::::::::::::::::::::::::::::::::::::::

function scroll_part1(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part1 = document.querySelector('.part1');
    part1.scrollIntoView(options);
}

function scroll_part2(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part2 = document.querySelector('.part2');
    part2.scrollIntoView(options);
}

function scroll_part3(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part3 = document.querySelector('.part3');
    part3.scrollIntoView(options);
}

function scroll_part4(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part4 = document.querySelector('.part4');
    part4.scrollIntoView(options);
}



document.querySelectorAll('.option').forEach(option => {
	option.addEventListener('click', () => {
		const feedbackText = document.getElementById('feedback-text');
		const answer = option.getAttribute('data-answer');

		// Сброс стилей кнопок
		document.querySelectorAll('.option').forEach(btn => {
			btn.classList.remove('correct', 'wrong');
		});

		// Добавление стиля для выбранной кнопки
		if (answer === 'correct') {
			option.classList.add('correct');
			feedbackText.textContent = 'Верно! Золото используется как проводник — им покрывают кнопки, антенну и контакты. Небольшое количество золота есть и в современных смартфонах, хотя старые гаджеты в этом смысле были богаче. А также в организме человека содержится несколько миллиграмм золота, серебра и рутения.';
		} else {
			option.classList.add('wrong');
			feedbackText.textContent = 'Неправильно! Попробуйте ещё раз.';
		}
	});
});

document.querySelectorAll('.option2').forEach(option2 => {
	option2.addEventListener('click', () => {
		const feedbackText2 = document.getElementById('feedback-text2');
		const answer2 = option2.getAttribute('data-answer2');

		// Сброс стилей кнопок
		document.querySelectorAll('.option2').forEach(btn => {
			btn.classList.remove('correct2', 'wrong2');
		});

		// Добавление стиля для выбранной кнопки
		if (answer2 === 'correct2') {
			option2.classList.add('correct2');
			feedbackText2.textContent = 'После образования Земли, около 4 миллиардов лет назад, на нее обрушился поток метеоритов. Эти метеориты содержали драгоценные металлы и добавили их в кору и недра нашей планеты';
		} else {
			option2.classList.add('wrong2');
			feedbackText2.textContent = 'Неправильно! Попробуйте ещё раз.';
		}
	});
});

document.querySelectorAll('.option3').forEach(option3 => {
	option3.addEventListener('click', () => {
		const feedbackText3 = document.getElementById('feedback-text3');
		const answer3 = option3.getAttribute('data-answer3');

		// Сброс стилей кнопок
		document.querySelectorAll('.option3').forEach(btn => {
			btn.classList.remove('correct3', 'wrong3');
		});

		// Добавление стиля для выбранной кнопки
		if (answer3 === 'correct3') {
			option3.classList.add('correct3');
			feedbackText3.textContent = 'Самым крупным самородком, найденным в Красноярском крае, по праву считается «Бычья голова» весом 31 кг и 570 гр. Его подняли 10 января 1898 году. До наших дней он не сохранился, но существует точный муляж. Кстати, посмотреть его тоже можно в Музее драгоценных металлов Красцветмета.';
		} else {
			option3.classList.add('wrong3');
			feedbackText3.textContent = 'Неправильно! Попробуйте ещё раз.';
		}
	});
});


// Выбираем все элементы с классом "magnet-button"
const buttons = document.querySelectorAll('.magnet-element');

// Добавляем обработчики событий для каждого элемента
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Смещение элемента
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    button.addEventListener('mouseleave', () => {
        // Возвращение элемента в исходное положение
        button.style.transform = 'translate(0, 0)';
    });
});