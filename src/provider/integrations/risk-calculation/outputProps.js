import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
    is
} from 'bpmn-js/lib/util/ModelUtil';


export default function (group, element) {

    // Only return an entry, if the currently selected
    // element is a start event.
    if (is(element, 'bpmn:ServiceTask') && element.id === 'risk-evaluation') {
        group.entries.push(entryFactory.textField({
            id: 'riskEvaluation',
            description: 'Variable donde guardar la evaluacion',
            label: 'enlaceXml',
            modelProperty: 'riskEvaluation'
        }));
    }
}
