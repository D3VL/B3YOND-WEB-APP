module.exports = {
    wm169: {
        codename: "wm169",
        name: "DJI Avata",
        image: "/assets/img/models/avata.png",
        type: "drone",
        slug: "dji-avata",
        isEnabled: true,
        methods: ["Bulk"],
        connectionSteps: ["GogglesPower", "AvataPower", "GogglesUsb", "InstallBulkDriver"],
        filters: [
            { vendorId: 0x2ca3, productId: 0x0020 },
        ]
    },
    zv900: {
        codename: "zv900",
        name: "Goggles 2",
        image: "/",
        type: "glass",
        slug: "dji-goggles-2",
        isEnabled: false,
        methods: ["Bulk"],
        connectionSteps: ["GogglesPower", "GogglesUsb"],
        filters: [
            { vendorId: 0x2ca3, productId: 0x0020 },
        ]
    },
    wm170: {
        codename: "wm170",
        name: "DJI FPV",
        image: "/assets/img/models/dji-fpv.png",
        type: "drone",
        slug: "dji-fpv",
        isEnabled: true,
        methods: ["Serial"],
        connectionSteps: ["GogglesPower", "DjiFpvPower", "GogglesUsb"],
        filters: [
            { vendorId: 0x2ca3 },
        ]
    },
    gl170: {
        codename: "gl170",
        name: "FPV Goggles V2 (DJI FPV)",
        image: "/",
        type: "glass",
        slug: "dji-goggles-v2-fpv",
        isEnabled: false,
        methods: ["Serial"],
        connectionSteps: ["GogglesPower", "GogglesUsb"],
        filters: [
            { vendorId: 0x2ca3 },
        ]
    },
    xxx: {
        codename: "xxx",
        name: "Generic Bulk",
        image: "/",
        type: "glass",
        slug: "fpv-goggles-v2-diy",
        isEnabled: false,
        methods: ["Serial"],
        connectionSteps: ["GogglesPower", "GogglesUsb"],
        filters: [
            { vendorId: 0x2ca3 },
        ]
    },
}



// list from Dank Drone Downloader
// a2 - A3 Flight Controller
// ac103 - Action 2
// tp703 - Aeroscope
// ag600 - AG600 Gimball
// ag406 - AGRAS MG-1A
// ag407 - AGRAS MG-1P RTK
// ag405 - AGRAS MG-1S
// ag500 - AGRAS T10
// ag410 - AGRAS T20
// ag501 - AGRAS T30
// wm169 - Avata
// cs550 - Crystalsky 5.50 Inch
// cs785 - Crystalsky 7.85 Inch
// r400 - D-RTK GNSS
// zv900 - DJI Goggles 2
// rm330 - DJI RC
// rm700 - DJI RC Plus
// gl150 - FPV Goggles V1
// gp150 - FPV Goggles V2
// wm170 - FPV Racer
// wm150 - FPV System - Air Unit
// lt150 - FPV System - Air Unit Lite
// rc150 - FPV System - RC
// gl170 - Goggles - FPV Racer
// gl811 - Goggles - Racing Edition
// p1gs - Goggles - Standard
// wm600 - Inspire 1
// wm610 - Inspire 1 Pro
// wm620 - Inspire 2
// m100 - Matrice 100
// pm410 - Matrice 200
// pm420 - Matrice 200 V2
// pm430 - Matrice 300
// m601 - Matrice 600
// m600 - Matrice 600 Pro
// wm230 - Mavic Air
// wm231 - Mavic Air 2
// wm232 - Mavic Air 2s
// wm160 - Mavic Mini
// wm161 - Mavic Mini 2
// wm162 - Mavic Mini 3
// wm1605 - Mavic Mini SE
// wm220 - Mavic Pro 1 - Incl Platinum and Alpine
// wm240 - Mavic Pro 2 - Incl Zoom
// wm245 - Mavic Pro 2 Enterprise
// wm246 - Mavic Pro 2 Enterprise Dual
// wm247 - Mavic Pro 2 Enterprise RTK
// wm260 - Mavic Pro 3
// dlg30a - N3 Flight Controller
// zv811 - Ocusync Air System
// ac101 - Osmo - Action
// hg200 - Osmo - Incl Pro Raw and Standard
// hg210 - Osmo - Pocket
// hg211 - Osmo - Pocket 2
// wm325 - Phantom 3 - 4K
// wm322 - Phantom 3 - Advanced
// wm323 - Phantom 3 - Professional
// wm321 - Phantom 3 - Standard
// wm332 - Phantom 4 - Advanced
// wm336 - Phantom 4 - Multispectral
// wm331 - Phantom 4 - Professional
// wm335 - Phantom 4 - Professional 2.0
// wm330 - Phantom 4 - Standard
// wm334 - Phantom 4 RTK
// wm334 - Phantom 4 RTK - China Only Version
// xw607 - Robomaster S1
// rm500 - Smart Controller
// rm510 - Smart Controller 2021
// wm100 - Spark
// ag411 - Unknown Aircraft
// ag601 - Unknown Aircraft
// wm222 - Unknown Aircraft
