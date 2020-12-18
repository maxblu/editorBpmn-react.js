import React, { Component }  from 'react';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-font/dist/css/bpmn-embedded.css';
import { emptyBpmn } from '../../assets/empty.bpmn';
import propertiesPanelModule from "bpmn-js-properties-panel";
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';

import sharedPropertiesProviderModule from '../../provider';
import magicModdleDescriptor from  "../../descriptors/magic.json";
import cteModdleDescriptor from '../../descriptors/cte.json';
import customControlModule from "../../controls/index";
import DefaultNameBehavior from '../../interceptors/DefaultNameBehaviour';
import {newbpmn} from '../../assets/newbpmn.bpmn'  
// import diagramXML from '../../'

var defaultNameBehaviorModule = {
    __init__: ["defaultNameBehavior"],
    defaultNameBehavior: ["type", DefaultNameBehavior],
  };

  console.log(sharedPropertiesProviderModule );
class BpmnModelerComponent extends Component {
    
    modeler = null;
    
    componentDidMount = () => {
        this.modeler = new BpmnModeler({
            container: '#bpmnview',
            keyboard: {
                bindTo: window
            },
            propertiesPanel: {
                parent: '#propview'
            },
            additionalModules: [
                propertiesPanelModule,
                sharedPropertiesProviderModule,
                customControlModule,
                defaultNameBehaviorModule,
            ],
            moddleExtensions: {
                camunda: camundaModdleDescriptor,
                magic: magicModdleDescriptor,
                cte: cteModdleDescriptor,
            }
        });

        this.newBpmnDiagram();
    }

    newBpmnDiagram = (e) => {
        this.openBpmnDiagram(newbpmn);
    }

    openBpmnDiagram = (xml) => {
        this.modeler.importXML(xml, (error) => {
            if (error) {
                return console.log('fail import xml');
            }

            var canvas = this.modeler.get('canvas');

            canvas.zoom('fit-viewport');
        });
    }



    render = () => {
        return(
            <div id="bpmncontainer">
                <div id="propview" style={{ width: '25%', height: '98vh', float: 'right', maxHeight: '98vh', overflowX: 'auto' }}></div>
                <button onClick={this.newBpmnDiagram}>Create New</button>
                <div id="bpmnview" style={{ width: '75%', height: '98vh', float: 'left' }}></div>
            </div>
        )
    }
}

export default BpmnModelerComponent;
