import axios from "axios";

export default function locationFinder() {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        let locationData = response.data;
        console.log("Location data:", response.data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocation();

}

locationFinder