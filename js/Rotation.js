AFRAME.registerComponent("diver_movement", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfbend: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      this.data.speedOfRoation = this.el.getAttribute("rotation");      
      this.data.speedOfbend = this.el.getAttribute("position");
      var diverRotation = this.data.speedOfRoation;      
      var diverPosition = this.data.speedOfbend;

      if (e.key === "w") {
        if (diverRotation.x < 10) {
          diverRotation.x += 1.5;
          this.el.setAttribute("rotation", diverRotation);
        }
          diverPosition.y += 0.05;
          this.el.setAttribute("position", diverPosition);

      }
      if (e.key === "s") {
        if (diverRotation.x > -10) {
          diverRotation.x -= 1.5;
          this.el.setAttribute("rotation", diverRotation);
        }
          diverPosition.y -= 0.05;
          this.el.setAttribute("position", diverPosition);
      }
      if (e.key === "d") {
        if (diverRotation.z < 15) {
          diverRotation.z += 1.5;
          this.el.setAttribute("rotation", diverRotation);
        }
          diverPosition.x += 0.05;
          this.el.setAttribute("position", diverPosition);
      }
      if (e.key === "a") {
        if (diverRotation.z > -10) {
          diverRotation.z -= 1.5;
          this.el.setAttribute("rotation", diverRotation);
        }
          diverPosition.x -= 0.05;
          this.el.setAttribute("position", diverPosition);
      }
      if (e.key === "a") {
        if (diverRotation.z > -10) {
          diverRotation.z -= 1.5;
          this.el.setAttribute("rotation", diverRotation);
        }
          diverPosition.x -= 0.05;
          this.el.setAttribute("position", diverPosition);
      
      }
      if (e.key === "ArrowDown") {
        diverPosition.z += 0.05;
        this.el.setAttribute("position", diverPosition);
      }
      if (e.key === "ArrowUp") {
        diverPosition.z -= 0.05;
        this.el.setAttribute("position", diverPosition);
      }
    });
  }
});