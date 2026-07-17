import { kenya } from "./kenya";
import { rwanda } from "./rwanda";
import { tanzania } from "./tanzania";
import { uganda } from "./uganda";
import { namibia } from "./namibia";
import { zambia } from "./zambia";
import { southAfrica } from "./southafrica";
import { seychelles } from "./seychelles";
import { botswana } from "./botswana";

import { Destination } from "./types";

export const destinations: Destination[] = [
  ...kenya,
  ...rwanda,
  ...tanzania,
  ...uganda,
  ...namibia,
  ...zambia,
  ...southAfrica,
  ...seychelles,
  ...botswana,
];

export {
  kenya,
  rwanda,
  tanzania,
  uganda,
  namibia,
  zambia,
  southAfrica,
  seychelles,
  botswana,
};
