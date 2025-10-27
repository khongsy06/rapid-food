function toggleRestaurants(stationId) {
  const list = document.getElementById(stationId);
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}
