"use client";

import { marked } from "marked";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  function getText() {
    const editor = document.getElementById("editor") as HTMLTextAreaElement;
    const preview = document.getElementById("preview") as HTMLDivElement;
    const newText = editor.value;
    setText(newText);
    preview.innerHTML = marked(newText);
  }

  useEffect(() => {
    getText();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <textarea
        name="Markdown"
        id="editor"
        cols={65}
        rows={5}
        onKeyUp={() => getText()}
        className="bg-[#EFE7DA] my-6"
        defaultValue={`# Heading 1
## Sub Heading 2
[Link](https://example.com)
Inline code: \`console.log('Hello, World!')\`
\`\`\`
// Code block
function greet(name) {
  return 'Hello, ' + name + '!';
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://example.com/image.jpg)
**Bolded text**
        `}
      />
      <div id="preview" className="bg-[#EFE7DA] w-[800px] min-h-44"></div>
    </div>
  );
}
