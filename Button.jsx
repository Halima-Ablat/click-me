function Button() {
  let count = 0;
  const clickButton = (e) => {
    if (count <= 3) {
      count++;
      e.target.textContent = "Ouch 😒";
    } else if (count <= 5) {
      count++;
      e.target.textContent = "STOP CLIKING ME 😩";
    } else {
      count++;
      e.target.style.display = "none";
    }
  };
  return <button onClick={(e) => clickButton(e)}>Click me 😎</button>;
}
export default Button;
