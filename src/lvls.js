let levels = {
    "easy" : {
        "01": {
            "id" : "01",
            "doors" : [
                {
                    "tile_x" : -1,
                    "tile_y" : 0,
                    "width"  : 32,
                    "height" : 64,
                    "destination_room" : "02",
                    "destination_tile_x" : 29,
                    "destination_tile_y" : 17
                },
                {
                    "tile_x" : 30,
                    "tile_y" : 0,
                    "width" : 32,
                    "height" : 960,
                    "destination_room" : "03",
                    "destination_tile_x" : 0,
                    "destination_tile_y" : -69
                }
            ],
            "coins" : [
                [7, 1],
                [19, 9],
                [11, 11],
                [28, 15]
            ],
            "columns" : 30,
            "rows" : 20,
        
            "map" : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                104, 104, 104, 104, 104, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 153, 153, 153, 153, 0, 0, 0, 129, 105, 0, 0, 0, 0, 69, 57, 57, 57, 57, 57, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 153, 153, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 104, 104, 104, 0, 0,
                153, 153, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 133, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153, 153, 0, 41,
                153, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 133, 133, 0, 0, 0, 0, 0, 0, 0, 153, 153, 153, 104, 104,
                153, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 81, 0, 0, 116, 104, 104, 104, 104, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 45, 0, 0, 0, 0, 0, 0, 0,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 57, 57, 45, 0, 0, 0,
                153, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 104, 104,
                153, 104, 104, 104, 104, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 104, 104, 104, 93, 0, 0, 0, 0, 0, 0, 0, 153,
                153, 153, 153, 153, 153, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153, 153, 0, 0, 0, 0, 0, 0, 0, 0, 153,
                153, 153, 153, 153, 153, 153, 104, 104, 104, 105, 0, 0, 69, 57, 45, 0, 0, 0, 153, 153, 153, 0, 0, 0, 129, 104, 104, 104, 104, 153,
                153, 153, 153, 153, 153, 153, 153, 153, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 153, 153, 153, 153, 153, 153, 153, 153, 115, 115, 115, 115, 115, 115, 115, 115, 115, 153, 153, 153, 115, 115, 115, 115, 115, 115, 115, 115, 115,
                153, 153, 153, 153, 153, 153, 153, 153, 153, 44, 44, 44, 44, 44, 44, 44, 44, 44, 153, 153, 153, 44, 44, 44, 44, 44, 44, 44, 44, 44]
        },
        "02" : {
            "id" : "02",
            "doors" : [
                {
                    "tile_x" : 30,
                    "tile_y" : 14,
                    "width"  : 32,
                    "height" : 128,
                    "destination_room" : "01",
                    "destination_tile_x" : 0,
                    "destination_tile_y" : 1
                }
            ],
            "coins" : [
                [2, 1],
                [2, 5],
                [27, 2],
                [1, 14],
                [1, 17],
                [14, 0],
                [9, 13]
            ],
            "columns" : 30,
            "rows" : 20,
        
            "map" : [153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153,
                153, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153,
                153, 133, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153,
                153, 104, 104, 104, 104, 104, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 104, 153, 153,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 57, 45, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 104, 104, 104, 104, 153, 153,
                153, 0, 0, 0, 0, 0, 0, 0, 69, 57, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153, 153, 153, 153, 153,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153, 153, 153, 153,
                153, 104, 104, 104, 104, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153, 153, 153,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 153, 153, 153, 153,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 104, 104, 104, 104, 104, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153, 153,
                153, 0, 0, 0, 0, 0, 0, 0, 104, 153, 153, 153, 153, 153, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 153,
                153, 0, 0, 0, 133, 0, 0, 104, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 145, 133, 0, 0, 0, 0, 0, 0, 0, 153,
                153, 0, 0, 133, 133, 0, 104, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 104, 104, 104, 93, 0, 0, 0, 0, 0, 0,
                153, 104, 104, 104, 104, 104, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 104, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 104, 104, 104, 104,
                153, 104, 104, 104, 104, 104, 104, 104, 104, 115, 115, 69, 45, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 153, 153, 153, 153]
        },
        "03" : {
            "id" : "03",
            "doors" : [
                {
                    "tile_x" : -1,
                    "tile_y" : 0,
                    "width"  : 32,
                    "height" : 960,
                    "destination_room" : "01",
                    "destination_tile_x" : 29,
                    "destination_tile_y" : -69
                }
            ],
            "coins" : [
                [13, 1],
                [10, 1],
                [23, 13],
                [16, 9],
                [18, 14],
                [3, 8],
                [28, 3]
            ],
            "columns" : 30,
            "rows" : 20,
        
            "map" : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 81, 0, 0, 0,
                0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0,
                53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0,
                104, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0,
                0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0,
                53, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                104, 104, 104, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 45, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 153, 153, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0,
                153, 153, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 153, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 0, 0, 0, 81, 0, 0, 81, 0, 0, 0, 0,
                103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103, 103,
                44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44]
        }                
    },
    "medium" : {
        "01": {
            "id" : "01",
            "doors" : [
                {
                    "tile_x" : -1,
                    "tile_y" : 0,
                    "width"  : 32,
                    "height" : 64,
                    "destination_room" : "02",
                    "destination_tile_x" : 29,
                    "destination_tile_y" : 17
                },
                {
                    "tile_x" : 30,
                    "tile_y" : 0,
                    "width" : 32,
                    "height" : 960,
                    "destination_room" : "03",
                    "destination_tile_x" : 0,
                    "destination_tile_y" : -69
                }
            ],
            "coins" : [],
            "columns" : 30,
            "rows" : 20,
        
            "map" : [155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 100, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 76, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 125, 125, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 125, 125, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 88, 88, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 135, 135, 135, 135, 135, 135, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 100, 88, 76, 0, 0, 0, 0, 0, 0, 0, 0, 155, 155, 155, 155, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 100, 88, 76, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155, 155, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 148, 135, 135, 135, 135, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 135, 135, 135, 135, 124, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 5, 135, 135, 136, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 155]
        },
        "02": {
            "id" : "02",
            "doors" : [
                {
                    "tile_x" : -1,
                    "tile_y" : 0,
                    "width"  : 32,
                    "height" : 64,
                    "destination_room" : "02",
                    "destination_tile_x" : 29,
                    "destination_tile_y" : 17
                },
                {
                    "tile_x" : 30,
                    "tile_y" : 0,
                    "width" : 32,
                    "height" : 960,
                    "destination_room" : "03",
                    "destination_tile_x" : 0,
                    "destination_tile_y" : -69
                }
            ],
            "coins" : [],
            "columns" : 30,
            "rows" : 20,
        
            "map" : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0,
                135, 135, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 135, 135,
                155, 155, 155, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 155, 155, 155,
                155, 155, 155, 155, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 155, 155, 155, 155,
                155, 155, 155, 155, 155, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 155, 155, 155, 155, 155,
                155, 155, 155, 155, 155, 155, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 155, 155, 155, 155, 155, 155,
                155, 155, 155, 155, 155, 155, 155, 135, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 135, 155, 155, 155, 155, 155, 155, 155,
                155, 155, 155, 155, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155, 155, 155, 155, 155, 155,
                155, 155, 155, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155, 155, 155, 155, 155,
                155, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 155, 155, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 135, 135, 135, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 135, 135, 135, 155,
                155, 155, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155, 155, 155, 155,
                155, 155, 155, 0, 0, 0, 100, 88, 88, 76, 0, 0, 0, 0, 100, 76, 0, 0, 0, 0, 100, 88, 88, 76, 0, 0, 0, 155, 155, 155]
        },
        "03": {
            "id" : "03",
            "doors" : [
                {
                    "tile_x" : -1,
                    "tile_y" : 0,
                    "width"  : 32,
                    "height" : 64,
                    "destination_room" : "02",
                    "destination_tile_x" : 29,
                    "destination_tile_y" : 17
                },
                {
                    "tile_x" : 30,
                    "tile_y" : 0,
                    "width" : 32,
                    "height" : 960,
                    "destination_room" : "03",
                    "destination_tile_x" : 0,
                    "destination_tile_y" : -69
                }
            ],
            "coins" : [],
            "columns" : 30,
            "rows" : 20,
        
            "map" : [155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 135, 135, 135, 135,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 155, 155, 155, 155, 155,
                155, 0, 0, 0, 5, 135, 135, 135, 135, 135, 135, 135, 155, 155, 155, 155, 155, 155, 155, 155, 155, 155, 155, 155, 155, 155, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 133, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 136, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 155,
                155, 88, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 145, 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 0, 0, 0, 0, 0, 5, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 155,
                155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 135, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 155, 155, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 155, 155, 155, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 155, 155, 155, 155, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 155]
        },
        "04": {
            "id" : "04",
            "doors" : [
                {
                    "tile_x" : -1,
                    "tile_y" : 0,
                    "width"  : 32,
                    "height" : 64,
                    "destination_room" : "02",
                    "destination_tile_x" : 29,
                    "destination_tile_y" : 17
                },
                {
                    "tile_x" : 30,
                    "tile_y" : 0,
                    "width" : 32,
                    "height" : 960,
                    "destination_room" : "03",
                    "destination_tile_x" : 0,
                    "destination_tile_y" : -69
                }
            ],
            "coins" : [],
            "columns" : 30,
            "rows" : 20,
        
            "map" : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                0, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                135, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 155, 0, 0, 135, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 155, 0, 0, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 155,
                155, 155, 0, 0, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155,
                155, 155, 0, 0, 155, 155, 135, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 0, 0, 0, 155,
                155, 155, 0, 0, 155, 155, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155, 0, 0, 0, 155,
                155, 155, 0, 0, 155, 155, 155, 155, 0, 0, 135, 135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155, 0, 0, 148, 155,
                155, 155, 0, 0, 155, 155, 155, 0, 0, 0, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 155, 0, 0, 0, 155,
                155, 155, 0, 0, 155, 155, 0, 0, 0, 0, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155, 155, 0, 0, 0, 155,
                155, 155, 0, 0, 155, 0, 0, 0, 0, 0, 155, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 155, 155, 0, 0, 0, 155,
                155, 155, 0, 0, 155, 0, 0, 0, 0, 5, 155, 155, 0, 0, 135, 0, 0, 0, 135, 0, 0, 0, 135, 0, 155, 155, 124, 0, 0, 155,
                155, 155, 0, 0, 155, 155, 0, 0, 0, 0, 155, 155, 0, 0, 155, 0, 0, 0, 155, 0, 0, 0, 155, 0, 155, 155, 0, 0, 0, 155,
                155, 155, 0, 0, 155, 155, 155, 0, 0, 0, 155, 155, 0, 0, 155, 0, 0, 100, 155, 76, 0, 0, 155, 0, 155, 155, 0, 0, 0, 155,
                155, 155, 0, 0, 155, 155, 155, 155, 0, 0, 155, 155, 0, 0, 155, 0, 0, 0, 155, 0, 0, 0, 155, 0, 155, 155, 0, 0, 0, 155,
                155, 155, 0, 0, 155, 155, 155, 155, 0, 0, 155, 155, 0, 0, 155, 0, 0, 0, 155, 0, 0, 0, 155, 0, 155, 155, 0, 0, 148, 155,
                155, 155, 0, 0, 155, 155, 155, 155, 0, 0, 155, 155, 0, 0, 155, 125, 125, 125, 155, 0, 0, 100, 155, 0, 155, 155, 0, 0, 0, 155,
                155, 155, 44, 44, 155, 155, 155, 155, 44, 44, 155, 155, 44, 44, 155, 44, 44, 44, 155, 44, 44, 44, 155, 44, 155, 155, 44, 44, 44, 155]
        }
    },
    "hard" : {}
}