(function(){
    const quotes = [
        {
            quote: '“ Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we have got',
            author: 'Life'
        },
        {
            quote: '“ The Price of anything is the amount of life you exchange for it.',
            author: 'David Thoreau'
        },
        {
            quote: '“ God save me from my friends. I can protect myself from my enemies',
            author: 'Claude Louis'
        },
        {
            quote: '“ A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded',
            author: 'Tyne Daly'
        },
        {
            quote: '“ If you want to be happy, be.',
            author: 'Leo Tolstoy'
        },
        {
            quote: 'To live without Hope is to Cease to live.',
            author: 'DOSTOYEVSKY, FEDOR'
        }
    ];

    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        let random = Math.floor(Math.random() * quotes.length);
        

        document.getElementById('quote').textContent = quotes[random].quote;
        document.getElementById('author').textContent = quotes[random].author;
    });
})();