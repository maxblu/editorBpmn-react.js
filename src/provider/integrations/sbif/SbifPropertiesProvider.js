// Require your custom property entries.
import props from './props';
import outputProps from "./outputProps";

// Create the custom magic tab
function createTabGroups(element) {

    // Create a group called "Black Magic".
    var inputGroup = {
        id: 'sbif_input',
        label: 'Entrada',
        entries: []
    };
    var outputGroup = {
        id: 'sbif_output',
        label: 'Salida',
        entries: []
    };

    // Add the spell props to the black magic group.
    props(inputGroup, element);
    outputProps(outputGroup, element);

    return [
        inputGroup,
        outputGroup
    ];
}

export default function (element) {
    return {
        id: 'sbifConfigration',
        label: 'Configuracion',
        groups: createTabGroups(element),
    }
};
