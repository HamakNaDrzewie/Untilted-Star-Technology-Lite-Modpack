
// Custom Items
StartupEvents.registry('item', event => {

    // event.create('thorium_fuel_rod')
    //     .displayName('Thorium Fuel Rod')
    //     .texture('kubejs:item/thorium_fuel_rod');

    // event.create('highly_enriched_uranium_fuel_rod')
    //     .displayName('Highly Enriched Uranium Fuel Rod')
    //     .tooltip('20 BILLION CALORIES :trolllaugh:')
    //     .texture('kubejs:item/high_enriched_uranium_fuel_rod');

    // event.create('low_enriched_uranium_fuel_rod')
    //     .displayName('Low Enriched Uranium Fuel Rod')
    //     .texture('kubejs:item/low_enriched_uranium_fuel_rod');

    // event.create('depleted_thorium_fuel_rod')
    //     .displayName('Depleted Thorium Fuel Rod')
    //     .texture('kubejs:item/depleted_thorium_fuel_rod');

    // event.create('depleted_highly_enriched_uranium_fuel_rod')
    //     .displayName('Depleted Highly Enriched Uranium Fuel Rod')
    //     .tooltip('No more 20 billion calories :waaaaaaaaah')
    //     .texture('kubejs:item/depleted_high_enriched_uranium_rod');

    // event.create('depleted_low_enriched_uranium_fuel_rod')
    //     .displayName('Depleted Low Enriched Uranium Fuel Rod')
    //     .texture('kubejs:item/depleted_low_enriched_uranium_rod');

    event.create('lv_upgrade_kit')
        .displayName('LV Upgrade Kit')
        .texture('kubejs:item/lv_upgrade_kit');

    event.create('mv_upgrade_kit')
        .displayName('MV Upgrade Kit')
        .texture('kubejs:item/mv_upgrade_kit');

    event.create('hv_upgrade_kit')
        .displayName('HV Upgrade Kit')
        .texture('kubejs:item/hv_upgrade_kit');

    event.create('ev_upgrade_kit')
        .displayName('EV Upgrade Kit')
        .texture('kubejs:item/ev_upgrade_kit');

    event.create('lv_arc_kit')
        .displayName('LV Auxiliary Reaction Chamber Kit')
        .texture('kubejs:item/lv_arc_kit');

    event.create('mv_arc_kit')
        .displayName('MV Auxiliary Reaction Chamber Kit')
        .texture('kubejs:item/mv_arc_kit');

    event.create('hv_arc_kit')
        .displayName('HV Auxiliary Reaction Chamber Kit')
        .texture('kubejs:item/hv_arc_kit');

    event.create('ev_arc_kit')
        .displayName('EV Auxiliary Reaction Chamber Kit')
        .texture('kubejs:item/ev_arc_kit');

    event.create('lv_mci_kit')
        .displayName('LV Multi-cycle Injectors Kit')
        .texture('kubejs:item/lv_mci_kit');

    event.create('mv_mci_kit')
        .displayName('MV Multi-cycle Injectors Kit')
        .texture('kubejs:item/mv_mci_kit');

    event.create('hv_mci_kit')
        .displayName('HV Multi-cycle Injectors Kit')
        .texture('kubejs:item/hv_mci_kit');

    event.create('ev_mci_kit')
        .displayName('EV Multi-cycle Injectors Kit')
        .texture('kubejs:item/ev_mci_kit');

    event.create('coin')
        .displayName('StarT Coin')
        .texture('kubejs:item/coin');

});

// Custom Blocks
StartupEvents.registry('block', event => {

    // Custom Casings
    // event.create('soul_infused_casing', 'gtceu:renderer')
    //     .hardness(10)
    //     .resistance(1)
    //     .lightLevel(0)
    //     .textureOverrideRenderer('minecraft:block/cube_all',
    //         { 'all': new ResourceLocation('kubejs', 'block/casings/casing-soul-infused') });
            
    // event.create('signalum_casing', 'gtceu:renderer')
    //     .displayName('Ultra High Pressure and Temperature Resistant Signalum Casing')
    //     .hardness(10)
    //     .resistance(1)
    //     .lightLevel(2)
    //     .textureOverrideRenderer('minecraft:block/cube_all',
    //         { 'all': new ResourceLocation('kubejs', 'block/casings/casing-signalum') });

    // event.create('lumium_casing', 'gtceu:renderer')
    //     .hardness(10)
    //     .resistance(1)
    //     .lightLevel(2)
    //     .textureOverrideRenderer('minecraft:block/cube_all',
    //         { 'all': new ResourceLocation('kubejs', 'block/casings/casing-lumium') });

    // event.create('enderium_casing', 'gtceu:renderer')
    //     .displayName('Thermal Fluctuation Proof Enderium Casing')
    //     .hardness(10)
    //     .resistance(1)
    //     .lightLevel(0)
    //     .textureOverrideRenderer('minecraft:block/cube_all',
    //         { 'all': new ResourceLocation('kubejs', 'block/casings/casing-enderium') });

    // event.create('shellite_casing', 'gtceu:renderer')
    //     .displayName('Ultra-Resistant Shellite Casing')
    //     .hardness(10)
    //     .resistance(1)
    //     .lightLevel(0)
    //     .textureOverrideRenderer('minecraft:block/cube_all',
    //         { 'all': new ResourceLocation('kubejs', 'block/casings/casing-shellite') });

    // event.create('twinite_casing', 'gtceu:renderer')
    //     .displayName('Bend-Resistant Twinite Casing')
    //     .hardness(10)
    //     .resistance(1)
    //     .lightLevel(0)
    //     .textureOverrideRenderer('minecraft:block/cube_all',
    //         { 'all': new ResourceLocation('kubejs', 'block/casings/casing-twinite') });

    // event.create('dragonsteel_casing', 'gtceu:renderer')
    //     .displayName('Unbendable Dragonsteel Casing')
    //     .hardness(10)
    //     .resistance(1)
    //     .lightLevel(0)
    //     .textureOverrideRenderer('minecraft:block/cube_all',
    //         { 'all': new ResourceLocation('kubejs', 'block/casings/casing-dragonsteel') });

    // event.create('prismalium_casing', 'gtceu:renderer')
    //     .displayName('Transportation Prismalium Casing')
    //     .hardness(10)
    //     .resistance(1)
    //     .lightLevel(2)
    //     .textureOverrideRenderer('minecraft:block/cube_all',
    //         { 'all': new ResourceLocation('kubejs', 'block/casings/casing-prismalium') });

    // event.create('melodium_casing', 'gtceu:renderer')
    //     .displayName('Reinforced Melodium Casing')
    //     .hardness(10)
    //     .resistance(1)
    //     .lightLevel(2)
    //     .textureOverrideRenderer('minecraft:block/cube_all',
    //         { 'all': new ResourceLocation('kubejs', 'block/casings/casing-melodium') });

    // event.create('stellarium_casing', 'gtceu:renderer')
    //     .displayName('Structurally Integral Stellarium Casing')
    //     .hardness(10)
    //     .resistance(1)
    //     .lightLevel(2)
    //     .textureOverrideRenderer('minecraft:block/cube_all',
    //         { 'all': new ResourceLocation('kubejs', 'block/casings/casing-stellarium') });

    event.create('austenitic_stainless_steel_304_casing', 'gtceu:renderer')
        .displayName('Austenitic Stainless Steel 304 Nuclear Casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
        { 'all': new ResourceLocation('kubejs', 'block/casings/casing-austenitic-stainless-steel-304') });

    event.create('inconel_625_casing', 'gtceu:renderer')
        .displayName('Inconel 625 Thermal Fluctuation Resistant Casing')
        .hardness(2)
        .resistance(3)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
        { 'all': new ResourceLocation('kubejs', 'block/casings/casing-inconel-625') });

    event.create('wood_casing', 'gtceu:renderer')
        .displayName('Treatedwood Reinforced Casing')
        .hardness(5)
        .resistance(1)
        .material('wood')
        .requiresTool(true)
        .tagBlock("mineable/axe")
        .tagBlock('minecraft:needs_stone_tool')
        .textureOverrideRenderer('minecraft:block/cube_all',
        { 'all': new ResourceLocation('kubejs', 'block/casings/casing-wood')});

    // Meshblock for Kinetic Sieve

    event.create('meshblock')
        .displayName('Treatedwood Reinforced Mesh')
        .hardness(2)
        .resistance(2)
        .material('wood')
        .transparent(true)
        .defaultTranslucent() 
        .requiresTool(false)
        .tagBlock("mineable/axe")
        .tagBlock('minecraft:needs_stone_tool')
        .textureAll('kubejs:block/multiblock/meshblock');

});