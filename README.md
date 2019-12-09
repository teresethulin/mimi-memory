<img src="/media/images/mimi-memory-preview.png" alt="Mimi Memory" align="center">


<h1 align="center">
    <br>
    <img src="https://media.giphy.com/media/10w2kccsAdggZG/giphy.gif" alt="Mariah Carey" align="center">
    <br>
    <br>
        Mimi Memory
    <br>
</h1>

A JavaScript memory game dedicated to one of the best-selling music artists of all time: [Mariah Carey](https://www.mariahcarey.com/).


## Play game:

https://mimi-memory.netlify.com/


## Built with
- HTML
- CSS
- JavaScript


## Authors
- [Terese Thulin](https://github.com/teresethulin)


## Installation
1. Clone [this directory](https://github.com/teresethulin/mimi-memory.git) with Github Desktop or in terminal

    `git clone https://github.com/teresethulin/mimi-memory.git`
2. Open index.html in your browser.


## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/teresethulin/mimi-memory/blob/master/LICENSE) for details


## Testers
- [Maja Alin](https://github.com/majaalin)
- [Bernhard Stedt](https://github.com/Vehx)


## Code review by Bernhard Stedt
 * [index.html:L-45](https://github.com/teresethulin/mimi-memory/blob/a0d7f87498ac2021e3e0657ce1f27e963080a502/index.html#L45) ~~Theres a script tag calling for functions.js that no longer exists~~
* [script.js:L-104](https://github.com/teresethulin/mimi-memory/blob/a0d7f87498ac2021e3e0657ce1f27e963080a502/script.js#L104) Since you use if statements above that returns, there is no need to use an else statement
* [script.js:L147-L155](https://github.com/teresethulin/mimi-memory/blob/a0d7f87498ac2021e3e0657ce1f27e963080a502/script.js#L147-L155) Nesting a function inside another function works while the functions are small, when they get bigger and more complex it gets harder to read and follow the code, something to think about
* [index.html:L7-L13](https://github.com/teresethulin/mimi-memory/blob/a0d7f87498ac2021e3e0657ce1f27e963080a502/index.html#L7-L13) ~~I get some type of error in my browsers console about the MIME type mismatching, adding type='text/css' may help, I'm not 100% sure~~
* [main.css:L45-L46](https://github.com/teresethulin/mimi-memory/blob/a0d7f87498ac2021e3e0657ce1f27e963080a502/css/main.css#L45-L46) ~~Looks like you forgot to remove a media query that you no longer use, easy to forget and easy to fix :)~~


## Acknowledgments

https://en.wikipedia.org/wiki/Mariah_Carey




<h1 align="center">
    <br>
    <img src="https://media.giphy.com/media/BqLrzwECYnni0/giphy.gif" alt="Mariah Carey" align="center">
    <br>
    <br>
</h1>
