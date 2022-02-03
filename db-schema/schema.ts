import {Keystone} from '@keystonejs/keystone'
import datablockSchema from './lists/datablock';
import variablekSchema from './lists/variable';
import paczkaSchema from './lists/paczki';
import plcCommandSchema from './lists/plcCommands';


export function applySchema(keystoneObject:Keystone){
    keystoneObject.createList('datablock',datablockSchema);
    keystoneObject.createList('variable',variablekSchema);
    keystoneObject.createList('paczka',paczkaSchema);
    keystoneObject.createList('operacjePLC',plcCommandSchema);
}

