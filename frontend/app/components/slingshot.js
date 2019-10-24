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
      stiffness: 0.01,
      length: 100,
    }

    this.sling = Constraint.create(options)

    World.add(world, this.sling)
  }

  fly() {
    this.sling.bodyB = null
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
}
