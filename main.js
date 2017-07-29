$(document).ready(function() {

  $('.main').click(function() {
    var step = $('.step').data('step')

    if ( step == 1 ) {
      askQuestion()
    } else {
      showAnswer()
    }
  })

  $('.category-btn').click(function() {
    var clickedButton = $(this)
    var category = clickedButton.data('category')

    selectCategory(clickedButton)
  })
})

function selectCategory(clickedButton) {
  if ( !clickedButton.hasClass('selected') ) {
    $('.category-btn').removeClass('selected')
    clickedButton.addClass('selected')
  } else {
    clickedButton.removeClass('selected')
  }
}

function returnTranslations() {
  var selectedCategoryButton = $('.category-btn.selected')

  if ( selectedCategoryButton.length ) {
    // return only translation from specific category
    var category = selectedCategoryButton.data('category')
    var $container = $(".translation-container[data-category*='" + category + "']")

    return $container.children('.translation')
  } else {
    // return any translation
    return $('.translation')
  }

}

function askQuestion() {
  $('.instructions').html('Tap anywhere to reveal the word in Indonesian')

  var $translations = returnTranslations()
  var randomNumber = Math.floor(Math.random() * $translations.length) + 1
  var $translation = $translations.get(randomNumber)

  var englishWord = $translation.dataset.english
  var indoWord = $translation.dataset.indo

  $('.question').html(englishWord + ':')
  $('.answer').html(wordClue(indoWord))

  embedQuestionAndAnswer(englishWord, indoWord)
  setStepTo(2)
}

function showAnswer() {
  var answer = $('.q-and-a').data('a')

  $('.instructions').html('Tap anywhere for another word')
  $('.answer').html(answer)
  setStepTo(1)
}

function embedQuestionAndAnswer(q, a) {
  $('.q-and-a').data('q', q)
  $('.q-and-a').data('a', a)
}

function setStepTo(stepNumber) {
  $('.step').data('step', stepNumber)
}

function wordClue(word) {
  var clue = ''

  for (var i = 0, len = word.length; i < len; i++) {
    if (word[i] == ' ') {
      clue += '  '
    } else {
      clue += '_ '
    }
  }

  return clue
}
