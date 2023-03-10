const quote = {
  "-Уолт Дисней": "Если вы можете мечтать об этом, вы можете это сделать.",

  "-Уинстон Черчилль":
    "Успех - это идти от неудачи к неудаче, не теряя энтузиазма.",

  "-Мухаммед Али": "Не считай дни, извлекай из них пользу.",

  "-Наполеон Хилл": "Не ждите. Время никогда не будет подходящим.",

  "-Сократ": "Неисследованная жизнь не стоит того, чтобы ее жить.",

  "-Томас Эдисон":
    "Я не потерпел неудачу. Я просто нашел 10 000 способов, которые не работают.",

  "-Джим Рюн":
    "Мотивация - это то, что заставляет вас начать. Привычка - это то, что заставляет вас продолжать.",

  "-Альберт Эйнштейн":
    "Вы должны выучить правила игры. А затем вы должны играть лучше, чем кто-либо другой",

  "-Том Рат":
    "Если вы потратите свою жизнь на то, чтобы быть лучшим во всем, вы никогда не станете великим ни в чем.",

  "-Махатма Ганди":
    "Сначала они не замечают тебя, затем смеются над тобой, потом борются с тобой, а потом ты побеждаешь.",

  "-Джеймс Аллен": "Мечтатели - это спасители мира.",

  "-Фрэнк Синатра": "Лучшая месть - это огромный успех. ",

  "-Норман Винсент Пил": "Измени свои мысли и ты изменишь мир.",

  "-Джейн Смайли":
    "По моему опыту, существует только одна мотивация, и это - желание. Никакие причины или принципы не могут его сдержать и или противостоять ему.",

  "-Уинстон Черчилль":
    "Мужество - первое из человеческих качеств, потому что это качество, которое гарантирует все остальные.",

  "-Винс Ломбарди":
    "Победа - это еще не все, главное это постоянное желание побеждать.",
};

const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

btn.addEventListener("click", function () {
  let finishedQuote =
    Object.entries(quote)[
      Math.floor(Math.random() * Object.keys(quote).length)
    ];
  let [key, value] = finishedQuote;
  text.textContent = `${value} | ${key}`;
});
