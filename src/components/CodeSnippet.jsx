import React, { useState } from "react";

import CopyIcon from '../images/copy-icon.svg'

export default function CodeSnippet({ code }) {

  const [isCopied, setIsCopied] = useState(false);
  
  const copyToClipboard = async (e) => {
    try {
      await navigator.clipboard.writeText(code);
      console.log("Code copied to clipboard");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3500); // Reset to copy icon after 10 seconds
    } catch (error) {
      console.error("Failed to copy code to clipboard", error);
    }
  }

  return (
    <section className="codeSnip-section">
      <div className="codeSnip-contain">
        <div className="row-btn">
          <button className="copy-btn" onClick={copyToClipboard}>{isCopied ? "✅" : <img src={CopyIcon} alt="Copy" />}</button>
        </div>
        <div className="row-snip">
          <pre className="code-snip"><code>{code}</code></pre>
        </div>
      </div>
    </section>
  )
}

