import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        Made with{" "}
        <span role="img" aria-label="coffee cup">
          ☕
        </span>{" "}
        by <a href="https://timmybytes.com">Timothy Merritt</a>, {year}
        {" . . . "}
        <a href="https://github.com/timmybytes/color-chooser">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </footer>
    </>
  );
}

export default Footer;
