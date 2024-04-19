
// Ignore this
function elementRegistry(func) { GTCEuStartupEvents.registry('gtceu:element', func); };
function materialRegistry(func) { GTCEuStartupEvents.registry('gtceu:material', func); };
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');

// Icon Sets
const DULL = GTMaterialIconSet.DULL;
const METALLIC = GTMaterialIconSet.METALLIC;
const MAGNETIC = GTMaterialIconSet.MAGNETIC;
const SHINY = GTMaterialIconSet.SHINY;
const BRIGHT = GTMaterialIconSet.BRIGHT;
const DIAMOND = GTMaterialIconSet.DIAMOND;
const EMERALD = GTMaterialIconSet.EMERALD;
const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
const RUBY = GTMaterialIconSet.RUBY;
const OPAL = GTMaterialIconSet.OPAL;
const GLASS = GTMaterialIconSet.GLASS;
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;
const FINE = GTMaterialIconSet.FINE;
const SAND = GTMaterialIconSet.SAND;
const WOOD = GTMaterialIconSet.WOOD;
const ROUGH = GTMaterialIconSet.ROUGH;
const FLINT = GTMaterialIconSet.FLINT;
const LIGNITE = GTMaterialIconSet.LIGNITE;
const QUARTZ = GTMaterialIconSet.QUARTZ;
const CERTUS = GTMaterialIconSet.CERTUS;
const LAPIS = GTMaterialIconSet.LAPIS;
const FLUID = GTMaterialIconSet.FLUID;
const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE;

// Flags
// Generic flags
const no_unify = GTMaterialFlags.NO_UNIFICATION;
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
const explosive = GTMaterialFlags.EXPLOSIVE;
const flammable = GTMaterialFlags.FLAMMABLE;
const sticky = GTMaterialFlags.STICKY;
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;
// Generation Flags
// Dust Flags
const plates = GTMaterialFlags.GENERATE_PLATE;
const dense_plate = GTMaterialFlags.GENERATE_DENSE;
const rod = GTMaterialFlags.GENERATE_ROD;
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
const frame = GTMaterialFlags.GENERATE_FRAME;
const gear = GTMaterialFlags.GENERATE_GEAR;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;
// Ingot Flags
const foil = GTMaterialFlags.GENERATE_FOIL;
const ring = GTMaterialFlags.GENERATE_RING;
const spring = GTMaterialFlags.GENERATE_SPRING;
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
const rotor = GTMaterialFlags.GENERATE_ROTOR;
const round = GTMaterialFlags.GENERATE_ROUND;
const magnetic = GTMaterialFlags.IS_MAGNETIC;
// Gem Flags
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
const lens = GTMaterialFlags.GENERATE_LENS;
// Fluid Flags
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;
// Ore Flags
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;
// Misc
const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
const no_working = GTMaterialFlags.NO_WORKING;
const no_smashing = GTMaterialFlags.NO_SMASHING;
const no_smelt = GTMaterialFlags.NO_SMELTING;
const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;

// Useful functions
function V(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.V[GTValues.ULV]; break;
        case 'lv': v = GTValues.V[GTValues.LV]; break;
        case 'mv': v = GTValues.V[GTValues.MV]; break;
        case 'hv': v = GTValues.V[GTValues.HV]; break;
        case 'ev': v = GTValues.V[GTValues.EV]; break;
        case 'iv': v = GTValues.V[GTValues.IV]; break;
        case 'luv': v = GTValues.V[GTValues.LuV]; break;
        case 'zpm': v = GTValues.V[GTValues.ZPM]; break;
        case 'uv': v = GTValues.V[GTValues.UV]; break;
        case 'uhv': v = GTValues.V[GTValues.UHV]; break;
        case 'uev': v = GTValues.V[GTValues.UEV]; break;
        case 'uiv': v = GTValues.V[GTValues.UIV]; break;
        case 'uxv': v = GTValues.V[GTValues.UXV]; break;
        case 'opv': v = GTValues.V[GTValues.OpV]; break;
        case 'max': v = GTValues.V[GTValues.MAX]; break;
    }
    return v;
}

function VA(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.VA[GTValues.ULV]; break;
        case 'lv': v = GTValues.VA[GTValues.LV]; break;
        case 'mv': v = GTValues.VA[GTValues.MV]; break;
        case 'hv': v = GTValues.VA[GTValues.HV]; break;
        case 'ev': v = GTValues.VA[GTValues.EV]; break;
        case 'iv': v = GTValues.VA[GTValues.IV]; break;
        case 'luv': v = GTValues.VA[GTValues.LuV]; break;
        case 'zpm': v = GTValues.VA[GTValues.ZPM]; break;
        case 'uv': v = GTValues.VA[GTValues.UV]; break;
        case 'uhv': v = GTValues.VA[GTValues.UHV]; break;
        case 'uev': v = GTValues.VA[GTValues.UEV]; break;
        case 'uiv': v = GTValues.VA[GTValues.UIV]; break;
        case 'uxv': v = GTValues.VA[GTValues.UXV]; break;
        case 'opv': v = GTValues.VA[GTValues.OpV]; break;
        case 'max': v = GTValues.VA[GTValues.MAX]; break;
    }
    return v;
}

function VH(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.VH[GTValues.ULV]; break;
        case 'lv': v = GTValues.VH[GTValues.LV]; break;
        case 'mv': v = GTValues.VH[GTValues.MV]; break;
        case 'hv': v = GTValues.VH[GTValues.HV]; break;
        case 'ev': v = GTValues.VH[GTValues.EV]; break;
        case 'iv': v = GTValues.VH[GTValues.IV]; break;
        case 'luv': v = GTValues.VH[GTValues.LuV]; break;
        case 'zpm': v = GTValues.VH[GTValues.ZPM]; break;
        case 'uv': v = GTValues.VH[GTValues.UV]; break;
        case 'uhv': v = GTValues.VH[GTValues.UHV]; break;
        case 'uev': v = GTValues.VH[GTValues.UEV]; break;
        case 'uiv': v = GTValues.VH[GTValues.UIV]; break;
        case 'uxv': v = GTValues.VH[GTValues.UXV]; break;
        case 'opv': v = GTValues.VH[GTValues.OpV]; break;
        case 'max': v = GTValues.VH[GTValues.MAX]; break;
    }
    return V;
}

function VHA(voltage) {
    let v;
    switch(voltage) {
        case 'ulv': v = GTValues.VHA[GTValues.ULV]; break;
        case 'lv': v = GTValues.VHA[GTValues.LV]; break;
        case 'mv': v = GTValues.VHA[GTValues.MV]; break;
        case 'hv': v = GTValues.VHA[GTValues.HV]; break;
        case 'ev': v = GTValues.VHA[GTValues.EV]; break;
        case 'iv': v = GTValues.VHA[GTValues.IV]; break;
        case 'luv': v = GTValues.VHA[GTValues.LuV]; break;
        case 'zpm': v = GTValues.VHA[GTValues.ZPM]; break;
        case 'uv': v = GTValues.VHA[GTValues.UV]; break;
        case 'uhv': v = GTValues.VHA[GTValues.UHV]; break;
        case 'uev': v = GTValues.VHA[GTValues.UEV]; break;
        case 'uiv': v = GTValues.VHA[GTValues.UIV]; break;
        case 'uxv': v = GTValues.VHA[GTValues.UXV]; break;
        case 'opv': v = GTValues.VHA[GTValues.OpV]; break;
        case 'max': v = GTValues.VHA[GTValues.MAX]; break;
    }
    return V;
}

function periodicTableElement(material, type) {
    let mat = GTMaterials.get(material);
    switch(type) {
        case 'ingot': mat.setProperty(PropertyKey.INGOT, new $IngotProperty()); break;
        case 'dust': mat.setProperty(PropertyKey.DUST, new $DustProperty()); break;
        case 'fluid': case 'gas': case 'plasma': case 'molten': mat.setProperty(PropertyKey.FLUID, new $FluidProperty()); 
                switch(type) {
                    case 'fluid': mat.getProperty(PropertyKey.FLUID).storage.enqueueRegistration(GTFluidStorageKeys.LIQUID, new GTFluidBuilder()); break;
                    case 'gas': mat.getProperty(PropertyKey.FLUID).storage.enqueueRegistration(GTFluidStorageKeys.GAS, new GTFluidBuilder()); break;
                    case 'plasma': mat.getProperty(PropertyKey.FLUID).storage.enqueueRegistration(GTFluidStorageKeys.PLASMA, new GTFluidBuilder()); break;
                    case 'molten': mat.getProperty(PropertyKey.FLUID).storage.enqueueRegistration(GTFluidStorageKeys.MOLTEN, new GTFluidBuilder()); break;
                }
            break;
    }
}

function blastProperty(material, temperature, gasTier, voltage, duration) {
    let mat = GTMaterials.get(material);
    mat.setProperty(PropertyKey.BLAST, new $BlastProperty(temperature, gasTier, voltage, duration));
}

/*
    Elements are the base of gt materials. Registering an element WILL NOT add any items.
    To make a new element(NOTE: you can add only elements that are NOT present on the periodic table),
    write an 'event.create()` call in the bellow registering function.
    Inside the parantheses the following parameters are introduced:
        1. Element Name -> use '' or "" to write the material name.
        2. Proton Count(use -1 if it is not an element that will get a material).
        3. Neutron Count(use -1 if it is not an element that will get a material).
        4. Half Life Seconds(decay stuff. Use -1).
        5. Material to decay to(more decay stuff. Use null).
        6. Atomic Symbol(what will be displayed as in chemical formulas) -> use '' or "" to write the atomic symbol.
        7. Is isotope(even more decay stuff. Use false)
*/
elementRegistry(event => {
    // For the material that will have ? as it's atomic symbol in chemical formulas
    event.create('mystery', -1, -1, -1, null, '?', false);

    // Netherite Line
    event.create('debris', -1, -1, -1, null, '?', false);
    event.create('pure_netherite', 124, 345, -1, null, '*Nr*', false);

    // Classic Stargate
    event.create('echo', -1, -1, -1, null, 'Ec', false);
});

/*
    Materials are in-game items or fluids. They can be dusts, ingots, gems, fluids and all their derivatives.
    To make a new material(NOTE: to add a material that is present on the periodic table, but 
        it doesn't have any in-game items/fluids, look below for how to do it),
    write an `event.create()` call in the bellow registering function.
    Write inside the parantheses the name of the material inside '' or "".
    You can change the properties of the material by adding any combination of the following calls:
        .ingot() -> this will make the material have both an ingot and dust form.
        .dust() -> this will make the material have a dust form. Don't use this together with .dust().
        .gem() -> this will make the material have both a gem form and a dust form. Don't use thos together with .dust() or .ingot()
        .fluid() -> this will make the material have a fluid form. 
        .gas() -> this will make the material have a gas(fluid) form with gas properties. 
        .plasma() -> this will make the material have a plasma(fluid) form with plasma properties.
        .polymer() -> this will make the material have a dust form with polymer properties.
            For .ingot(), .dust() and .gem(), optionally you can put inside the parantheses any of these sets of parameters:
                1. harvest level (ex. .ingot(2) will make the material have the harvest level of iron tools)
                2. harvest level, burn time (2x. ingot(2, 2000) will make the material have the harvest level of iron tools and will burn in furnaces as fuel for 2000 ticks or 100 seconds).
        .burnTime(burn time in ticks) -> this will turn the material into a furnace fuel.
        .fluidBurnTime(burn time in ticks) -> how long the fluid of the material will burn.
        .color(color code) -> gives the material a color. The colo must be providen in the following form: 0xNNNNNN, where N are digits.
            To chose a color for your material, you can checkout https://www.w3schools.com/colors/colors_picker.asp
            After you select a color with the above tool, copy the 6 digits that follow the # under the color preview.
        .secondaryColor(color code) -> gives the material a secondary color. If this is not being called, the secondary value will default to white(0xffffff).
        .iconSet(set) -> gives the material an icon set. View line 9 to see the posible icon sets.
        .components(component1, component2, ...) -> describes the composition. The components are a list of elements of the following form: 'Kx material_name', where K is a positive integer.
            Depending on the composition, gt will autogenerate an electrolyzer or centrifuge recipe to decompose the material. You can block that by adding the disable decomposition flag.
        .flags(flag1, flag2, ...) -> flags can be used to select certain properties of the material, like generating gears, or disabling decomposition.
        .element(element) -> similar to .components(), but is used when the material represents an element. 
            See line X for a list of posible flags.
        .rotorStats(speed, damage, durability) -> this will create a turbine rotor from this material.
        blastTemp() -> this is meant to be paired together with .ingot(). Will generate a EBF recipe(and an ABS recipe) based on the parameters you give it:
            1. temperature -> dictates what coil tier it will require(check the coil tooltips for their max temperature). 
                If the temperature is below 1000, it will also generate a PBF recipe.
                If temperature is above 1750, a hot ingot will be generated, this requiring a Vacuum Freezer.
            2. (optional) gas tier -> can be null for none, 'low' for nitrogen, 'mid' for helium, 'high' for argon, 'higher' for neon or 'highest' for krypton.
            3. (optional) EU per tick -> the recipe voltage
                (USEFUL NOTE: gt has some inbuilt functions to ease chosing the voltages, you can use V('tier') for full amp, VA('tier') for full amp, but adjusted for cable loss, VH('tier) for half an amp or VHA('tier) for half an amp adjusted for cable loss).
            4. (optional) duration in ticks -> how long the recipe should take
        .ore() -> this will create an ore from the material.
            Optionally you can add any of these sets of parameters:
                1. is emissive -> true for emissive textures
                2. ore multiplier and byproduct multiplier -> how many crushed ores will be given from one raw ore and how many byproducts dusts will be given throughout the ore processing
                3. ore multiplier, byproduct multiplier, is emissive
        .washedIn()
        .separatedIn()
        .separatedInto()
        .oreSmeltInto()
        .polarizesInto()
        .arcSmeltInto()
        .maceratesInto()
        .ingotSmeltInto()
        .addOreByproducts()
        .cableProperties() -> generates wires and cables(if material is not a superconducter). The following parameter sets can be given:
            1. Voltage, amperage, loss per block
            2. Voltage, amperage, loss per block, is superconductor -> for a super conductor, set loss as 0 and is super conductor as true
            3. Voltage, amperage, loss per block, is super conductor and critical temperature
        .toolProperties()
        .fluidPipeProperties()
        .itemPipeProperties()
        .addDefaultEnchant()
        
*/
materialRegistry(event => {

    // Periodic table materials
    // Ingots


    // Dusts


    // Liquids


    // Gasses


    // PLasmas

    // Material modification
    GTMaterials.Lead.addFlags(gear);
    GTMaterials.Silver.addFlags(gear);   

    // Blast Properties of periodic table metals


    // Materials from elements
    

    // This material is meant to place a ? symbol in a material's chemical formula
    event.create('mystery')
        .element(GTElements.get('mystery'));

    // Thermal Superconductors
    event.create('soul_infused')
        .ingot(1)
        .fluid()
        .components('1x invar', '2x mystery') // invar and soul sand
        .color(0xcc9966)
        .iconSet(SHINY)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('lv'), 8, 0, true);

    event.create('signalum')
        .ingot(1)
        .fluid()
        .components('1x silver', '3x copper', '4x redstone')
        .color(0xff3300)
        .iconSet(SHINY)
        .blastTemp(1700, 'low', VA('mv'), 1200)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('mv'), 16, 0, true);

    event.create('lumium')
        .ingot(1)
        .fluid()
        .components('1x silver', '3x tin', '2x glowstone')
        .color(0xffffb3)
        .iconSet(SHINY)
        .blastTemp(1700, 'low', VA('hv'), 1500)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('hv'), 16, 0, true);

    event.create('enderium')
        .ingot(1)
        .fluid()
        .components('3x lead', '1x diamond', '2x ender_pearl')
        .color(0x006666)
        .iconSet(SHINY)
        .blastTemp(3500, 'low', VA('ev'), 1500)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('ev'), 32, 0, true);

    event.create('shellite')
        .ingot(1)
        .components('1x black_bronze', '3x signalum')
        .color(0x9933ff)
        .iconSet(SHINY)
        .blastTemp(4400, 'mid', VA('iv'), 1800)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('iv'), 64, 0, true);

    event.create('twinite')
        .ingot(1)
        .components('3x enderium', '2x amethyst', '1x lumium')
        .color(0xf66999)
        .iconSet(SHINY)
        .blastTemp(5300, 'mid', VA('luv'), 2100)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('luv'), 64, 0, true);

    event.create('dragonsteel')
        .ingot(1)
        .components('4x tungsten', '8x shellite', '2x twinite')
        .color(0x3333cc)
        .iconSet(SHINY)
        .blastTemp(7100, 'high', VA('zpm'), 2400)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('zpm'), 64, 0, true);

    event.create('prismalium')
        .ingot(1)
        .fluid()
        .components('8x naquadah', '4x shellite', '7x tungsten_carbide')
        .color(0x66ffff)
        .iconSet(SHINY)
        .blastTemp(9000, 'high', VA('zpm'), 2700)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('uv'), 32, 0, true);

    event.create('melodium')
        .ingot(1)
        .fluid()
        .components('2x mercury_barium_calcium_cuprate', '14x electrum', '3x amethyst', '4x darmstadtium', '7x europium')
        .color(0xd9b3ff)
        .iconSet(SHINY)
        .blastTemp(10000, 'higher', VA('uv'), 3000)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('uv'), 256, 0, true);

    event.create('stellarium')
        .ingot(1)
        .fluid()
        .components('12x neutronium', '4x melodium', '1x dragonsteel')
        .color(0xccffff)
        .iconSet(SHINY)
        .blastTemp(10799, 'highest', VA('uhv'), 6000)
        .flags(foil, gear, long_rod, plates,
            rod, rotor, small_gear, ring, frame)
        .cableProperties(V('uhv'), 512, 0, true);

    // Nuclear Reactor Materials
    event.create('austenitic_stainless_steel_304')
        .ingot(1)
        .fluid()
        .components('35x steel', '10x chromium', '4x nickel', '1x manganese', '1x silicon')
        .color(0x800040)
        .blastTemp(3500, 'low', VA('ev'), 1500)
        .iconSet(METALLIC)
        .flags(plates, rod, frame);

    event.create('inconel_625')
        .ingot()
        .fluid()
        .components('7x nickel', '2x chromium', '1x steel')
        .color(0xa3a375)
        .blastTemp(3500, 'low', VA('ev'), 1500)
        .iconSet(SHINY)
        .flags(plates, rod, frame);

    // event.create('nuclear_steam')
    //     .fluid()
    //     .components('1x steam', '1x mystery')
    //     .color(0xcccccc)
    //     .flags(no_decomp);

    // event.create('hot_sodium_potassium')
    //     .fluid()
    //     .components('1x sodium_potassium', '1x mystery')
    //     .color(0x82fcc3)
    //     .flags(no_decomp);

    // event.create('hot_pcbcoolant')
    //     .fluid()
    //     .components('1x pcb_coolant', '1x mystery')
    //     .color(0xc9ca81)
    //     .flags(no_decomp);

    // Netherite Line
    event.create('debris')
        .dust()
        .element(GTElements.get('debris'))
        .color(0x804000);

    event.create('purified_debris')
        .dust()
        .components('debris')
        .color(0xcc0000);

    event.create('netherite')
        .dust()
        .components('4x debris', '4x gold')
        .color(0x1a0d00)
        .iconSet(DULL)
        .flags(no_decomp);
    
    event.create('chlorine_trifluoride')
        .fluid()
        .components('1x chlorine', '3x fluorine')
        .color(0xb3ff99);

    event.create('dichloroethane')
        .fluid()
        .components('2x carbon', '4x hydrogen', '2x chlorine')
        .color(0x99ccff);

    event.create('tetrachloroethylene')
        .fluid()
        .components('2x carbon', '4x chlorine')
        .color(0xd966ff);

    // Netherite Derivatives/Alloys
    // event.create('pure_netherite')
    //     .ingot()
    //     .element(GTElements.get('pure_netherite'))
    //     .color(0x1a0d00)
    //     .iconSet(DULL)
    //     .blastTemp(3300, 'low', VA('ev'), 1200)
    //     .flags(foil, gear, long_rod, plates,
    //         rod, rotor, small_gear, ring);

    // event.create('naquadic_netherite')
    //     .gem(0)
    //     .components('3x naquadah', '5x pure_netherite', '2x caesium', '5x cerium', '12x fluorine', '32x oxygen')
    //     .color(0xffd966)
    //     .iconSet(DIAMOND);

    // event.create('weapon_grade_naquadah')
    //     .ingot()
    //     .components('7x naquadria', '2x pure_netherite', '5x neutronium', '16x fluorine')
    //     .color(0xccff33)
    //     .iconSet(DULL)
    //     .blastTemp(24000, 'low', VA('uv'), 6000)
    //     .flags(foil, gear, long_rod, plates,
    //         rod, rotor, small_gear, ring, frame);

    // event.create('screret_runic_laser_source_base')
    //     .gem(0)
    //     .components('2x naquadic_netherite', '10x tritanium', '2x trinium')
    //     .color(0x00ff00)
    //     .iconSet(OPAL);
    
    // Extras
    event.create('trinaquadalloy')
        .ingot().fluid()
        .color(0x281832)
        .iconSet(BRIGHT)
        .flags(plates, rod, frame, fine_wire, foil)
        .components('6x trinium', '2x naquadah', '1x carbon')
        .blastTemp(8747, 'higher', VA('zpm'), 1200)

    event.create('sodium_oxide')
        .dust()
        .components('2x sodium', '1x oxygen')
        .color(0x6666ff);

    event.create('npk_solution')
        .fluid()
        .color(0xb8c3f5);

    event.create('copper_chloride')
        .dust()
        .components('1x copper', '1x chlorine');

    event.create('cupric_chloride_solution')
        .fluid()
        .components('1x copper_chloride', '1x hydrochloric_acid')
        .color(0x336600);

    // PEEK plastic Line

    // event.create('disodium_salt_of_hydroquinone')
    //     .dust()
    //     .components('6x carbon','4x hydrogen','2x oxygen','2x sodium')
    //     .color(0xeaeaf9)
    //     .flags(no_decomp);

    // event.create('hydroquinone')
    //     .dust()
    //     .components('6x carbon','6x hydrogen','2x oxygen')
    //     .color(0xf9f9ff);

    // event.create('carbon_acid')
    //     .gas()
    //     .components('2x hydrogen','1x carbon','3x oxygen')
    //     .color(0x333333);

    // event.create('fluorobenzene')
    //     .fluid()
    //     .components('6x carbon','5x hydrogen','1x fluorine')
    //     .color(0xffffff);

    // event.create('4_fluorobenzoyl_chloride')
    //     .fluid()
    //     .components('7x carbon','4x hydrogen','1x chlorine','1x fluorine','1x oxygen')
    //     .color(0xfffff0);
    
    // event.create('benzoyl_chloride')
    //     .fluid()
    //     .components('7x carbon','5x hydrogen','1x chlorine','1x oxygen')
    //     .color(0xfffadf);

    // event.create('benzotrichloride')
    //     .fluid()
    //     .components('7x carbon','5x hydrogen','3x chlorine')
    //     .color(0xddd8bc);

    // event.create('44_difluorobenzophenone') //naming like this: 4_4_di... will make kubejs go error to annoy you :)
    //     .dust()
    //     .components('13x carbon','8x hydrogen','1x oxygen','2x fluorine') 
    //     .color(0xeee1c9)
    //     .flags(no_decomp);
    
    // event.create('polyether_ether_ketone')
    //     .polymer()
    //     .components('19x carbon','12x hydrogen','3x oxygen') 
    //     .color(0xccbba7)
    //     .flags(no_decomp)
    //     .flags(foil, plates, ring);

    // enderIO alloys
    event.create('copper_alloy')
        .ingot()
        .fluid()
        .flags(no_decomp)
        .components('1x silicon', '1x copper')
        .color(0xfca103)
        .iconSet(METALLIC);

    event.create('energetic_alloy')
        .ingot()
        .fluid()
        .flags(no_decomp, gear)
        .components('1x gold', '1x redstone', '1x glowstone')
        .color(0xffd11a)
        .blastTemp(1200, 'low', VA('mv'), 600)
        .iconSet(DULL);

    event.create('vibrant_alloy')
        .ingot()
        .fluid()
        .flags(no_decomp, gear)
        .components('1x ender_pearl', '1x energetic_alloy')
        .color(0xccff66)
        .blastTemp(1900, 'low', VA('mv'), 1200)
        .iconSet(METALLIC);

    event.create('redstone_alloy')
        .ingot()
        .fluid()
        .flags(no_decomp)
        .components('1x redstone', '1x silicon')
        .color(0xff4d4d)
        .iconSet(DULL);

    event.create('conductive_alloy')
        .ingot()
        .fluid()
        .flags(no_decomp, plates,)
        .components('1x copper', '1x iron', '1x redstone')
        .color(0xff9999)
        .iconSet(METALLIC)
        .cableProperties(V('lv'), 1, 0, true);

    event.create('pulsating_alloy')
        .ingot()
        .fluid()
        .flags(no_decomp)
        .components('1x ender_pearl', '1x iron')
        .color(0x66ff66)
        .iconSet(DULL);

    event.create('dark_steel')
        .ingot()
        .fluid()
        .flags(no_decomp, gear)
        .components('1x coal', '1x iron', '1x obsidian')
        .color(0x4d4d4d)
        .iconSet(METALLIC);

    event.create('soularium')
        .ingot()
        .fluid()
        .flags(no_decomp)
        .components('1x mystery', '1x gold')
        .color(0x663300)
        .blastTemp(1900, 'low', VA('mv'), 1600)
        .iconSet(DULL);

    event.create('end_steel')
        .ingot()
        .fluid()
        .flags(no_decomp)
        .components('1x mystery', '1x dark_steel', '1x obsidian')
        .color(0xffff80)
        .blastTemp(2800, 'low', VA('mv'), 1200)
        .iconSet(METALLIC);

        event.create('sky_steel')
        .ingot()
        .fluid()
        .components('2x steel', '1x mystery')
        .color(0xccffcc)
        .flags(no_decomp, plates, rod, frame)
        .iconSet(METALLIC);
    
});
