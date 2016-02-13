var GenerateDots = function (grid) {
    var dots = [];
    for (var x = 0; x <= grid; x++) {
        for (var y = 0; y <= grid; y++) {
            dots.push({x: x, y: y})
        }
    }
    return dots;
};

var GenerateBoxes = function (grid) {
    var boxes = [];
    for (var x = 1; x <= grid; x++) {
        for (var y = 1; y <= grid; y++) {
            boxes.push({x: x, y: y, won: false, color: ''})
        }
    }
    return boxes;
};

var GenerateLines = function (grid) {
    var lines = [];
    for (var x = 0; x <= grid; x++) {
        for (var y = 0; y <= grid; y++) {
            if (y != 0) {
                lines.push({x: x, y: y, d: 'e', active: false});
            }
            if (x != 0) {
                lines.push({x: x, y: y, d: 's', active: false});
            }
        }
    }
    return lines;
};

var GenerateSquares = function (grid) {
    var squares = {};

    squares.dots = GenerateDots(grid);
    squares.boxes = GenerateBoxes(grid);
    squares.lines = GenerateLines(grid);

    return squares;
};
