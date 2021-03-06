import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
    is
} from 'bpmn-js/lib/util/ModelUtil';


export default function (group, element) {

    // Only return an entry, if the currently selected
    // element is a start event.
    if (is(element, 'bpmn:ServiceTask') && element.id === 'sbif') {
        group.entries.push(entryFactory.textField({
            id: 'rut',
            description: 'Rut a evaluar ',
            label: 'RUT',
            modelProperty: 'rut'
        }));
        group.entries.push(entryFactory.textField({
            id: 'customerCode',
            description: 'Codigo de cliente ',
            label: 'Codigo',
            modelProperty: 'customerCode'
        }));
    }
}
