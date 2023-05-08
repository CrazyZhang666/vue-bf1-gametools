import asia from "@/assets/images/regions/asia.png";
import au from "@/assets/images/regions/au.png";
import eu from "@/assets/images/regions/eu.png";
import nam from "@/assets/images/regions/nam.png";
import oc from "@/assets/images/regions/oc.png";
import sam from "@/assets/images/regions/sam.png";

function getRegionImage(region) {
  switch (region) {
    case "asia":
      return asia;
    case "au":
      return au;
    case "eu":
      return eu;
    case "nam":
      return nam;
    case "oc":
      return oc;
    case "sam":
      return sam;
    default:
      return region;
  }
}

export default getRegionImage;
