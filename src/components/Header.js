function Header({ text = 'LOGO' }) {

  return (
    <header className="header">
      <div className="container">
        <div className="logo">{text}</div>
      </div>
    </header>
  )
}

export default Header;