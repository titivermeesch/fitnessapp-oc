// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

setActivityType = (type, event) => {
    document.getElementById('form_type').value = type
    const classes = document.getElementsByClassName('type-selected')
    for (let i = 0; i < classes.length; i++) {
        classes[i].classList.remove('type-selected')
    }
    event.target.className = event.target.className + ' type-selected'
}

showLink = link => {
    window.location = link
}

setRandomQuote = () => {
    const quotes = [
        'Hard work beats talent when talent doesn’t work hard. – Tim Notke',
        'It’s hard to beat a person who never gives up. – Babe Ruth',
        'The harder the battle, the sweeter the victory. – Les Brown',
        'Never say never because limits, like fears, are often just an illusion. – Michael Jordan',
        'You miss 100% of the shots you don’t take. – Wayne Gretzky',
        'Today, you have 100% of your life left. – Tom Landry',
        'You have to expect things of yourself before you can do them. – Michael Jordan',
        'Winning isn’t everything, but wanting to win is. – Vince Lombardi',
        'There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you do. – Derek Jeter',
        'I became a good pitcher when I stopped trying to make them miss the ball and started trying to make them hit it. – Sandy Koufax',
        'When you’ve got something to prove, there’s nothing greater than a challenge. – Terry Bradshaw',
        'If you can’t outplay them, outwork them. – Ben Hogan',
        'Most people never run far enough on their first wind to find out they’ve got a second. – William James'
    ]

    const quoteHolder = document.getElementById('quote')
    const quoteId = Math.floor(Math.random() * quotes.length)

    quoteHolder.innerHTML = quotes[quoteId]
}

window.onload = function() {
    setRandomQuote()
}
