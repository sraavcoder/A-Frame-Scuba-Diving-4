  AFRAME.registerComponent("fish", {
      init: function () {
        for (var i = 1; i <= 6; i++) {
          var id = `fish${i}`;
    
          var posX = Math.random() * 100 + (-50);      
          var posY = Math.random() * 5 + 5;
          var posZ = Math.random() * 60 + (-40);
    
          var position = { x: posX, y: posY, z: posZ }
    
          this.fishes(id, position);
    
        }
      },
      fishes: function (id,position) {
          const treasureEntity = document.querySelector("#fishModels")
          var fishEl = document.createElement("a-entity");
    
          fishEl.setAttribute("id", id);
          fishEl.setAttribute("position",position);
          fishEl.setAttribute("scale",{ x: 0.4,y: 0.4,z: 0.4 });
          fishEl.setAttribute("rotation",{ x: 0,y: 180,z: 0 });
    
          fishEl.setAttribute(
          "gltf-model",
          "./assets/fish/scene.gltf"
        );
        
        fishEl.setAttribute("animation", {
          property: "position",
          to: "100 10 -20",
          loop: "true",
          dur: 20000
        });
        
        fishEl.setAttribute("animation-mixer",{});
        treasureEntity.appendChild(fishEl);
    
      }
      
    });
    
    
    