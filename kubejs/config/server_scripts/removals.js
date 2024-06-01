
ServerEvents.recipes(event => {
    const toRemoveOutput = ['thermal:machine_furnace', 'thermal:machine_sawmill',
        'thermal:machine_pulverizer', 'thermal:machine_insolator', 'thermal:machine_centrifuge', 'thermal:machine_crucible', 'thermal:machine_chiller', 'thermal:machine_refinery',
        'thermal:machine_pyrolyzer', 'thermal:machine_bottler', 'thermal:machine_brewer', 'thermal:machine_crystallizer', 'thermal:machine_crafter', 'thermal:machine_smelter', 'thermal:machine_press',
        'exdeorum:flint_mesh', 'exdeorum:iron_mesh', 'exdeorum:diamond_mesh', 'exdeorum:emerald_mesh', 'exdeorum:netherite_mesh',
        'thermal:obsidian_glass', 'thermal:signalum_glass', 'thermal:lumium_glass', 'thermal:enderium_glass', 'thermal:machine_frame', 'thermal:fluid_cell_frame',
        'thermal:energy_cell_frame', 'thermal:earth_charge', 'thermal:ice_charge', 'thermal:lightning_charge', 'thermal:fluid_cell', 'thermal:energy_cell', 'ae2:inscriber',
        'ae2:vibration_chamber', 'ae2:silicon', 'ae2:controller', 'fluxnetworks:flux_dust', 'expatternprovider:ex_inscriber', 'ae2:charger', 'expatternprovider:ex_charger', 'ae2:quartz_fiber', 'ae2:fluix_glass_cable',
        'exdeorum:mechanical_sieve', 'exdeorum:mechanical_hammer', 'enderio:energy_conduit', 'enderio:alloy_smelter', 'enderio:primitive_alloy_smelter', 'enderio:soul_engine', 'enderio:sag_mill',
        'enderio:powered_spawner', 'enderio:stirling_generator', 'enderio:impulse_hopper'
    ];
    const toRemoveId = ['thermal:slime_mushroom_spores',
        'create:pressing/sugar_cane', 'gtceu:shaped/good_circuit_board',
        'thermal:rubber_from_vine', 'thermal:rubber_from_dandelion', 'thermal:smelting/cured_rubber_from_smelting',
        'thermal:rf_coil', 'create:compat/ae2/milling/sky_stone_block',
        'create:compat/ae2/milling/fluix_crystal', 'create:compat/ae2/milling/ender_pearl', 'create:compat/ae2/milling/certus_quartz',
        'create:crushing/raw_platinum_ore', 'create:crushing/raw_platinum_block', 'create:crushing/raw_uranium_ore',
        'create:crushing/raw_uranium_block', 'create:crafting/appliances/slime_ball', 'minecraft:fire_charge', 'gtceu:shapeless/dust_bronze',
        'gtceu:shapeless/dust_brass', 'create:mixing/brass_ingot', 'minecraft:ender_eye',
        'ae2:network/cables/covered_fluix', 'exdeorum:barrel_fluid_mixing/netherrack', 'exdeorum:barrel_fluid_mixing/blackstone', 'exdeorum:barrel_mixing/magma_cream', 'exdeorum:barrel_mixing/end_stone',
        'gtceu:shaped/compressed_coke_clay', 'ae2:network/cables/glass_fluix', 'ae2:network/parts/quartz_fiber_part', 'enderio:slice_and_splice',
        'enderio:soul_binder', 'enderio:drain', 'minecraft:glowstone'
    ];

    const toRemoveType = ['thermal:sawmill', 'thermal:pulverizer', 'thermal:insolator', 'thermal:centrifuge', 'thermal:crucible', 'thermal:chiller', 'thermal:refinery', 'thermal:pyrolyzer',
        'thermal:crystallizer', 'thermal:press', 'thermal:smelter', 'enderio:drain', 'enderio:slicing', 'enderio:alloy_smelting', 'enderio:sag_milling', 'enderio:soul_binding'
    ];

    toRemoveOutput.forEach(element => {
        event.remove({ output: element});
    });

    toRemoveId.forEach(element => {
        event.remove({ id: element});
    });

    toRemoveType.forEach(element => {
        event.remove({ type: element});
    });

    event.remove({ input: 'minecraft:fire_charge'});

    event.remove({ input: 'minecraft:fire_charge'});
    event.remove({ input: 'thermal:earth_charge'});
    event.remove({ mod: 'jetboots'});

    event.remove({ input: 'minecraft:netherite_scrap'});
    event.remove({ output: 'minecraft:netherite_scrap'});
    event.remove({ input: 'minecraft:ancient_debris'});
    event.remove({ output: 'minecraft:netherite_ingot'});

    event.remove({output: 'enderio:conduit_binder_composite'})
    event.remove({id: 'enderio:crafter'})
    event.remove({id: 'enderio:painting_machine'})
    event.remove({id: 'enderio:wired_charger'})
    event.remove({id: 'enderio:soularium_grinding_ball'})
    event.remove({id: 'enderio:conductive_alloy_grinding_ball'})
    event.remove({id: 'enderio:pulsating_alloy_grinding_ball'})
    event.remove({id: 'enderio:redstone_alloy_grinding_ball'})
    event.remove({id: 'enderio:energetic_alloy_grinding_ball'})
    event.remove({id: 'enderio:vibrant_alloy_grinding_ball'})
    event.remove({id: 'enderio:copper_alloy_grinding_ball'})
    event.remove({id: 'enderio:dark_steel_grinding_ball'})
    event.remove({id: 'enderio:end_steel_grinding_ball'})

    event.remove({output: 'enderio:copper_alloy_ingot'})
    event.remove({output: 'enderio:vibrant_alloy_ingot'})
    event.remove({output: 'enderio:redstone_alloy_ingot'})
    event.remove({output: 'enderio:conductive_alloy_ingot'})
    event.remove({output: 'enderio:pulsating_alloy_ingot'})
    event.remove({output: 'enderio:dark_steel_ingot'})
    event.remove({output: 'enderio:soularium_ingot'})
    event.remove({output: 'enderio:end_steel_ingot'})
    event.remove({output: 'enderio:energetic_alloy_ingot'})

    event.remove({output: 'enderio:energized_gear'})
    event.remove({output: 'enderio:vibrant_gear'})
    event.remove({output: 'enderio:dark_bimetal_gear'})

    event.remove({id: 'enderio:iron_gear'})

    event.remove({id: 'ae2:network/crafting/molecular_assembler'})
    event.remove({id: 'ae2:network/blocks/pattern_providers_interface'})
    event.remove({id: 'ae2:network/crafting/cpu_crafting_unit'})
    event.remove({id: 'ae2:network/blocks/energy_energy_acceptor'})
    event.remove({id: 'ae2:network/blocks/interfaces_interface'})
    event.remove({output: 'ae2:drive'})
    event.remove({id: 'ae2:network/blocks/io_condenser'})
    event.remove({id: 'ae2:network/blocks/cell_workbench'})
    event.remove({id: 'ae2:network/blocks/spatial_io_port'})
    event.remove({id: 'ae2:network/blocks/io_port'})
    event.remove({output: 'ae2:chest'})

    event.remove({output: 'exdeorum:flint_mesh'})
    event.remove({output: 'exdeorum:iron_mesh'})
    event.remove({output: 'exdeorum:golden_mesh'})
    event.remove({output: 'exdeorum:diamond_mesh'})
    event.remove({output: 'exdeorum:netherite_mesh'})
});


