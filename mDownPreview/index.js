marked.setOptions({
    breaks: true,
    gfm: true
}); 

const renderer = new marked.Renderer(); 

function App(){
    const [text, setText] = React.useState(`# Welcome to the Markdown Previewer
## Sub Header H2
[Link to Google](https://www.google.com/)
Inline code: \`<div>Hello World!</div>\`
\`\`\`
// JavaScript code block example
function greet() {
  console.log("Hello, World!");
}
\`\`\`

  **Bold text**

- List item 1
- List item 2
> Blockquote
![This is an image](https://picsum.photos/400)
`);

    const clearEditor = () => {
        setText("");
    }

    return (
        <div className="text-center px-4">
            <h1 className="p-4">Markdown Previewer</h1>
            <textarea
                name="editor"
                id="editor"
                rows="8"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="textarea"
            ></textarea>
            <div className="text-center"><button onClick={clearEditor}>Clear Editor</button></div>
            <h1 className="mt-3">Preview</h1>
            <Preview markdown={text} />
        </div>
    );
}

function Preview({markdown}) {
    return (
        <div        
            dangerouslySetInnerHTML = {{
                __html: marked(markdown, {renderer: renderer}),
            }}
            classname="text-center"
            id="preview"
        ></div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))