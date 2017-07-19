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
  $('.instructions').html('Tap anywhere to reveal the answer')

  var $translations = $('.translation')
  var randomNumber = Math.floor(Math.random() * $translations.length) + 1
  var $translation = $translations.get(randomNumber)

  $('.question').html($translation.dataset.english + ':')
  $('.answer').html(wordClue($translation.dataset.indo.length))

  embedQuestionAndAnswer($translation.dataset.english, $translation.dataset.indo)
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
