# YourSpot 
## NextJS FullStack Project

It's a FullStack website wchich is based on:
- **NextJS**
- **Tailwind CSS**

Database via MongoDB

> **_NOTE:_** To see other dependincies installed check out `packages.json`


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
> **_NOTE:_**  `npm run dev` is recommended to run  `npm run dev` is recommended to run

---

## Home Page

While you are running the previous command you must to connect to `localhost` address to see your website that's rendering on local address.

```image[homepage]```

The source code of this located at `src/pages/index.jsx`, the curcial part of this page is `index_home.jsx`

Alternativly, I could refactor this code by using map function to to generate the<p
style="color:purple">_Letter_
</p>components dynamically:

```javascript
const letters = ["Y", "O", "U", "R", "S", "P", "O", "T"];

const Letter = ({ letter }) => (
  <div className="wrapper cursor-pointer w-auto h-[180px] flex items-center content-center text-[7vw] font-[sans-serif_italic]">
    <h1 className="letter h-auto relative [text-shadow:-6px_2px_7px_rgba(0,0,0,0)] text-[#0c0c0c] top-[0]">{letter}</h1>
    <h1 className="shadowl text-transparent absolute [transition:0.5s] [text-shadow:none] z-0">{letter}</h1>
  </div>
);

const Home = () => (
  <div className="csv body min-h-screen flex justify-center items-center bg-[#cOcOcO]">
    <div className="text-container flex flex-row content-center justify-center gap-[15px] w-4/5">
      {letters.map((letter, index) => (
        <Letter key={index} letter={letter} />
      ))}
    </div>
  </div>
);
```
Let's have a look at components folder `src/components/`, show the most essential components:

- _footer.jsx
- _header.jsx
- _navbar.jsx

**_footer.jsx** nothing remarkable, just a footer component

**_header.jsx** this component is responsible for rendering the header of the website, it's also responsible for rendering the navbar.

**_navbar.jsx** this component is responsible for rendering the navbar of the website, it's also responsible for rendering the links of the website.

So in `_navbar.jsx` you could see different links that are rendered by using `Link` component from `next/link`

```javascript
//...
      <div className={`menu ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="#">Spots</a>
          </li>
          <li>
            <Link href="/place/insert">New Spot?</Link>
          </li>
          <li>
            <Link href="/about/me">About</Link>
          </li>
          <li>
            <Link href="/contact/about">Contact</Link>
          </li>
        </ul>
      </div>
//...
```
> :warning: **I had to write styles in pure css at this case for some troubles with rendreing by using tailwind**: :eye: `src/styles/globals.css`

```scss
.toggle {
  position: fixed;
  top: 40px;
  left: 40px;
  z-index: 2;
}

/* .toggle a */
.toggle a {
  text-decoration: none;
  color: #262626;
  font-size: 24px;
  cursor: pointer;
}
//till `/* _flipcard.css */` comment
```

> **_NOTE:_**  To apply styles in my prject I used Tailwind CSS and pure css in cases if I had some serious troubles with rendering

---

## New Spot?

It's a page to insert a new place so it's a form to insert infomation about a place such as: address, name, type of establishement ect.

Mainly composed of 2 components `src/components/_addressform_pt1.jsx` & `src/components/_addressform_pt2.jsx` that assembled in `src/components/_addressform_full.jsx` and it's referred at `src/pages/place/insert.jsx`

Nothing remarkable at this page execpt the source code of `_addressform_pt2.jsx` and how I implemeted rating and price level

> :warning: **I strongly advise against opening the source code for the second part of form page**: beware

> Average Price rating implementation
```javascript
//...
                    Average Price:
                  </label>
                  {[...Array(5)].map((_, index) => {
                    const currentLevel = index + 1
                    return (
                      <label key={index}>
                        <Field
                          type="radio"
                          name="averagePrice"
                          value={currentLevel}
                          className="hidden"
                        />
                        <span
                          className="dollar cursor-pointer"
                          style={{
                            color:
                              currentLevel <= selectedPriceLevel
                                ? "#ffc107"
                                : "#e4e5e9",
                          }}
                          onClick={() => handlePriceLevelSelect(currentLevel)}
                        >
                          &#36;
                        </span>
                      </label>
```
> **_NOTE:_** same thing as for "raiting" but we're changing range and symbol

---
## About 

Originally this page is designed to show information about the site but after thinking about it for a while I decided to redesign it to show what I plan to do in the future. The card will indicate the place that was added. Honestly, I do not know how I will render all the added places by cards. The main feature is that when you turn the card in the opposite direction will show information about the place

```video[about]```

...

By applying these css effect I could achieve this result

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 350px;
  height: 500px;
  perspective: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container:hover > .card {
  cursor: pointer;
  transform: rotateY(180deg) rotateZ(180deg);
}

.card {
  height: 80%; 
  width: 80%; 
  position: relative;
  transition: transform 1500ms;
  transform-style: preserve-3d;
}

.front,
.back {
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
  position: absolute;
  backface-visibility: hidden;
}

.front {
  background-image: url("https://oyster.ignimgs.com/mediawiki/apis.ign.com/balatro/4/49/Balatro-red_deck.png?width=2240");
  background-size: cover; 
  background-position: center;
}

.back {
  background-image: url("https://oyster.ignimgs.com/mediawiki/apis.ign.com/balatro/8/8e/Chicot.png?width=2240");
  background-size: cover; 
  background-position: center;
  transform: rotateY(180deg) rotateZ(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}
```
