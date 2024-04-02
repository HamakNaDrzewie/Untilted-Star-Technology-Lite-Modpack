
ServerEvents.recipes(event => {
    const dirt = 'minecraft:dirt';
    const moss = 'minecraft:moss_block';
    const gravel = 'minecraft:gravel';
    const cdirt = 'minecraft:coarse_dirt';
    const sand = '#minecraft:sand';
    const dust = 'exdeorum:dust';
    const blackstone = 'exdeorum:crushed_blackstone';
    const deepslate = 'exdeorum:crushed_deepslate';

    exdeorum.removeDefaultSieveRecipes(event);

    function sieve(mesh, input, result, maxAmount, chance) {
        for (let i = 0; i < result.length; i++) {
            event.custom({
                "type": "exdeorum:sieve",
                "ingredient": {
                  "item": input
                },
                "mesh": `exdeorum:${mesh}_mesh`,
                "result": result[i],
                "result_amount": {
                  "type": "minecraft:binomial",
                  "n": maxAmount[i],
                  "p": chance[i]
                }
            });
        }
    }

    // function hammer(input, result) {
    //     event.custom({
    //         "type": `exdeorum:hammer`,
    //         "input": input,
    //         "results": [result]
    //     })
    // }

    // function heat(block, heat) {
    //     event.custom({
    //         "type": `exdeorum:heat`,
    //         "block": block,
    //         "amount": heat
    //     })
    // }

    sieve('string', dirt, [
            'exdeorum:stone_pebble', 'exdeorum:deepslate_pebble','exdeorum:diorite_pebble', 
            'exdeorum:granite_pebble', 'exdeorum:andesite_pebble', 'exdeorum:tuff_pebble',
            'minecraft:kelp', 'minecraft:wheat_seeds', 'exdeorum:grass_seeds', 
            'minecraft:beetroot_seeds', 'minecraft:melon_seeds', 'minecraft:pumpkin_seeds', 
            'minecraft:potato', 'minecraft:carrot', 'minecraft:sweet_berries', 
            'minecraft:bamboo', 'minecraft:pink_petals', 'exdeorum:mycelium_spores'
        ], [
            7, 4, 7, 
            7, 7, 7, 
            1, 1, 1, 
            1, 1, 1, 
            1, 1, 1, 
            1, 1, 1
        ], [
            0.8, 0.65, 0.4, 
            0.4, 0.4, 0.4, 
            0.1, 0.2, 0.2, 
            0.1, 0.165, 0.165, 
            0.3, 0.3, 0.05, 
            0.06, 0.03, 0.2
        ]);

    sieve('string', moss, [
        'minecraft:oak_sapling', 'minecraft:spruce_sapling', 
        'minecraft:cherry_sapling', 'minecraft:birch_sapling', 
        'minecraft:acacia_sapling', 'minecraft:jungle_sapling', 
        'minecraft:dark_oak_sapling', 'minecraft:mangrove_propagule', 
        'minecraft:azalea', 'minecraft:small_dripleaf', 
        'minecraft:big_dripleaf', 'minecraft:glow_berries', 
        'minecraft:spore_blossom', 'minecraft:lily_pad', 
        'minecraft:glow_lichen', 'minecraft:sugar_cane', 
        'minecraft:sweet_berries', 'gtceu:rubber_sapling'

    ], [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ], [
        0.13, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.13, 0.195, 0.15, 0.105, 0.04, 0.04, 0.03, 0.03, 0.05, 0.01
    ]);

    sieve('string', cdirt, [
        dirt, dirt, gravel
    ], [
        4, 2, 2
    ], [
        1, 0.5, 0.5
    ]);

    sieve('string', deepslate, [
        'exdeorum:deepslate_pebble', 'exdeorum:blackstone_pebble', 
        'gtceu:crushed_iron_ore', 'gtceu:crushed_copper_ore', 
        'gtceu:crushed_cassiterite_ore', 'gtceu:crushed_sphalerite_ore',
        'minecraft:redstone', 'enderio:grains_of_infinity'
    ], [
        4, 4, 1, 1, 1, 1, 4, 1
    ], [
        0.5, 0.5, 0.35, 0.3, 0.3, 0.2, 0.25, 0.1
    ]);

    sieve('string', blackstone, [
        'exdeorum:blackstone_pebble', 'exdeorum:basalt_pebble',
        'gtceu:crushed_galena_ore', 'gtceu:crushed_stibnite_ore', 
        'minecraft:quartz', 'minecraft:glowstone_dust',
        'gtceu:small_sulfur_dust', 'minecraft:ender_pearl'
    ], [
        4, 4, 1, 1, 3, 4, 4, 1
    ], [
        0.5, 0.5, 0.4, 0.3, 0.25, 0.1, 0.6, 0.05
    ]);

    sieve('flint', deepslate, [
        'exdeorum:deepslate_pebble', 'exdeorum:blackstone_pebble',
        'gtceu:crushed_diamond_ore', 'gtceu:crushed_lapis_ore',
        'gtceu:crushed_emerald_ore', 'gtceu:crushed_green_sapphire_ore', 
        'gtceu:crushed_sapphire_ore', 'gtceu:crushed_ruby_ore', 
        'gtceu:crushed_coal_ore', 'gtceu:crushed_salt_ore', 
        'gtceu:crushed_rock_salt_ore', 'gtceu:crushed_saltpeter_ore' 
    ], [
        4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ], [
        0.5, 0.5, 0.1, 0.2, 0.1, 0.4, 0.4, 0.35, 0.5, 0.7, 0.7, 0.4
    ]);

    sieve('flint', blackstone, [
        'exdeorum:blackstone_pebble', 'exdeorum:basalt_pebble',
        'gtceu:crushed_silver_ore', 'gtceu:crushed_gold_ore', 
        'gtceu:crushed_pentlandite_ore', 'gtceu:crushed_quartzite_ore', 
        'gtceu:crushed_certus_quartz_ore','gtceu:crushed_realgar_ore',
        'gtceu:crushed_redstone_ore', 'ae2:sky_dust'
    ], [
        4, 4, 1, 1, 1, 1, 1, 1, 1, 1
    ], [
        0.5, 0.5, 0.25, 0.2, 0.6, 0.1, 0.3, 0.5, 0.8, 0.01
    ]);

    sieve('golden', deepslate, [
        'exdeorum:deepslate_pebble', 'exdeorum:blackstone_pebble',
        'gtceu:crushed_pyrolusite_ore', 'gtceu:crushed_lepidolite_ore',
        'gtceu:crushed_blue_topaz_ore','gtceu:crushed_topaz_ore', 
        'gtceu:crushed_apatite_ore', 'gtceu:crushed_monazite_ore'
    ], [
        4, 4, 1, 1, 1, 1, 1, 1
    ], [
        0.5, 0.5, 0.3, 0.8, 0.5, 0.5, 0.8, 0.2
    ]);

    sieve('golden', blackstone, [
        'exdeorum:blackstone_pebble', 'exdeorum:basalt_pebble',
        'gtceu:crushed_cobaltite_ore', 'gtceu:crushed_yellow_garnet_ore',
        'gtceu:crushed_red_garnet_ore', 'gtceu:crushed_garnet_sand_ore'
    ], [
        4, 4, 1, 1, 1, 1, 
    ], [
        0.5, 0.5, 0.6, 0.2, 0.4, 0.4
    ]);

    sieve('diamond', deepslate, [
        'exdeorum:deepslate_pebble', 'exdeorum:blackstone_pebble',
        'gtceu:crushed_tantalite_ore', 'gtceu:crushed_bauxite_ore',
        'gtceu:crushed_pollucite_ore'
    ], [
        4, 4, 1, 1, 1
    ], [
        0.5, 0.5, 0.2, 0.4, 0.1
    ]);

    sieve('diamond', blackstone, [
        'exdeorum:blackstone_pebble', 'exdeorum:basalt_pebble',
        'gtceu:crushed_molybdenite_ore', 'gtceu:crushed_pitchblende_ore',
        'gtceu:crushed_ilmenite_ore'
    ], [
        4, 4, 1, 1, 1
    ], [
        0.5, 0.5, 0.4, 0.7, 0.5
    ]);

    sieve('iron', deepslate, [
        'exdeorum:deepslate_pebble', 'exdeorum:blackstone_pebble',
        'gtceu:crushed_tungstate_ore', 'gtceu:crushed_scheelite_ore'

    ], [
        4, 4, 1, 1
    ], [
        0.5, 0.5, 0.2, 0.2
    ]);

    sieve('iron', blackstone, [
        'exdeorum:blackstone_pebble', 'exdeorum:basalt_pebble',
        'gtceu:crushed_bastnasite_ore', 'gtceu:crushed_cooperite_ore',
        'gtceu:crushed_barite_ore'
    ], [
        4, 4, 1, 1, 1
    ], [
        0.5, 0.5, 0.6, 0.8, 0.7
    ]);

    sieve('netherite', blackstone, [
        'exdeorum:blackstone_pebble', 'exdeorum:basalt_pebble',
        'gtceu:crushed_naquadah_ore'
    ], [
        4, 4, 1
    ], [
        0.5, 0.5, 0.05
    ]);

    
});

