const quotes = [
    "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma — which is living with the results of other people’s thinking.",
    "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.",
    "Happiness is not something ready made. It comes from your own actions and the mindset you choose to carry through life.",
    "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
    "In the middle of every difficulty lies opportunity — if you are willing to look for it and have the courage to act on it.",
    "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",
    "It is never too late to be what you might have been. Every day is a fresh chance to pursue your true calling.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Life isn’t about finding yourself. Life is about creating yourself through the choices you make every single day.",
    "The future belongs to those who believe in the beauty of their dreams, even when no one else does.",
    "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.",
    "You don’t need to see the whole staircase, just take the first step and trust the process.",
    "Sometimes the bravest and most important thing you can do is just show up and keep going.",
    "Success is not about being the best. It’s about always getting better, learning, and evolving.",
    "Don’t wait for the perfect moment. Take the moment and make it perfect with your effort.",
    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    "You are never too old to set another goal or to dream a new dream. Growth knows no age.",
    "Most great people have attained their greatest success just one step beyond their greatest failure.",
    "It’s not what happens to you, but how you react to it that matters most in shaping your life.",
    "The best way to predict your future is to create it — one small action at a time."
]

const output = document.getElementById("output")
const myset = new Set();
function genquote(){
    if (myset.size == quotes.length){
        myset.clear()
    }
    while (true){
        const index = Math.floor(Math.random()*quotes.length)
        if (myset.has(index)){
            continue
        }
        output.innerHTML = quotes[index];
        myset.add(index)
        break
    }
    

}
