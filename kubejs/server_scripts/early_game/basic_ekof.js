
ServerEvents.recipes(event => {

    event.shaped(Item.of('gtceu:basic_kinetic_ore_factory'), [
        'PRP',
        'RBR',
        'PRP'
    ], {
        P: 'gtceu:bronze_plate',
        R: 'gtceu:bronze_rod',
        B: 'gtceu:firebricks'
    });

    // modifier should be between 1 and 2
    function ore_proc(input, byproduct, modifier) {

        let mod = (modifier > 2 || modifier < 1) ? 1 : modifier;

        event.recipes.gtceu.basic_kinetic_ore_factory(`${input}_processing_in_bkof`)
            .itemInputs(`gtceu:crushed_${input}_ore`)
            .inputFluids(`minecraft:water ${100 * mod}`)
            .itemOutputs(`2x gtceu:${input}_dust`)
            .chancedOutput(`gtceu:${byproduct}_dust`, 2500 * mod, 0)
            .duration(100 * mod)
            .rpm(8)
            .inputStress(128);
    }

    ore_proc('iron', 'nickel', 1.75);
    ore_proc('cassiterite', 'bismuth', 1.2);
    ore_proc('copper', 'gold', 1.35);
    ore_proc('sphalerite', 'gallium', 1.1);
    ore_proc('galena', 'silver', 1.4);
    ore_proc('stibnite', 'sulfur', 1.8);

});