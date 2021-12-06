const Search = () => {
  // State that captures the user's input value
  const [userSearch, setUserSearch] = useState(null);

  // Holds a reference the current input field value
  const inputRef = useRef(null);

  // Makes an API request whenever the search state is updated
  useEffect(() => {
    // Debounce Effect
    // Code within the setTimeout runs every 0.5 seconds
    const timer = setTimeout(() => {
      // 1. The conditional checks the input's current value
      // 2. It compares it against the userSearch state
      // 3. If they match then the user has stopped typing and the API is ready to be called

      if (inputRef.current.value === userSearch) {
        const query = `https://www.omdbapi.com/?s=${userSearch}&apikey=yourKey`;

        axios.get(query).then((res) => {
          // Execute next steps
        });
      }
    }, 500);

    // Every time the useEffect runs it creates a new setTimeout function
    // Returning this cleanup function will run before each new render and remove the old timer
    return () => {
      clearTimeout(timer);
    };
  }, [userSearch, inputRef]);

  // JSX for the search field
  <input
    type="text"
    value={userSearch}
    onChange={(event) => setUserSearch(event.target.value)}
    ref={inputRef} // <--- ref grabs the input element
  />;
};

export default Search;
