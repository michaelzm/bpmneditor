import { BpmnElement } from './bpmn-element';

var MOCKBPMNELEMENT = new BpmnElement();
MOCKBPMNELEMENT.description = "generic description";
MOCKBPMNELEMENT.followingElement = "Element3";
MOCKBPMNELEMENT.previousElement = "Element1";
MOCKBPMNELEMENT.hasSyntaxError = false;
MOCKBPMNELEMENT.height = 200;
MOCKBPMNELEMENT.width = 200;
MOCKBPMNELEMENT.posX = 100;
MOCKBPMNELEMENT.posY = 500;
MOCKBPMNELEMENT.type = "Activity";

export { MOCKBPMNELEMENT};