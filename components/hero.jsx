import { useEffect, useRef } from "react";
import { Engine, Render, World, Bodies } from "matter-js";

const Hero = () => {

    const scene = useRef()
    const engine = useRef(Engine.create())
    const isPressed = useRef(false)

    const handleDown = () => {
      isPressed.current = true
    }

    const handleUp = () => {
      isPressed.current = false
    }

    const handleAddCircle = e => {
      if (isPressed.current) {
        const ball = Bodies.circle(
          e.clientX,
          e.clientY,
          10 + Math.random() * 30,
          {
            mass: 10,
            restitution: 0.9,
            friction: 0.005,
            render: {
              fillStyle: '#0000ff'
            }
          })
        World.add(engine.current.world, [ball])
      }
    }

    useEffect(() => {
      // mount
      const cw = document.body.clientWidth
      const ch = document.body.clientHeight

      const render = Render.create({
        element: scene.current,
        engine: engine.current,
        options: {
          width: cw,
          height: ch,
          wireframes: false,
          background: 'transparent'
        }
      })

      // boundaries
      World.add(engine.current.world, [
        Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
        Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
        Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
        Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
      ])

      // run the engine
      Engine.run(engine.current)
      Render.run(render)

      // unmount
      return () => {
        // destroy Matter
        Render.stop(render)
        World.clear(engine.current.world)
        Engine.clear(engine.current)
        render.canvas.remove()
        render.canvas = null
        render.context = null
        render.textures = {}
      }
    }, [])

    return (
        <div
            onMouseDown={handleDown}
            onMouseUp={handleUp}
            onMouseMove={handleAddCircle}
          >
            <div className="header__name" ref={scene} />
        </div>
    )
}

export default Hero;