import { useCallback, useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTModel } from '../lib/model'
import { MascotContainer, MascotSpinner } from './mascot-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Mascot = () => {
  // 이거 선언 위치도 중요하구나???
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  // .glb 파일 location 정의
  const urlMascotGLB =
    (process.env.NODE_ENV === 'production'
      ? 'https://dro-next.vercel.app'
      : '') + '/mascot.glb'

  // renderer 가 명확하지 않네
  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    console.log(renderer)
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true, // 계단형식 방지 aka. 안티알리아싱
        alpha: true // 알파값 클리어
      })
      renderer.setPixelRatio(window.devicePixelRatio) // 출력 캔버스 흐려짐 방지
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement) // 랜더러가 출력을 그리는 캔버스 추가
      refRenderer.current = renderer
      const scene = new THREE.Scene() // 씬 생성

      const target = new THREE.Vector3(-0.5, 1.2, 0) // 기본 보는 위치 지정
      const initialCameraPosition = new THREE.Vector3( // x,y,z 좌표
        20 * Math.sin(0.2 * Math.PI), // 숫자는 각도라고 보면 된다.
        10,
        20 * Math.cos(0.2 * Math.PI)
      )

      const scale = scH * 0.005 + 4.8
      // left, right, top bottome, near, far
      const camera = new THREE.OrthographicCamera( // 렌더링된 이미지가 카메라의 거리와 관계없이 크기를 유지한다.
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      // 카메라가 대상을 중심으로 궤도를 돌 수 있도록 만든다. 별도의 HTML이 필요하다는데??
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      // library 추가 model.js
      loadGLTModel(scene, urlMascotGLB, {
        recieveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.x * Math.cos(rotSpeed) - p.z * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <MascotContainer ref={refContainer}>
      {loading && <MascotSpinner />}
    </MascotContainer>
  )
}

export default Mascot
