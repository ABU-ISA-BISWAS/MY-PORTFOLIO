<div className="header d__flex align__items__center pxy__30">
<div className="logo">

</div>
<div className="navigation pxy__30">
  <ul className="navbar d__flex">
    <a href="#Home">
      <li className="nav__items mx__15 hover">Home</li>
    </a>
    <a href="#About">
      <li className="nav__items mx__15 hover">About</li>
    </a>

    <a href="#Portfolio">
      <li className="nav__items mx__15 hover">Projects</li>
    </a>

    <a href="#Contact">
      <li className="nav__items mx__15 hover">Contact</li>
    </a>
    <a href="https://www.facebook.com/bmabuisa.cse/">
      <li className="nav__items mx__15 hover"><FaFacebook /></li>
    </a>
    <a href="https://www.linkedin.com/in/abu-isa-09377b168/">
      <li className="nav__items mx__15 hover"><FaLinkedin /></li>
    </a>

    <a href="https://github.com/ABU-ISA-BISWAS">
      <li className="nav__items mx__15 hover"><FaGithub /></li>
    </a>
  </ul>
</div>

{/* Toogle Menu */}

<div className="toggle__menu">
  <svg onClick={() => setShow(!show)}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-justify white pointer"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
    />
  </svg>
</div>
{show ? (
  <div className="sideNavbar">
    <ul className="sidebar d__flex">
      <li className="sideNavbar">
        <a href="#Home">Home</a>
      </li>
      <li className="sideNavbar">
        <a href="#About">About</a>
      </li>

      <li className="sideNavbar">
        <a href="#Portfolio">Projects</a>
      </li>

      <li className="sideNavbar ">
        <a href="#Contact">Contact</a>
      </li>
      <li className="sideNavbar ">
        <a href="https://www.facebook.com/bmabuisa.cse/"><FaFacebook /></a>
      </li>
      <li className="sideNavbar ">
        <a href="https://www.linkedin.com/in/abu-isa-09377b168/"><FaLinkedin /></a>
      </li>
      <li className="sideNavbar">
        <a href="https://github.com/ABU-ISA-BISWAS"><FaGithub /></a>
      </li>
    </ul>
  </div>
) : null}
</div>