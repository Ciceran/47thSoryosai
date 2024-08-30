var timelistblock = document.getElementById('timelistblock');
var backButton = document.getElementById('back-button');
var nextButton = document.getElementById('next-button');
var element1 = document.getElementById('1');
var element2 = document.getElementById('2');

nextButton.addEventListener('click', function() {
    //element2.scrollIntoView();
    timelistblock.scrollLeft += timelistblock.offsetWidth;
});

backButton.addEventListener('click', function() {
    timelistblock.scrollLeft -= timelistblock.offsetWidth;
});