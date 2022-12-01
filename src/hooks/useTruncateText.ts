import { useEffect, useState } from "react";

export const useTruncateText = (text: string, characters: number) => {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    setTruncatedText(text.length > characters ? text.substring(0, characters) + "..." : text);
  }, [text]);

  return truncatedText;
};
