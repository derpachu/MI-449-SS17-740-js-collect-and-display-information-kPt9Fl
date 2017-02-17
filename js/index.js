var fNameIn = document.getElementById('fName')
var lNameIn = document.getElementById('lName')
var desIn = document.getElementById('description')
var emailIn = document.getElementById('email')
var phoneIn = document.getElementById('phone')
var paragraph = document.getElementById('generated_profile')

var updateParagraph = function () {
  var firstName = fNameIn.value
  var lastName = lNameIn.value
  var description = desIn.value
  var email = emailIn.value
  var phone = phoneIn.value

  paragraph.innerHTML = '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1><p>' + description + '</p><p>' +
  'If you\'re interested in a date, you can email me at <a href="' + email + '" target="_blank">' + email +
  '</a> or give me a call at <a href="' + phone + '" target="_blank">' + phone + '</a></p>'
}

fNameIn.addEventListener('input', updateParagraph)
lNameIn.addEventListener('input', updateParagraph)
desIn.addEventListener('input', updateParagraph)
emailIn.addEventListener('input', updateParagraph)
phoneIn.addEventListener('input', updateParagraph)

var rawPara = document.getElementById('rawProfile')

var updaterawParagraph = function () {
  var firstName = fNameIn.value
  var lastName = lNameIn.value
  var description = desIn.value
  var email = emailIn.value
  var phone = phoneIn.value

  rawPara.textContent = '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1><p>' + description + '</p><p>' +
  'If you\'re interested in a date, you can email me at <a href="' + email + '" target="_blank">' + email +
  '</a> or give me a call at <a href="' + phone + '" target="_blank">' + phone + '</a></p>'
}

fNameIn.addEventListener('input', updaterawParagraph)
lNameIn.addEventListener('input', updaterawParagraph)
desIn.addEventListener('input', updaterawParagraph)
emailIn.addEventListener('input', updaterawParagraph)
phoneIn.addEventListener('input', updaterawParagraph)
