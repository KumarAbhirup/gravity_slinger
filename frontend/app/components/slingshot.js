/* eslint-disable no-global-assign */
/* eslint-disable no-unused-vars */

/* 
  global

  Koji
  Constraint
  World
  world
  stroke
  strokeWeight
  line
  push
  pop
  createVector
  shootingPig
  objSize
  width
  height
  ShootingPig
  imgShootingPig
  particlesEffect
  imgLife
  stick
*/

class Slingshot {
  constructor(x, y, body) {
    this.x = x
    this.y = y

    const options = {
      pointA: {
        x,
        y,
      },
      bodyB: body,
      stiffness: 0.09,
    }

    this.sling = Constraint.create(options)

    World.add(world, this.sling)
  }

  fly() {
    this.sling.bodyB = null
    shootingPig.settings.movable = false
    shootingPig.body.movable = false
    shootingPig.flying = true
  }

  show() {
    if (this.sling.bodyB) {
      const posA = this.sling.pointA
      const posB = this.sling.bodyB.position

      push()
      stroke(Koji.config.colors.slingColor)
      strokeWeight(4)
      line(posA.x, posA.y, posB.x, posB.y)
      pop()
    }
  }

  attach(body) {
    this.sling.bodyB = body
  }

  reload() {
    particlesEffect(
      imgLife,
      {
        x: objSize * 9,
        y: height / 2 + height / 3 - stick.sizing.height / 2,
      },
      10
    )

    shootingPig.destruct()
    shootingPig = new ShootingPig(
      { x: objSize * 9, y: height / 2 + height / 3 - stick.sizing.height / 2 },
      { radius: 1 * objSize },
      { shape: 'circle', image: imgShootingPig, movable: true, rotate: true }
    )
    this.attach(shootingPig.body)
  }
}
