import './ButtonBackToTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

function ButtonBackToTop() {
  const [isVisible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    }
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      {isVisible && (
        <a href="#" className="back-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon="chevron-up" style={{ paddingTop: '9px' }} />
        </a>
      )}
    </>
  )
}

export default ButtonBackToTop;