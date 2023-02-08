const generateCoordinatesButton = document.querySelector("#generate-coordinates-button");
      const latitudeText = document.querySelector("#latitude-text");
      const longitudeText = document.querySelector("#longitude-text");
      const mapContainer = document.querySelector("#map");

      generateCoordinatesButton.addEventListener("click", function() {
        // Generate random coordinates here
        const lat = (Math.random() * 180 - 90).toFixed(2);
        const lng = (Math.random() * 360 - 180).toFixed(2);

        // Display the coordinates
        latitudeText.innerHTML = "Latitude: " + lat;
        longitudeText.innerHTML = "Longitude: " + lng;

        // Initialize the map
        const map = new google.maps.Map(mapContainer, {
          center: { lat: parseFloat(lat), lng: parseFloat(lng) },
          zoom: 8
        });
        const marker = new google.maps.Marker({
          position: { lat: parseFloat(lat), lng: parseFloat(lng) },
          map: map
        });
      });
