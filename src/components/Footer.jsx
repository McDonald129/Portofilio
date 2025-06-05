import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Thabiso Portfolio. All rights reserved. | 
      <a href="https://github.com/thabiso" target="_blank" rel="noopener noreferrer"> GitHub</a>
    </footer>
  );
}
