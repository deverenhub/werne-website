'use client'

import { useEffect, useRef } from 'react'

/**
 * Premium animated "knowledge network → AI core" visual on a HTML5 canvas.
 *
 * Reads as advanced/technical for an AI consulting brand: a drifting constellation
 * of nodes (your team's tribal knowledge) with proximity links, bright data pulses
 * flowing inward, and a luminous central core. Depth via parallax layers; subtle
 * pointer parallax for interactivity. Fully static under prefers-reduced-motion.
 *
 * Disciplined to the brand palette (navy base handled by the section; green nodes/
 * links/core). Lightweight: ~90 nodes, capped device-pixel-ratio, rAF loop that
 * stops when off-screen or on reduced motion.
 */

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  layer: number // 0 far .. 2 near (depth)
}

type Pulse = {
  from: number // node index the pulse departs from
  t: number // 0..1 progress toward the core
  speed: number
}

const GREEN = { r: 76, g: 175, b: 80 } // #4CAF50

export function HeroVisual({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let nodes: Node[] = []
    let pulses: Pulse[] = []
    const core = { x: 0, y: 0 }
    const pointer = { x: 0, y: 0, active: false }
    const parallax = { x: 0, y: 0 }
    let raf = 0
    let running = true

    const NODE_COUNT = () => {
      // scale node density to area, but stay light
      const target = Math.round((width * height) / 14000)
      return Math.max(42, Math.min(96, target))
    }

    const build = () => {
      const rect = wrap.getBoundingClientRect()
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Core sits right-of-center (text lives on the left)
      core.x = width * (width < 720 ? 0.5 : 0.66)
      core.y = height * (width < 720 ? 0.4 : 0.5)

      const count = NODE_COUNT()
      nodes = Array.from({ length: count }, () => {
        const layer = Math.floor(Math.random() * 3)
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (0.12 + layer * 0.06),
          vy: (Math.random() - 0.5) * (0.12 + layer * 0.06),
          r: 0.6 + layer * 0.9 + Math.random() * 0.6,
          layer,
        }
      })

      pulses = Array.from({ length: Math.round(count / 7) }, () => ({
        from: Math.floor(Math.random() * count),
        t: Math.random(),
        speed: 0.0016 + Math.random() * 0.0026,
      }))
    }

    const LINK_DIST = () => Math.min(170, Math.max(110, width * 0.13))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const link = LINK_DIST()
      const link2 = link * link

      // smooth pointer parallax toward target
      parallax.x += ((pointer.active ? (pointer.x - width / 2) * 0.02 : 0) - parallax.x) * 0.06
      parallax.y += ((pointer.active ? (pointer.y - height / 2) * 0.02 : 0) - parallax.y) * 0.06

      // proximity links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        const ax = a.x + parallax.x * (a.layer + 1)
        const ay = a.y + parallax.y * (a.layer + 1)
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const bx = b.x + parallax.x * (b.layer + 1)
          const by = b.y + parallax.y * (b.layer + 1)
          const dx = ax - bx
          const dy = ay - by
          const d2 = dx * dx + dy * dy
          if (d2 < link2) {
            const alpha = (1 - d2 / link2) * 0.22
            ctx.strokeStyle = `rgba(${GREEN.r},${GREEN.g},${GREEN.b},${alpha.toFixed(3)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(bx, by)
            ctx.stroke()
          }
        }
      }

      // faint links from nodes into the core (knowledge → AI)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        const ax = a.x + parallax.x * (a.layer + 1)
        const ay = a.y + parallax.y * (a.layer + 1)
        const dx = ax - core.x
        const dy = ay - core.y
        const d2 = dx * dx + dy * dy
        const reach = (link * 1.7) * (link * 1.7)
        if (d2 < reach) {
          const alpha = (1 - d2 / reach) * 0.14
          ctx.strokeStyle = `rgba(${GREEN.r},${GREEN.g},${GREEN.b},${alpha.toFixed(3)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(ax, ay)
          ctx.lineTo(core.x, core.y)
          ctx.stroke()
        }
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        const ax = a.x + parallax.x * (a.layer + 1)
        const ay = a.y + parallax.y * (a.layer + 1)
        const alpha = 0.35 + a.layer * 0.22
        ctx.fillStyle = `rgba(129,199,132,${alpha.toFixed(3)})` // #81C784
        ctx.beginPath()
        ctx.arc(ax, ay, a.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // data pulses flowing into the core
      for (const p of pulses) {
        const a = nodes[p.from]
        if (!a) continue
        const ax = a.x + parallax.x * (a.layer + 1)
        const ay = a.y + parallax.y * (a.layer + 1)
        const ease = p.t * p.t
        const px = ax + (core.x - ax) * ease
        const py = ay + (core.y - ay) * ease
        const glow = ctx.createRadialGradient(px, py, 0, px, py, 6)
        glow.addColorStop(0, `rgba(165,214,167,${(1 - p.t) * 0.95})`)
        glow.addColorStop(1, 'rgba(165,214,167,0)')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(px, py, 6, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = `rgba(220,247,222,${(1 - p.t) * 0.95})`
        ctx.beginPath()
        ctx.arc(px, py, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      // central AI core — layered radial glow + rings + bright center
      const cx = core.x + parallax.x * 0.6
      const cy = core.y + parallax.y * 0.6
      const t = reduce ? 0.5 : (Math.sin(Date.now() / 1400) + 1) / 2
      const haloR = 150 + t * 16
      const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, haloR)
      halo.addColorStop(0, 'rgba(76,175,80,0.30)')
      halo.addColorStop(0.5, 'rgba(76,175,80,0.10)')
      halo.addColorStop(1, 'rgba(76,175,80,0)')
      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(cx, cy, haloR, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = 'rgba(76,175,80,0.35)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(cx, cy, 46 + t * 4, 0, Math.PI * 2)
      ctx.stroke()
      ctx.strokeStyle = 'rgba(76,175,80,0.55)'
      ctx.beginPath()
      ctx.arc(cx, cy, 30 + t * 3, 0, Math.PI * 2)
      ctx.stroke()

      const coreGrad = ctx.createRadialGradient(cx - 5, cy - 6, 1, cx, cy, 20)
      coreGrad.addColorStop(0, '#E8F5E9')
      coreGrad.addColorStop(0.4, '#4CAF50')
      coreGrad.addColorStop(1, '#2E7D32')
      ctx.fillStyle = coreGrad
      ctx.beginPath()
      ctx.arc(cx, cy, 15 + t * 2, 0, Math.PI * 2)
      ctx.fill()
    }

    const step = () => {
      if (!running) return
      for (const a of nodes) {
        a.x += a.vx
        a.y += a.vy
        if (a.x < -20) a.x = width + 20
        else if (a.x > width + 20) a.x = -20
        if (a.y < -20) a.y = height + 20
        else if (a.y > height + 20) a.y = -20
      }
      for (const p of pulses) {
        p.t += p.speed * 60 * 0.016
        if (p.t >= 1) {
          p.t = 0
          p.from = Math.floor(Math.random() * nodes.length)
          p.speed = 0.0016 + Math.random() * 0.0026
        }
      }
      draw()
      raf = requestAnimationFrame(step)
    }

    build()
    if (reduce) {
      draw()
    } else {
      raf = requestAnimationFrame(step)
    }

    const onResize = () => {
      build()
      if (reduce) draw()
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(wrap)

    const onPointerMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.active = true
    }
    const onPointerLeave = () => {
      pointer.active = false
    }
    if (!reduce) {
      wrap.addEventListener('pointermove', onPointerMove)
      wrap.addEventListener('pointerleave', onPointerLeave)
    }

    // pause when scrolled out of view
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduce) {
          if (!running) {
            running = true
            raf = requestAnimationFrame(step)
          }
        } else {
          running = false
          cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 }
    )
    io.observe(wrap)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      wrap.removeEventListener('pointermove', onPointerMove)
      wrap.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <div ref={wrapRef} className={`absolute inset-0 ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
