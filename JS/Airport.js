const PassengerPlane = require("./planes/PassengerPlane");
const MilitaryPlane = require("./planes/MilitaryPlane");
const MilitaryType = require("./models/militaryType");
const ExperimentalPlane = require("./planes/ExperimentalPlane");

class Airport {
  constructor(planes) {
    this.planes = planes;
  }

  getPlanes() {
    return this.planes;
  }

  getPassengerPlanes() {
    return this.planes.filter((plane) => plane instanceof PassengerPlane);
  }

  getMilitaryPlanes() {
    return this.planes.filter((plane) => plane instanceof MilitaryPlane);
  }

  getExperimentalPlanes() {
    return this.planes.filter((plane) => plane instanceof ExperimentalPlane);
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
