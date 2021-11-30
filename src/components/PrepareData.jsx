import Bartender from "./Bartender";

const timestamp = "";
const bar = {
  name: "",
  closingTime: "",
};
const queue = [
  {
    id: "",
    startTime: "",
    order: [],
  },
];
const serving = [
  {
    id: "",
    startTime: "",
    order: [],
  },
];
const bartender = [
  {
    name: "",
    status: "",
    statusDetail: "",
    usingTap: "",
    servingCustomer: "",
  },
];
const taps = [
  {
    id: "",
    level: "",
    capacity: "",
    beer: "",
    inUse: "",
  },
];
const storage = [
  {
    name: "",
    amount: "",
  },
];
const foobarData = [];

function PrepareData(data) {
  bartender = Object.create(Bartender);
}

export default PrepareData;
