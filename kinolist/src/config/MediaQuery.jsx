import { useState, useEffect } from "react";

function MediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    if (mediaQuery.matches !== matches) {
      setMatches(mediaQuery.matches);
    }

    const listener = () => setMatches(mediaQuery.matches);
    mediaQuery.addListener(listener);

    return () => mediaQuery.removeListener(listener);
  }, [query]);

  return matches;
}

export default MediaQuery;
