import sharedPropertiesProvider from "./SharedPropertiesProvider";

export default {
  __depends__: [
    require("bpmn-js-properties-panel/lib/provider/camunda/element-templates"),
  ],
  __init__: ["propertiesProvider"],
  propertiesProvider: ["type", sharedPropertiesProvider],
};
