var timelistblock = document.getElementById('timelistblock');
var backButton = document.getElementById('back-button');
var nextButton = document.getElementById('next-button');
var timelistblock2 = document.getElementById('timelistblock2');
var backButton2 = document.getElementById('back-button2');
var nextButton2 = document.getElementById('next-button2');

nextButton.addEventListener('click', function() {
    //element2.scrollIntoView();
    timelistblock.scrollLeft += timelistblock.offsetWidth;
});

backButton.addEventListener('click', function() {
    timelistblock.scrollLeft -= timelistblock.offsetWidth;
});

nextButton2.addEventListener('click', function() {
    //element2.scrollIntoView();
    timelistblock2.scrollLeft += timelistblock2.offsetWidth;
});

backButton2.addEventListener('click', function() {
    timelistblock2.scrollLeft -= timelistblock2.offsetWidth;
});