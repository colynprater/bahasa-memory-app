$(document).ready(function() {

  $('.main').click(function() {
    var step = $('.step').data('step')

    if ( step == 1 ) {
      askQuestion()
    } else {
      showAnswer()
    }
  })
})

function askQuestion() {
  $('.instructions').html('Tap anywhere to reveal the word in English')

  var $translations = $('.translation')
  var randomNumber = Math.floor(Math.random() * $translations.length) + 1
  var $translation = $translations.get(randomNumber)

  var englishWord = $translation.dataset.english
  var indoWord = $translation.dataset.indo

  $('.question').html(englishWord + ':')
  $('.answer').html(wordClue(indoWord.length))

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

function wordClue(length) {
  var clue = '_ '.repeat(length)
  return clue
}
