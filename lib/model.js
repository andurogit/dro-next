import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// glt file loader
export function loadGLTModel(
  scene,
  glbPath,
  options = { recieveShadow: true, castShadow: true }
) {
  const { recieveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath, // url
      gltf => {
        // onLoad 코드가샘플에도 없는 코드들인데...
        const obj = gltf.scene
        obj.name = 'mascot'
        obj.position.y = 2
        obj.position.x = 0
        obj.receiveShadow = recieveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(child => {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.recieveShadow = recieveShadow
          }
        })
        resolve(obj)
      },
      undefined, // onProgress
      function (error) {
        // onError
        reject(error)
      }
    )
  })
}
