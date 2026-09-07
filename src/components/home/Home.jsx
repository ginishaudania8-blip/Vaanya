import { useEffect, useState } from 'react'

import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Hero4 from './Hero4'

import styles from './Home.module.css'

const heroes = [Hero1, Hero2, Hero3, Hero4]

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0)
  const [direction, setDirection] = useState('next')
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / 1440
      const scaleY = window.innerHeight / 1024

      const newScale = Math.min(scaleX, scaleY)

      setScale(newScale)
    }

    updateScale()

    window.addEventListener('resize', updateScale)

    return () => {
      window.removeEventListener('resize', updateScale)
    }
  }, [])

  const goNext = () => {
    if (currentHero === heroes.length - 1) {
      return
    }

    setDirection('next')
    setCurrentHero((previous) => previous + 1)
  }

  const goPrevious = () => {
    if (currentHero === 0) {
      return
    }

    setDirection('previous')
    setCurrentHero((previous) => previous - 1)
  }

  const CurrentHero = heroes[currentHero]

  return (
    <main className={styles.home}>

      <div
        key={currentHero}
        className={styles.hero}
        style={{
          width: '1440px',
          height: '1024px',
          transform: `scale(${scale})`,
        }}
      >
        <CurrentHero />
      </div>

      {/* Temporary navigation buttons.
          We will later connect the actual arrows
          inside Hero1-Hero4 to these functions. */}

      <button
        type="button"
        className={`${styles.navigationButton} ${styles.previousButton}`}
        onClick={goPrevious}
        disabled={currentHero === 0}
        aria-label="Previous screen"
      >
        ‹
      </button>

      <button
        type="button"
        className={`${styles.navigationButton} ${styles.nextButton}`}
        onClick={goNext}
        disabled={currentHero === heroes.length - 1}
        aria-label="Next screen"
      >
        ›
      </button>

    </main>
  )
}