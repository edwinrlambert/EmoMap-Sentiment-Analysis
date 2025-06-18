function initAutocomplete() {
    const input = document.getElementById("autocomplete");
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields(["geometry", "name"]);

    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const name = encodeURIComponent(place.name);

        // Redirect with query parameters
        window.location.href = `/search?lat=${lat}&lng=${lng}&name=${name}`;
    });
}