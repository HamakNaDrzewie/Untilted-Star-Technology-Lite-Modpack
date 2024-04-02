
ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:large_farm'), [
        'SPS',
        'PBP',
        'SPS'
    ], {
        S: 'gtceu:treated_wood_rod',
        P: 'gtceu:treated_wood_planks',
        B: 'minecraft:bone_meal'
    });

    const seed = ['minecraft:wheat_seeds', 'minecraft:carrot', 'minecraft:potato', 'minecraft:pumpkin_seeds', 'minecraft:melon_seeds', 'minecraft:cocoa_beans', 'minecraft:beetroot_seeds', 'minecraft:bamboo', 'minecraft:sweet_berries', 'minecraft:kelp', 'minecraft:glow_berries'];
    const crop = ['minecraft:wheat', 'minecraft:carrot', 'minecraft:potato', 'minecraft:pumpkin', 'minecraft:melon', 'minecraft:cocoa_beans', 'minecraft:beetroot', 'minecraft:bamboo', 'minecraft:sweet_berries', 'minecraft:kelp', 'minecraft:glow_berries'];


    for (let i = 0; i < seed.length; i++) {
        event.recipes.gtceu.large_farm(`${crop[i]}_harvest`)
            .notConsumable(`8x ${seed[i]}`)
            .itemOutputs(`16x ${crop[i]}`)
            .chancedOutput(seed[i], 5000, 0)
            .circuit(0)
            .duration(200);

        event.recipes.gtceu.large_farm(`${crop[i]}_harvest_with_bone_meal`)
            .notConsumable(`8x ${seed[i]}`)
            .chancedInput('minecraft:bone_meal', 2500, 0)
            .itemOutputs(`32x ${crop[i]}`)
            .chancedOutput(seed[i], 5000, 0)
            .circuit(1)
            .duration(140);

        event.recipes.gtceu.large_farm(`${crop[i]}_harvest_with_compost`)
            .notConsumable(`8x ${seed[i]}`)
            .chancedInput('thermal:compost', 2500, 0)
            .itemOutputs(`48x ${crop[i]}`)
            .chancedOutput(seed[i], 5000, 0)
            .circuit(2)
            .duration(100);

        event.recipes.gtceu.large_farm(`${crop[i]}_harvest_with_fertilizer`)
            .notConsumable(`8x ${seed[i]}`)
            .chancedInput('gtceu:fertilizer', 2500, 0)
            .itemOutputs(`64x ${crop[i]}`)
            .chancedOutput(seed[i], 5000, 0)
            .circuit(3)
            .duration(40);
    }
});