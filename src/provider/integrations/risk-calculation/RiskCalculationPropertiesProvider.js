// Require your custom property entries.
import inputProps from './inputProps';
import outputProps from "./outputProps";

// Create the custom magic tab
function createRiskCalculationTabGroups(element) {

    // Create a group called "Black Magic".
    var group = {
        id: 'risk_calculation_input',
        label: 'Entrada',
        entries: []
    };
    var outputGroup = {
        id: 'risk_calculation_output',
        label: 'Salida',
        entries: []
    };

    // Add the spell props to the black magic group.
    inputProps(group, element);
    outputProps(outputGroup, element);

    return [
        group,
        outputGroup
    ];
}

export default function (element) {
    return {
        id: 'riskCalculationConfiguration',
        label: 'Configuracion',
        groups: createRiskCalculationTabGroups(element),
    }
};
