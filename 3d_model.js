document.addEventListener("DOMContentLoaded", () => {
    const modelViewer = document.getElementById("carModel");
    if (!modelViewer) {
        console.error("model-viewer element not found");
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log("Intersection change:", entry);
            if (!entry.isIntersecting) {
                console.log("Resetting camera orbit");
                modelViewer.cameraOrbit = "270deg 90deg 1.2m";

            }
        });
    });
    observer.observe(modelViewer);
});

// List of car models with their corresponding 3D model file paths
const carModels = {
    'tata_punch_tropical_mist': '/images/tata_punch_tropical_mist.glb',
    'tata_safari': '/images/2021_tata_safari.glb',
    'dzire': '/images/2022_maruti_suzuki_swift_dzire.glb',
    'brezza': '/images/2022_maruti_suzuki_vitara_brezza.glb',
    'vitara': '/images/suzuki_grand_vitara.glb',
    'tiago': '/images/tata_tiago.glb',
    // Add more cars here
  };
  
  // Get references to the select element and the model viewer
  const carSelect = document.getElementById('carSelect');
  const carModel = document.getElementById('carModel');
  
  // Event listener for the car selection change
  carSelect.addEventListener('change', function() {
    // Get the selected car name (it matches the key in the carModels object)
    const selectedCar = carSelect.value;
    
    // Update the model viewer's src attribute with the corresponding car model file
    if (carModels[selectedCar]) {
      carModel.setAttribute('src', carModels[selectedCar]);
    }
  });
  