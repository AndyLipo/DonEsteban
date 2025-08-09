
import { useState, useEffect, useCallback, useRef } from "react"

const SLIDE_DURATION = 5000
const TRANSITION_DURATION = 300 // Reducido para mejor LCP

export const useHeroSlider = (totalSlides) => {
    const [current, setCurrent] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const intervalRef = useRef(null)
    const transitionTimeoutRef = useRef(null)

    // Función optimizada para cambio de slide
    const goToSlide = useCallback((index) => {
        if (index === current || isTransitioning || index < 0 || index >= totalSlides) {
            return
        }

        setIsTransitioning(true)

        // Usar requestAnimationFrame para mejor rendimiento
        requestAnimationFrame(() => {
            setCurrent(index)

            // Timeout más corto para mejor LCP
            transitionTimeoutRef.current = setTimeout(() => {
                setIsTransitioning(false)
            }, TRANSITION_DURATION)
        })
    }, [current, isTransitioning, totalSlides])

    const nextSlide = useCallback(() => {
        const nextIndex = (current + 1) % totalSlides
        goToSlide(nextIndex)
    }, [current, goToSlide, totalSlides])

    const prevSlide = useCallback(() => {
        const prevIndex = (current - 1 + totalSlides) % totalSlides
        goToSlide(prevIndex)
    }, [current, goToSlide, totalSlides])

    // Auto-play con cleanup mejorado
    useEffect(() => {
        // Limpiar interval anterior
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        intervalRef.current = setInterval(nextSlide, SLIDE_DURATION)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [nextSlide])

    // Navegación por teclado optimizada
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Solo procesar si no está en transición
            if (isTransitioning) return

            if (event.key === 'ArrowLeft') {
                event.preventDefault()
                prevSlide()
            } else if (event.key === 'ArrowRight') {
                event.preventDefault()
                nextSlide()
            }
        }

        document.addEventListener('keydown', handleKeyDown, { passive: false })
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [nextSlide, prevSlide, isTransitioning])

    // Cleanup general en unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current)
            }
        }
    }, [])

    return {
        current,
        isTransitioning,
        goToSlide,
        nextSlide,
        prevSlide
    }
}