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
      stiffness: 0.05,
      length: 75,
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
      stroke('#ffffff')
      strokeWeight(4)
      line(posA.x, posA.y, posB.x, posB.y)
      pop()
    }
  }

  attach(body) {
    this.sling.bodyB = body
  }

  reload() {
    shootingPig.destruct()
    shootingPig = new ShootingPig(
      { x: width / 2, y: height / 2 },
      { radius: 1 * objSize },
      { shape: 'circle', color: '#ffff00', movable: true, rotate: true }
    )
    this.attach(shootingPig.body)
  }
}
