// Require your custom property entries.
import equifaxProps from './equifaxProps';
import outputProps from "./outputProps";

// Create the custom magic tab
function createCTETabGroups(element) {

    // Create a group called "Black Magic".
    var group = {
        id: 'equifax_input',
        label: 'Entrada',
        entries: []
    };
    var outputGroup = {
        id: 'equifax_output',
        label: 'Salida',
        entries: []
    };

    // Add the spell props to the black magic group.
    equifaxProps(group, element);
    outputProps(outputGroup, element);

    return [
        group,
        outputGroup
    ];
}

export default function (element) {
    return {
        id: 'equifaxConfiguration',
        label: 'Configuracion',
        groups: createCTETabGroups(element),
    }
};
