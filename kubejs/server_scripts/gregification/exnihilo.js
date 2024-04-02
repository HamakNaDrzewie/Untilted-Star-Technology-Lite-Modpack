
ServerEvents.recipes(event => {

    event.shaped(Item.of('exdeorum:mechanical_sieve'), [
        'PGP',
        'PHP',
        'RCR'
    ], {
        P: 'gtceu:steel_plate',
        G: '#forge:glass_panes',
        H: 'minecraft:hopper',
        R: 'gtceu:steel_rod',
        C: 'gtceu:red_alloy_single_cable'
    });

    event.shaped(Item.of('exdeorum:mechanical_hammer'), [
        'PDP',
        'PHP',
        'PCP'
    ], {
        P: 'gtceu:steel_plate',
        D: 'gtceu:double_steel_plate',
        H: 'minecraft:hopper',
        C: 'gtceu:red_alloy_single_cable'
    });


    event.recipes.gtceu.assembler('flint_mesh')
        .itemInputs('exdeorum:string_mesh', '16x gtceu:fine_steel_wire')
        .itemOutputs('exdeorum:flint_mesh')
        .duration(300)
        .EUt(22);

     event.recipes.gtceu.assembler('iron_mesh')
         .itemInputs('exdeorum:diamond_mesh', '16x gtceu:titanium_dust')
         .itemOutputs('exdeorum:iron_mesh')
         .duration(300)
         .EUt(1024);

     event.recipes.gtceu.assembler('diamond_mesh')
         .itemInputs('exdeorum:golden_mesh', '16x gtceu:diamond_dust')
         .itemOutputs('exdeorum:diamond_mesh')
         .duration(300)
         .EUt(345);

     event.recipes.gtceu.assembler('gold_mesh')
         .itemInputs('exdeorum:flint_mesh', '16x gtceu:gold_dust')
         .itemOutputs('exdeorum:golden_mesh')
         .duration(300)
         .EUt(120);

     event.recipes.gtceu.assembler('netherite_mesh')
         .itemInputs('exdeorum:iron_mesh', '4x minecraft:netherite_ingot')
         .itemOutputs('exdeorum:netherite_mesh')
         .duration(300)
         .EUt(4096);

    event.recipes.gtceu.forge_hammer('gravel_to_sand')
        .itemInputs('minecraft:gravel')
        .itemOutputs('minecraft:sand')
        .duration(10)
        .EUt(16);

    event.recipes.gtceu.forge_hammer('sand_to_dust')
        .itemInputs('minecraft:sand')
        .itemOutputs('exdeorum:dust')
        .duration(10)
        .EUt(16);

    event.recipes.gtceu.macerator('crushed_blackstone')
        .itemInputs('minecraft:blackstone')
        .itemOutputs('exdeorum:crushed_blackstone')
        .duration(10)
        .EUt(8);

    event.recipes.gtceu.macerator('crushed_deepslate1')
        .itemInputs('minecraft:deepslate')
        .itemOutputs('exdeorum:crushed_blackstone')
        .duration(10)
        .EUt(8);

    event.recipes.gtceu.macerator('crushed_deepslate2')
        .itemInputs('minecraft:cobbled_deepslate')
        .itemOutputs('exdeorum:crushed_blackstone')
        .duration(10)
        .EUt(8);

});