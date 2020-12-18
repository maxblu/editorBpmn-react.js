import inherits from "inherits";

import PropertiesActivator from "bpmn-js-properties-panel/lib/PropertiesActivator";
// Require all properties you need from existing providers.
// In this case all available bpmn relevant properties without camunda extensions.
import processProps from "bpmn-js-properties-panel/lib/provider/bpmn/parts/ProcessProps";
import eventProps from "bpmn-js-properties-panel/lib/provider/bpmn/parts/EventProps";
import linkProps from "bpmn-js-properties-panel/lib/provider/bpmn/parts/LinkProps";
import documentationProps from "bpmn-js-properties-panel/lib/provider/bpmn/parts/DocumentationProps";
import idProps from "bpmn-js-properties-panel/lib/provider/bpmn/parts/IdProps";
import nameProps from "bpmn-js-properties-panel/lib/provider/bpmn/parts/NameProps";
import magicTab from "./magic/MagicPropertiesProvider";
import cteTab from "./integrations/cte/CTEPropertiesProvider";
import sbifTab from "./integrations/sbif/SbifPropertiesProvider";
import equifaxTab from "./integrations/equifax/EquifaxPropertiesProvider";
import riskCalculationTab from "./integrations/risk-calculation/RiskCalculationPropertiesProvider";
import CamundaPropertiesProvider from "bpmn-js-properties-panel/lib/provider/camunda/CamundaPropertiesProvider";

function createGeneralTabGroups(
  element,
  bpmnFactory,
  canvas,
  elementRegistry,
  translate
) {
  var generalGroup = {
    id: "general",
    label: "General",
    entries: [],
  };
  idProps(generalGroup, element, translate);
  nameProps(generalGroup, element, bpmnFactory, canvas, translate);
  processProps(generalGroup, element, translate);

  var detailsGroup = {
    id: "details",
    label: "Details",
    entries: [],
  };
  linkProps(detailsGroup, element, translate);
  eventProps(detailsGroup, element, bpmnFactory, elementRegistry, translate);

  var documentationGroup = {
    id: "documentation",
    label: "Documentation",
    entries: [],
  };

  documentationProps(documentationGroup, element, bpmnFactory, translate);

  return [generalGroup, detailsGroup, documentationGroup];
}

// export default function SharedPropertiesProvider(eventBus, canvas, bpmnFactory, elementRegistry, elementTemplates, modeling, replace, selection, translate) {
// export default function SharedPropertiesProvider(eventBus, bpmnFactory, canvas, elementRegistry, elementTemplates, translate) {

export default function SharedPropertiesProvider(
  eventBus,
  bpmnFactory,
  elementRegistry,
  elementTemplates,
  translate,
  canvas,
  modeling,
  replace,
  selection
) {
  PropertiesActivator.call(this, eventBus);

  let camunda = new CamundaPropertiesProvider(
    eventBus,
    bpmnFactory,
    elementRegistry,
    elementTemplates,
    translate,
    canvas,
    modeling,
    replace,
    selection
  );

  this.getTabs = function(element) {
    // var generalTab = {
    //     id: 'general',
    //     label: 'General',
    //     groups: createGeneralTabGroups(element, bpmnFactory, canvas, elementRegistry, translate)
    // };
    var camundaTabs = camunda.getTabs(element);
    return camundaTabs.concat([
      magicTab(element),
      cteTab(element, translate),
      sbifTab(element),
      equifaxTab(element),
      riskCalculationTab(element),
    ]);
  };
}

// SharedPropertiesProvider.$inject = [
//     'eventBus',
//     'canvas',
//     'bpmnFactory',
//     'elementRegistry',
//     'elementTemplates',
//     'translate'
// ];
SharedPropertiesProvider.$inject = [
  "eventBus",
  "bpmnFactory",
  "elementRegistry",
  "elementTemplates",
  "translate",
  "canvas",
  "modeling",
  "replace",
  "selection",
];

inherits(SharedPropertiesProvider, PropertiesActivator);
