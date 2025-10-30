'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, Code, Award } from 'lucide-react'

interface Stat {
  value: string
  label: string
  icon: React.ReactNode
  suffix?: string
}

const stats: Stat[] = [
  { value: '300', label: 'Websites Launched', icon: <Code className="text-primary-600" size={32} />, suffix: '+' },
  { value: '50', label: 'Happy Clients', icon: <Users className="text-primary-600" size={32} />, suffix: '+' },
  { value: '2', label: 'Million Revenue Generated', icon: <TrendingUp className="text-primary-600" size={32} />, suffix: 'M+' },
  { value: '4.9', label: 'Average Rating', icon: <Award className="text-primary-600" size={32} />, suffix: '/5' },
]

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
}

function AnimatedCounter({ target, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const startValue = 0

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const current = Math.floor(startValue + (target - startValue) * easeOutQuart)
            setCount(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }

          animate()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [target, duration, hasAnimated])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-gray-900">
      {count}{suffix}
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by businesses across South-East London
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const numericValue = parseFloat(stat.value)
            return (
              <div
                key={index}
                className="glass-morphism rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                {!isNaN(numericValue) ? (
                  <AnimatedCounter target={numericValue} suffix={stat.suffix} />
                ) : (
                  <div className="text-5xl md:text-6xl font-bold text-gray-900">
                    {stat.value}{stat.suffix}
                  </div>
                )}
                <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


