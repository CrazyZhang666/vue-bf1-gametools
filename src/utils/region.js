import asia from "@/assets/images/regions/asia.png";
import eu from "@/assets/images/regions/eu.png";
import oc from "@/assets/images/regions/oc.png";
import nam from "@/assets/images/regions/nam.png";
import sam from "@/assets/images/regions/sam.png";

function getRegionImage(region) {
  switch (region) {
    case "asia":
      return asia;
    case "eu":
      return eu;
    case "oc":
      return oc;
    case "nam":
      return nam;
    case "sam":
      return sam;
    default:
      return region;
  }
}

export default getRegionImage;
