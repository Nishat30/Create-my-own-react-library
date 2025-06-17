# 🚀 Custom React JSX Renderer (Vanilla JS Edition)

Ever wondered how React works under the hood? I built my own tiny version of React’s `createElement` and renderer using pure Vanilla JavaScript (yes, without all the React sorcery). Basically, I gave React a haircut and told it to chill.

## 🔧 What Is This?

This project mimics how React handles JSX — by converting JSX-like syntax into JavaScript objects and rendering them to the DOM. No JSX transpiler. No bundler. Just raw JavaScript power.

## 🧠 What I Learned (aka React is just fancy JavaScript)
* The surrounding text is regular Markdown prose.
* The JSX example is in a `jsx` fenced code block:
    ```jsx
    return <a href="http://google.com" target="_blank">Click me</a>
    ```
* The JavaScript `React.createElement` example is in a `js` fenced code block:
    ```js
    const reactElement = React.createElement(
      'a',
      { href: 'http://google.com', target: '_blank' },
      'Click me'
    );
    ```
* The final analogy (`Me have keys...`) is in a plain fenced code block (no language specified) to preserve its formatting:
    ```
    Me have keys 🔑 and values 📦. No think 🧠.
    ```
## 🚀 Usage

To see this in action, simply open `index.html` in your web browser. The `main.js` script will execute and render the element to the `#root` div.

## 💬 Want to Add Something?

If I missed something important (or accidentally roasted React too hard),
feel free to open an issue or drop a PR. Sharing is caring 💖
