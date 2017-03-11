

$(function() {


var tmpl = _.template(document.getElementById('myPage').innerHTML);
var html = tmpl({

   title: 'Pavlov Eugen',
    headerPar: 'Logistics manager at Avtologistika LTD',
    title2: 'I want to learn Front-end because:',


    li: [
    "i'll see the results of my work",
    "i'll work with clever, interesting and creativ people",
    "FE it's a magic",
    "FE it's a way for my personal freedom",
    ],


    title3: 'My phone number:',
    phone: '+380676584594',
    title4: 'My profile in FB:',
    fb: 'facebook',
    title5: 'Feedback',
    feedbackPar: "Thank you for this task. It was interesting first work."

});


$('body').append(html);
});
