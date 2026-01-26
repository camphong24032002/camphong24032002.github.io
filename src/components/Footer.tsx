import { memo } from 'react';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} - Thai Cam Phong</p>
  </footer>
);

export default memo(Footer);
