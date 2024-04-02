ServerEvents.recipes(event => {

    event.replaceInput({id: 'enderio:ender_fluid_conduit_upgrade'}, 'enderio:vibrant_alloy_ingot', 'gtceu:vibrant_alloy_ingot');

    event.recipes.create.mixing('2x enderio:conduit_binder_composite', ['minecraft:clay_ball', '#forge:sand', 'minecraft:gravel'])

    event.recipes.gtceu.mixer('conduit_binder_composite')
       .itemInputs('2x minecraft:gravel', '2x #forge:sand', '2x minecraft:clay_ball')
       .itemOutputs('8x enderio:conduit_binder_composite')
       .duration(100)
       .EUt(8)

    event.shaped(Item.of('4x enderio:lv_energy_conduit'), [
        'PPP',
        'ABA',
        'PPP'
    ], {
        P: 'enderio:conduit_binder',
        A: 'gtceu:steel_plate',
        B: 'gtceu:soul_infused_single_wire'
    });

    event.shaped(Item.of('4x enderio:mv_energy_conduit'), [
        'PPP',
        'ABA',
        'PPP'
    ], {
        P: 'enderio:conduit_binder',
        A: 'gtceu:aluminium_plate',
        B: 'gtceu:signalum_single_wire'
    });
   
    event.shaped(Item.of('4x enderio:hv_energy_conduit'), [
        'PPP',
        'ABA',
        'PPP'
    ], {
        P: 'enderio:conduit_binder',
        A: 'gtceu:stainless_steel_plate',
        B: 'gtceu:lumium_single_wire'
    });

    event.shaped(Item.of('4x enderio:ev_energy_conduit'), [
        'PPP',
        'ABA',
        'PPP'
    ], {
        P: 'enderio:conduit_binder',
        A: 'gtceu:titanium_plate',
        B: 'gtceu:enderium_single_wire'
    });

    event.shaped(Item.of('4x enderio:iv_energy_conduit'), [
        'PPP',
        'ABA',
        'PPP'
    ], {
        P: 'enderio:conduit_binder',
        A: 'gtceu:tungsten_steel_plate',
        B: 'gtceu:shellite_single_wire'
    });

    event.shaped(Item.of('4x enderio:luv_energy_conduit'), [
        'PPP',
        'ABA',
        'PPP'
    ], {
        P: 'enderio:conduit_binder',
        A: 'gtceu:rhodium_plated_palladium_plate',
        B: 'gtceu:twinite_single_wire'
    });

    event.shaped(Item.of('4x enderio:zpm_energy_conduit'), [
        'PPP',
        'ABA',
        'PPP'
    ], {
        P: 'enderio:conduit_binder',
        A: 'gtceu:naquadah_alloy_plate',
        B: 'gtceu:dragonsteel_single_wire'
    });

    event.shaped(Item.of('4x enderio:uv_energy_conduit'), [
        'PPP',
        'ABA',
        'PPP'
    ], {
        P: 'enderio:conduit_binder',
        A: 'gtceu:darmstadtium_plate',
        B: 'gtceu:prismalium_single_wire'
    });

    event.shaped(Item.of('4x enderio:uhv_energy_conduit'), [
        'PPP',
        'ABA',
        'PPP'
    ], {
        P: 'enderio:conduit_binder',
        A: 'gtceu:neutronium_plate',
        B: 'gtceu:stellarium_single_wire'
    });

    event.recipes.gtceu.assembler('lv_energy_conduit')
        .itemInputs('6x enderio:conduit_binder', '2x gtceu:steel_plate', 'gtceu:soul_infused_single_wire')
        .itemOutputs('8x enderio:lv_energy_conduit')
        .inputFluids('gtceu:conductive_alloy 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.assembler('mv_energy_conduit')
        .itemInputs('6x enderio:conduit_binder', '2x gtceu:aluminium_plate', 'gtceu:signalum_single_wire')
        .itemOutputs('8x enderio:mv_energy_conduit')
        .inputFluids('gtceu:conductive_alloy 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.assembler('hv_energy_conduit')
        .itemInputs('6x enderio:conduit_binder', '2x gtceu:stainless_steel_plate', 'gtceu:lumium_single_wire')
        .itemOutputs('8x enderio:hv_energy_conduit')
        .inputFluids('gtceu:conductive_alloy 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.assembler('ev_energy_conduit')
        .itemInputs('6x enderio:conduit_binder', '2x gtceu:titanium_plate', 'gtceu:enderium_single_wire')
        .itemOutputs('8x enderio:ev_energy_conduit')
        .inputFluids('gtceu:conductive_alloy 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.assembler('iv_energy_conduit')
        .itemInputs('6x enderio:conduit_binder', '2x gtceu:tungsten_steel_plate', 'gtceu:shellite_single_wire')
        .itemOutputs('8x enderio:iv_energy_conduit')
        .inputFluids('gtceu:conductive_alloy 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.assembler('luv_energy_conduit')
        .itemInputs('6x enderio:conduit_binder', '2x gtceu:rhodium_plated_palladium_plate', 'gtceu:twinite_single_wire')
        .itemOutputs('8x enderio:luv_energy_conduit')
        .inputFluids('gtceu:conductive_alloy 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.assembler('zpm_energy_conduit')
        .itemInputs('6x enderio:conduit_binder', '2x gtceu:naquadah_alloy_plate', 'gtceu:dragonsteel_single_wire')
        .itemOutputs('8x enderio:zpm_energy_conduit')
        .inputFluids('gtceu:conductive_alloy 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.assembler('uv_energy_conduit')
        .itemInputs('6x enderio:conduit_binder', '2x gtceu:darmstadtium_plate', 'gtceu:prismalium_single_wire')
        .itemOutputs('8x enderio:uv_energy_conduit')
        .inputFluids('gtceu:conductive_alloy 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.recipes.gtceu.assembler('uhv_energy_conduit')
        .itemInputs('6x enderio:conduit_binder', '2x gtceu:neutronium_plate', 'gtceu:stellarium_single_wire')
        .itemOutputs('8x enderio:uhv_energy_conduit')
        .inputFluids('gtceu:conductive_alloy 1000')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV]);

    event.shaped(Item.of('enderio:crafter'), [
            'PPP',
            'ABA',
            'DCD'
        ], {
            P: 'gtceu:steel_ingot',
            A: 'minecraft:iron_ingot',
            B: 'gtceu:lv_machine_hull',
            D: 'gtceu:iron_gear',
            C: 'minecraft:crafting_table'
        });

    event.shaped(Item.of('enderio:painting_machine'), [
            'ABC',
            'DED',
            'FGF'
        ], {
            A: '#forge:dyes/red',
            B: '#forge:dyes/green',
            C: '#forge:dyes/black',
            D: 'gtceu:copper_alloy_ingot',
            E: 'gtceu:lv_machine_hull',
            F: 'gtceu:iron_gear',
            G: 'gtceu:redstone_alloy_ingot'
        });

    event.shaped(Item.of('enderio:wired_charger'), [
            'AEA',
            'CDC',
            'AFA'
        ], {
            A: 'gtceu:fine_annealed_copper_wire',
            C: 'gtceu:conductive_alloy_plate',
            D: 'gtceu:mv_machine_hull',
            F: '#gtceu:circuits/mv',
            E: 'gtceu:mv_voltage_coil'
        });

    event.recipes.gtceu.alloy_smelter('enderio:clear_glass')
        .itemInputs('4x minecraft:quartz')
        .notConsumable('gtceu:block_casting_mold')
        .itemOutputs('enderio:clear_glass')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('enderio:fused_quartz')
        .itemInputs('2x minecraft:quartz', 'enderio:clear_glass')
        .itemOutputs('enderio:fused_quartz')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('enderio:fused_quartz_e')
        .itemInputs('2x minecraft:glowstone_dust', 'enderio:fused_quartz')
        .itemOutputs('enderio:fused_quartz_e')
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('copper_alloy_from_dust')
        .itemInputs('gtceu:silicon_dust', 'gtceu:copper_dust')
        .itemOutputs('2x gtceu:copper_alloy_ingot')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu.alloy_smelter('copper_alloy_from_ingot')
        .itemInputs('gtceu:silicon_dust', 'minecraft:copper_ingot')
        .itemOutputs('2x gtceu:copper_alloy_ingot')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu.mixer('copper_alloy')
        .itemInputs('gtceu:silicon_dust', 'gtceu:copper_dust')
        .itemOutputs('2x gtceu:copper_alloy_dust')
        .duration(200)
        .EUt(8);

    event.recipes.gtceu.mixer('energetic_alloy')
        .itemInputs('gtceu:gold_dust', 'minecraft:redstone', 'minecraft:glowstone')
        .itemOutputs('3x gtceu:energetic_alloy_dust')
        .duration(200)
        .EUt(28);

    event.recipes.gtceu.mixer('vibrant_alloy')
        .itemInputs('gtceu:energetic_alloy_dust', '#forge:dusts/ender_pearl')
        .itemOutputs('2x gtceu:vibrant_alloy_dust')
        .duration(200)
        .EUt(120);

    event.recipes.gtceu.alloy_smelter('redstone_alloy')
        .itemInputs('gtceu:silicon_dust', 'minecraft:redstone')
        .itemOutputs('gtceu:redstone_alloy_ingot')
        .duration(200)
        .EUt(8);  

    event.shapeless(Item.of('2x gtceu:conductive_alloy_dust'), ['gtceu:iron_dust', 'gtceu:copper_dust', 'minecraft:redstone']);

    event.recipes.gtceu.mixer('conductive_alloy')
        .itemInputs('gtceu:iron_dust', 'gtceu:copper_dust', 'minecraft:redstone')
        .itemOutputs('3x gtceu:conductive_alloy_dust')
        .duration(100)
        .EUt(8);

    event.recipes.gtceu.alloy_smelter('pulsating_alloy_from_dust')
        .itemInputs('gtceu:iron_dust', 'gtceu:ender_pearl_dust')
        .itemOutputs('gtceu:pulsating_alloy_ingot')
        .duration(200)
        .EUt(28);

    event.recipes.gtceu.alloy_smelter('pulsating_alloy_from_ingot')
        .itemInputs('minecraft:iron_ingot', 'gtceu:ender_pearl_dust')
        .itemOutputs('gtceu:pulsating_alloy_ingot')
        .duration(200)
        .EUt(28);


    event.recipes.gtceu.alloy_smelter('ender_crystal')
        .itemInputs('enderio:pulsating_crystal', 'exnihilo:vibrant_crystal')
        .itemOutputs('enderio:ender_crystal')
        .duration(200)
        .EUt(250);

    event.recipes.gtceu.alloy_smelter('dark_steel_from_dust')
        .itemInputs('gtceu:steel_dust', 'minecraft:obsidian')
        .itemOutputs('gtceu:dark_steel_ingot')
        .duration(200)
        .EUt(250);

    event.recipes.gtceu.alloy_smelter('dark_steel_from_ingot')
        .itemInputs('gtceu:steel_ingot', 'minecraft:obsidian')
        .itemOutputs('gtceu:dark_steel_ingot')
        .duration(200)
        .EUt(250);
        
});