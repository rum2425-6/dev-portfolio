import { Canvas, useFrame } from '@react-three/fiber'
import { PointMaterial, Points } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'

function Particles() {
  const ref = useRef()

  const positions = useMemo(() => {
    const array = new Float32Array(3200 * 3)

    for (let i = 0; i < array.length; i++) {
      array[i] = (Math.random() - 0.5) * 12
    }

    return array
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return

    ref.current.rotation.x -= delta / 25
    ref.current.rotation.y -= delta / 30
  })

  return (
    <Points ref={ref} positions={positions} frustumCulled>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}

export default function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1.6] }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
      </Canvas>

      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />
    </div>
  )
}