const PassengerPlane = require("./Planes/PassengerPlane");
const MilitaryPlane = require("./Planes/MilitaryPlane");
const MilitaryType = require("./models/militaryType");
const ExperimentalPlane = require("./Planes/ExperimentalPlane");

class Airport {
  constructor(planes) {
    this.planes = planes;
  }

  getPlanes() {
    return this.planes;
  }

  getPassengerPlanes() {
    return this.planes.filter((plane) => plane.constructor.name === "PassengerPlane");
  }

  getMilitaryPlanes() {
    return this.planes.filter(
      (plane) => plane.constructor.name === "MilitaryPlane"
    );
  }

  getExperimentalPlanes() {
    return this.getMilitaryPlanes().filter(
      (plane) => plane.constructor.name === "ExperimentalPlane"
    );
  }

  getBomberMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(
      (plane) => plane.militaryType === MilitaryType.BOMBER
    );
  }

  getTransportMilitaryPlanes() {
    return this.getMilitaryPlanes().filter(
      (plane) => plane.militaryType === MilitaryType.TRANSPORT
    );
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    const maxPassengersCapacity = this.getPassengerPlanes().reduce(
      (acc, cur) =>
        cur.passengersCapacity > acc ? cur.passengersCapacity : acc,
      0
    );
    return this.getPassengerPlanes().find(
      (passengerPlane) =>
        passengerPlane.passengersCapacity === maxPassengersCapacity
    );
  }

  sortByMaxDistance() {
    this.planes.sort(
      (firstPlane, secondPlane) =>
        firstPlane.getMaxFlightDistance() - secondPlane.getMaxFlightDistance()
    );
    return this;
  }

  sortByMaxSpeed() {
    this.planes.sort(
      (firstPlane, secondPlane) =>
        firstPlane.getMaxSpeed() - secondPlane.getMaxSpeed()
    );
    return this;
  }

  sortByMaxLoadCapacity() {
    this.planes.sort(
      (firstPlane, secondPlane) =>
        firstPlane.getMaxLoadCapacity() - secondPlane.getMaxLoadCapacity()
    );
    return this;
  }

  static print(planes) {
    return JSON.stringify(planes);
  }
}

module.exports = Airport;
