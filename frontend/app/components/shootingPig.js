/* eslint-disable no-unused-vars */

/* 
  global

  Koji
  GameObject
  Matter
*/

const { Body } = Matter

class ShootingPig extends GameObject {
  constructor(cordinates, sizing, settings) {
    super(cordinates, sizing, settings)

    this.body.positionPrev.x = this.body.position.x
    this.body.positionPrev.y = this.body.position.y

    Body.setMass(this.body, 100)
  }

  flying = false
}
