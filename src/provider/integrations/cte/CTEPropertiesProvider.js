// Require your custom property entries.
import cteProps from './cteProps';
import cteOutputProps from "./cteOutputProps";

// Create the custom magic tab
function createCTETabGroups(element,translate) {

    // Create a group called "Black Magic".
    var cteGroup = {
        id: 'cte_input',
        label: 'Entrada',
        entries: []
    };
    var outputCteGroup = {
        id: 'cte_output',
        label: 'Salida',
        entries: []
    };

    // Add the spell props to the black magic group.
    cteProps(cteGroup, element);
    cteOutputProps(outputCteGroup, element);

    return [
        cteGroup,
        outputCteGroup
    ];
}

export default function (element,translate) {
    return {
        id: 'cteConfiguration',
        label: 'Configuracion',
        groups: createCTETabGroups(element,translate),
    }
};
