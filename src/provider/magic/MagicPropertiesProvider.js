// Require your custom property entries.
import spellProps from './parts/SpellProps';

// Create the custom magic tab
function createMagicTabGroups(element) {

    // Create a group called "Black Magic".
    var blackMagicGroup = {
        id: 'black-magic',
        label: 'Black Magic',
        entries: []
    };

    // Add the spell props to the black magic group.
    spellProps(blackMagicGroup, element);

    return [
        blackMagicGroup
    ];
}

export default function (element) {
    return {
        id: 'magic',
        label: 'Magic',
        groups: createMagicTabGroups(element)
    }
};
