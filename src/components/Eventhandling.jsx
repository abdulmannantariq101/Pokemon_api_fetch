export const EventHandling = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  

  return (
    <>
      <h1>Event Handling Example</h1>
      <button onClick={handleClick} >
        Click Me
      </button>
    </>
  );
}