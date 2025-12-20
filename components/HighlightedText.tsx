"use client";

import React from "react";

interface HighlightedTextProps {
  text: string;
  highlightClassName?: string;
}

/**
 * Parses text and renders {{highlighted}} portions with special styling.
 * 
 * Usage in translations:
 * "This is {{highlighted text}} in a sentence"
 * 
 * The text between {{ }} will be rendered with the highlight style.
 */
export default function HighlightedText({ 
  text, 
  highlightClassName = "text-emerald font-semibold" 
}: HighlightedTextProps) {
  // Split text by {{...}} pattern
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  
  return (
    <>
      {parts.map((part, index) => {
        // Check if this part is a highlight (wrapped in {{ }})
        if (part.startsWith("{{") && part.endsWith("}}")) {
          const highlightedText = part.slice(2, -2); // Remove {{ and }}
          return (
            <span key={index} className={highlightClassName}>
              {highlightedText}
            </span>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
}
