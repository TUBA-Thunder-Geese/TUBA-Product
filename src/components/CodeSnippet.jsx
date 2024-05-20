import React from "react";

export default function CodeSnippet({ code }) {

  let isCopied = false;
  
  const copyToClipboard = async (e) => {
    try {
      await navigator.clipboard.writeText(code);
      console.log("Code copied to clipboard");
      isCopied = true;
    } catch (error) {
      console.error("Failed to copy code to clipboard", error);
    }
  }

  return (
    <section className="codeSnip-section">
      <div className="codeSnip-contain">
        <div className="row-btn">
          <button className="copy-btn" onClick={copyToClipboard}>{isCopied ? "✅" : "Copy"}</button>
        </div>
        <div className="row-snip">
          <pre className="code-snip"><code>{code}</code></pre>
        </div>
      </div>
    </section>
  )
}

