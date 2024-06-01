
ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:industrial_primitive_blast_furnace'), [
        'hPd',
        'RBR',
        'sPs'
    ], {
        h: '#forge:tools/hammers',
        P: 'gtceu:steel_plate',
        d: '#forge:tools/screwdrivers',
        R: 'gtceu:steel_rod',
        s: 'gtceu:steel_screw',
        B: 'gtceu:primitive_blast_furnace'
    });

    // Constants
    const defaultDuration = 90*20; // duration in ticks of steel recipe
    const cokeModifier = 5 / 6; // duration modifier when using coke (90 * 5/6 = 75)
    const blockModifier = 9; // duration modifier when using blocks
    const baseIPBFModifier = 0.8; // duration modifier when using the IPBF
    const baseSteamModifier = 0.7; // duration modifier when supplying water to IPBF for steam
    const baseOxygenModifier = 0.5; // duration modifier when supplying oxygen to IPBF
    const highestModifier = 0.35; // duration modifier when supplying both water and oxygen
    const wroughtIronModifier = 4 / 9; // duration modifier when using wrought iron

    const IPBF = event.recipes.gtceu.industrial_primitive_blast_furnace;

    function steelProduction(material, type, fuel, has_water, has_oxygen) {
        let id = `ipbf_${material}_${type}_${(has_oxygen) ? 'oxygen' : 'no_oxygen'}_${fuel}_${(has_water) ? 'water' : 'no_water'}`;

        let duration = defaultDuration;

        if (material == 'wrought_iron')
            duration *= wroughtIronModifier;

        if (fuel == 'coke')
            duration *= cokeModifier;

        if (type == 'block')
            duration *= blockModifier;

        if (!has_water && !has_oxygen)
            duration *= baseIPBFModifier;

        if (has_water && !has_oxygen)
            duration *= baseSteamModifier;

        if (!has_water && has_oxygen)
            duration *= baseOxygenModifier;

        if (has_water && has_oxygen)
            duration *= highestModifier;

        let fuel_in;
        switch (fuel) {
            case 'charcoal':
                fuel_in = (type == 'ingot') ? '2x minecraft:charcoal' : '2x gtceu:charcoal_block';
                break;
            case 'coal':
                fuel_in = (type == 'ingot')? '2x minecraft:coal' : '2x minecraft:coal_block';
                break;
            case 'coke':
                fuel_in = (type == 'ingot')? 'gtceu:coke_gem' : 'gtceu:coke_block';
                break;
        }

        let circuit = 0;

        let item_inputs = [`${(material == 'iron') ? "minecraft:iron_" : "gtceu:wrought_iron_"}${type}`, fuel_in];
        let item_outputs = [`gtceu:steel_${type}`, '2x gtceu:tiny_dark_ash_dust'];
        let fluid_inputs;
        if (has_water && has_oxygen) { 
            fluid_inputs = ['minecraft:water 500', 'gtceu:oxygen 200'];
            circuit = 3;
        }
        else if (has_water) { 
            fluid_inputs = 'minecraft:water 500';
            circuit = 1;
        }
        else if (has_oxygen) { 
            fluid_inputs = 'gtceu:oxygen 200';
            circuit = 2;
        }
        let fluid_outputs = 'gtceu:carbon_dioxide 100';

        if (has_oxygen || has_water) {
            if (has_oxygen) {
                IPBF(id)
                .itemInputs(item_inputs)
                .inputFluids(fluid_inputs)
                .itemOutputs(item_outputs)
                .outputFluids(fluid_outputs)
                .duration(duration)
                .circuit(circuit);
            } else {
                IPBF(id)
                .itemInputs(item_inputs)
                .inputFluids(fluid_inputs)
                .itemOutputs(item_outputs)
                .duration(duration)
                .circuit(circuit);
            }
            
        } else {
            IPBF(id)
                .itemInputs(item_inputs)
                .itemOutputs(item_outputs)
                .duration(duration)
                .circuit(circuit);
        }
        

    }
    
    // Iron ingot charcoal
    steelProduction('iron', 'ingot', 'charcoal', false, false);
    steelProduction('iron', 'ingot', 'charcoal', false, true);
    steelProduction('iron', 'ingot', 'charcoal', true, false);
    steelProduction('iron', 'ingot', 'charcoal', true, true);
    // Iron block charcoal
    steelProduction('iron', 'block', 'charcoal', false, false);
    steelProduction('iron', 'block', 'charcoal', false, true);
    steelProduction('iron', 'block', 'charcoal', true, false);
    steelProduction('iron', 'block', 'charcoal', true, true);
    // Iron ingot coal
    steelProduction('iron', 'ingot', 'coal', false, false);
    steelProduction('iron', 'ingot', 'coal', false, true);
    steelProduction('iron', 'ingot', 'coal', true, false);
    steelProduction('iron', 'ingot', 'coal', true, true);
    // Iron block coal
    steelProduction('iron', 'block', 'coal', false, false);
    steelProduction('iron', 'block', 'coal', false, true);
    steelProduction('iron', 'block', 'coal', true, false);
    steelProduction('iron', 'block', 'coal', true, true);
    // Iron ingot coke
    steelProduction('iron', 'ingot', 'coke', false, false);
    steelProduction('iron', 'ingot', 'coke', false, true);
    steelProduction('iron', 'ingot', 'coke', true, false);
    steelProduction('iron', 'ingot', 'coke', true, true);
    // Iron block coke
    steelProduction('iron', 'block', 'coke', false, false);
    steelProduction('iron', 'block', 'coke', false, true);
    steelProduction('iron', 'block', 'coke', true, false);
    steelProduction('iron', 'block', 'coke', true, true);
    // Wrought iron ingot charcoal
    steelProduction('wrought_iron', 'ingot', 'charcoal', false, false);
    steelProduction('wrought_iron', 'ingot', 'charcoal', false, true);
    steelProduction('wrought_iron', 'ingot', 'charcoal', true, false);
    steelProduction('wrought_iron', 'ingot', 'charcoal', true, true);
    // Wrought iron block charcoal
    steelProduction('wrought_iron', 'block', 'charcoal', false, false);
    steelProduction('wrought_iron', 'block', 'charcoal', false, true);
    steelProduction('wrought_iron', 'block', 'charcoal', true, false);
    steelProduction('wrought_iron', 'block', 'charcoal', true, true);
    // Wrought iron ingot coal
    steelProduction('wrought_iron', 'ingot', 'coal', false, false);
    steelProduction('wrought_iron', 'ingot', 'coal', false, true);
    steelProduction('wrought_iron', 'ingot', 'coal', true, false);
    steelProduction('wrought_iron', 'ingot', 'coal', true, true);
    // Wrought iron block coal
    steelProduction('wrought_iron', 'block', 'coal', false, false);
    steelProduction('wrought_iron', 'block', 'coal', false, true);
    steelProduction('wrought_iron', 'block', 'coal', true, false);
    steelProduction('wrought_iron', 'block', 'coal', true, true);
    // Wrought iron ingot coke
    steelProduction('wrought_iron', 'ingot', 'coke', false, false);
    steelProduction('wrought_iron', 'ingot', 'coke', false, true);
    steelProduction('wrought_iron', 'ingot', 'coke', true, false);
    steelProduction('wrought_iron', 'ingot', 'coke', true, true);
    // Wrought iron block coke
    steelProduction('wrought_iron', 'block', 'coke', false, false);
    steelProduction('wrought_iron', 'block', 'coke', false, true);
    steelProduction('wrought_iron', 'block', 'coke', true, false);
    steelProduction('wrought_iron', 'block', 'coke', true, true);


});