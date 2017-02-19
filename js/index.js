var fNameIn = document.getElementById('fName')
var lNameIn = document.getElementById('lName')
var desIn = document.getElementById('description')
var emailIn = document.getElementById('email')
var phoneIn = document.getElementById('phone')

var updateProfile = function () {
  var formattedProfile = document.getElementById('refinedProfile')
  var firstName = fNameIn.value
  var lastName = lNameIn.value
  var description = desIn.value
  var email = emailIn.value
  var phone = phoneIn.value
  var unformattedProfile = document.getElementById('rawProfile')

  formattedProfile.innerHTML = '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1><p>' + description + '</p><p>' +
  'If you\'re interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank">' + email +
  '</a> or give me a call at <a href=tel:' + phone + '" target="_blank">' + phone + '</a>.</p>'

  unformattedProfile.textContent = '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1><p>' + description + '</p><p>' +
  'If you\'re interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank">' + email +
  '</a> or give me a call at <a href=tel:' + phone + '" target="_blank">' + phone + '</a>.</p>'
}

fNameIn.addEventListener('input', updateProfile)
lNameIn.addEventListener('input', updateProfile)
desIn.addEventListener('input', updateProfile)
emailIn.addEventListener('input', updateProfile)
phoneIn.addEventListener('input', updateProfile)
