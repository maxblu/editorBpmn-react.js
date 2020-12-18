import entryFactory from "bpmn-js-properties-panel/lib/factory/EntryFactory";

import { is } from "bpmn-js/lib/util/ModelUtil";

export default function(group, element, translate) {
  // Only return an entry, if the currently selected
  // element is a start event.

  if (is(element, "bpmn:ServiceTask") && element.id === "cte") {
    group.entries.push(
      entryFactory.textField({
        id: "rut",
        description: "Rut a evaluar ",
        label: "RUT",
        modelProperty: "rut",
      })
    );
    group.entries.push(
      entryFactory.textField({
        id: "password",
        description: "Password ",
        label: "Clave",
        modelProperty: "password",
      })
    );
  }
}
