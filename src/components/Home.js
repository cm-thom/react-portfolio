import "../Navigation.css";

export default function Home() {
  //logic needed for home

  return (
      <div className="actual-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div>
        <img
            className="headshot"
            src="https://placekitten.com/200/300"
            alt="cat"
          ></img>
        </div>
      </div>
  );
}