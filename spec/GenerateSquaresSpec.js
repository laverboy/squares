describe("Generate Squares", function () {

    describe("Boxes", function () {
        it("generates 1 box for grid type 1", function () {
            var squares = GenerateSquares(1);
            expect(squares.boxes.length).toBe(1);
        });

        it("generates 1 box with box1 values for grid type 1", function () {
            var squares = GenerateSquares(1);
            expect(squares.boxes[0].x).toBe(1);
            expect(squares.boxes[0].y).toBe(1);
            expect(squares.boxes[0].won).toBe(false);
            expect(squares.boxes[0].color).toBe('');
        });

        it("generates 4 boxes for grid type 2", function () {
            var squares = GenerateSquares(2);
            expect(squares.boxes.length).toBe(4);
        });

        it("generates 4 boxes with proper values for grid type 2", function () {
            var expected = [
                {x: 1, y: 1, won: false, color: ''},
                {x: 1, y: 2, won: false, color: ''},
                {x: 2, y: 1, won: false, color: ''},
                {x: 2, y: 2, won: false, color: ''}
            ];
            var squares = GenerateSquares(2);
            expect(squares.boxes).toEqual(expected);
        });

        it("generates 9 boxes for grid type 3", function () {
            var squares = GenerateSquares(3);
            expect(squares.boxes.length).toBe(9);
        });

        it("generates 9 boxes with proper values for grid type 3", function () {
            var expected = [
                {x: 1, y: 1, won: false, color: ''},
                {x: 1, y: 2, won: false, color: ''},
                {x: 1, y: 3, won: false, color: ''},
                {x: 2, y: 1, won: false, color: ''},
                {x: 2, y: 2, won: false, color: ''},
                {x: 2, y: 3, won: false, color: ''},
                {x: 3, y: 1, won: false, color: ''},
                {x: 3, y: 2, won: false, color: ''},
                {x: 3, y: 3, won: false, color: ''}
            ];
            var squares = GenerateSquares(3);
            expect(squares.boxes).toEqual(expected);
        });

        it("generates 16 boxes for grid type 4", function () {
            var squares = GenerateSquares(4);
            expect(squares.boxes.length).toBe(16);
        });

        it("generates 16 boxes with proper values for grid type 4", function () {
            var expected = [
                {x: 1, y: 1, won: false, color: ''},
                {x: 1, y: 2, won: false, color: ''},
                {x: 1, y: 3, won: false, color: ''},
                {x: 1, y: 4, won: false, color: ''},
                {x: 2, y: 1, won: false, color: ''},
                {x: 2, y: 2, won: false, color: ''},
                {x: 2, y: 3, won: false, color: ''},
                {x: 2, y: 4, won: false, color: ''},
                {x: 3, y: 1, won: false, color: ''},
                {x: 3, y: 2, won: false, color: ''},
                {x: 3, y: 3, won: false, color: ''},
                {x: 3, y: 4, won: false, color: ''},
                {x: 4, y: 1, won: false, color: ''},
                {x: 4, y: 2, won: false, color: ''},
                {x: 4, y: 3, won: false, color: ''},
                {x: 4, y: 4, won: false, color: ''}
            ];
            var squares = GenerateSquares(4);
            expect(squares.boxes).toEqual(expected);
        });
    });

    describe("Dots", function () {
        it("generates 4 dots for grid type 1", function () {
            var squares = GenerateSquares(1);
            expect(squares.dots.length).toBe(4);
        });

        it("generates 4 dots with proper values for grid type 1", function () {
            var expected = [
                {x: 0, y: 0},
                {x: 0, y: 1},
                {x: 1, y: 0},
                {x: 1, y: 1}
            ];
            var squares = GenerateSquares(1);
            expect(squares.dots).toEqual(expected);
        });

        it("generates 9 dots for grid type 2", function () {
            var squares = GenerateSquares(2);
            expect(squares.dots.length).toBe(9);
        });

        it("generates 9 dots with proper values for grid type 2", function () {
            var expected = [
                {x: 0, y: 0},
                {x: 0, y: 1},
                {x: 0, y: 2},
                {x: 1, y: 0},
                {x: 1, y: 1},
                {x: 1, y: 2},
                {x: 2, y: 0},
                {x: 2, y: 1},
                {x: 2, y: 2}
            ];
            var squares = GenerateSquares(2);
            expect(squares.dots).toEqual(expected);
        });

        it("generates 16 dots for grid type 3", function () {
            var squares = GenerateSquares(3);
            expect(squares.dots.length).toBe(16);
        });

        it("generates 16 dots with proper values for grid type 3", function () {
            var expected = [
                {x: 0, y: 0},
                {x: 0, y: 1},
                {x: 0, y: 2},
                {x: 0, y: 3},
                {x: 1, y: 0},
                {x: 1, y: 1},
                {x: 1, y: 2},
                {x: 1, y: 3},
                {x: 2, y: 0},
                {x: 2, y: 1},
                {x: 2, y: 2},
                {x: 2, y: 3},
                {x: 3, y: 0},
                {x: 3, y: 1},
                {x: 3, y: 2},
                {x: 3, y: 3}
            ];
            var squares = GenerateSquares(3);
            expect(squares.dots).toEqual(expected);
        });

        it("generates 25 dots for grid type 4", function () {
            var squares = GenerateSquares(4);
            expect(squares.dots.length).toBe(25);
        });

        it("generates 25 dots with proper values for grid type 4", function () {
            var expected = [
                {x: 0, y: 0},
                {x: 0, y: 1},
                {x: 0, y: 2},
                {x: 0, y: 3},
                {x: 0, y: 4},
                {x: 1, y: 0},
                {x: 1, y: 1},
                {x: 1, y: 2},
                {x: 1, y: 3},
                {x: 1, y: 4},
                {x: 2, y: 0},
                {x: 2, y: 1},
                {x: 2, y: 2},
                {x: 2, y: 3},
                {x: 2, y: 4},
                {x: 3, y: 0},
                {x: 3, y: 1},
                {x: 3, y: 2},
                {x: 3, y: 3},
                {x: 3, y: 4},
                {x: 4, y: 0},
                {x: 4, y: 1},
                {x: 4, y: 2},
                {x: 4, y: 3},
                {x: 4, y: 4}
            ];
            var squares = GenerateSquares(4);
            expect(squares.dots).toEqual(expected);
        });
    });

    describe("Lines", function () {
        it("creates 4 lines for grid type 1", function () {
            var squares = GenerateSquares(1);
            expect(squares.lines.length).toBe(4);
        });

        it("creates 4 lines with proper values for grid type 1", function () {
            var expected = [
                {x: 0, y: 1, d: 'e', active: false},
                {x: 1, y: 0, d: 's', active: false},
                {x: 1, y: 1, d: 'e', active: false},
                {x: 1, y: 1, d: 's', active: false}
            ];
            var squares = GenerateSquares(1);
            expect(squares.lines).toEqual(expected);
        });

        it("creates 12 lines for grid type 2", function () {
            var squares = GenerateSquares(2);
            expect(squares.lines.length).toBe(12);
        });

        it("creates 12 lines with proper values for grid type 2", function () {
            var expected = [
                {x: 0, y: 1, d: 'e', active: false},
                {x: 0, y: 2, d: 'e', active: false},
                {x: 1, y: 0, d: 's', active: false},
                {x: 1, y: 1, d: 'e', active: false},
                {x: 1, y: 1, d: 's', active: false},
                {x: 1, y: 2, d: 'e', active: false},
                {x: 1, y: 2, d: 's', active: false},
                {x: 2, y: 0, d: 's', active: false},
                {x: 2, y: 1, d: 'e', active: false},
                {x: 2, y: 1, d: 's', active: false},
                {x: 2, y: 2, d: 'e', active: false},
                {x: 2, y: 2, d: 's', active: false}
            ];
            var squares = GenerateSquares(2);
            expect(squares.lines).toEqual(expected);
        });

        it("creates 24 lines for grid type 3", function () {
            var squares = GenerateSquares(3);
            expect(squares.lines.length).toBe(24);
        });

        it("creates 24 lines with proper values for grid type 3", function () {
            var expected = [
                {x: 0, y: 1, d: 'e', active: false},
                {x: 0, y: 2, d: 'e', active: false},
                {x: 0, y: 3, d: 'e', active: false},
                {x: 1, y: 0, d: 's', active: false},
                {x: 1, y: 1, d: 'e', active: false},
                {x: 1, y: 1, d: 's', active: false},
                {x: 1, y: 2, d: 'e', active: false},
                {x: 1, y: 2, d: 's', active: false},
                {x: 1, y: 3, d: 'e', active: false},
                {x: 1, y: 3, d: 's', active: false},
                {x: 2, y: 0, d: 's', active: false},
                {x: 2, y: 1, d: 'e', active: false},
                {x: 2, y: 1, d: 's', active: false},
                {x: 2, y: 2, d: 'e', active: false},
                {x: 2, y: 2, d: 's', active: false},
                {x: 2, y: 3, d: 'e', active: false},
                {x: 2, y: 3, d: 's', active: false},
                {x: 3, y: 0, d: 's', active: false},
                {x: 3, y: 1, d: 'e', active: false},
                {x: 3, y: 1, d: 's', active: false},
                {x: 3, y: 2, d: 'e', active: false},
                {x: 3, y: 2, d: 's', active: false},
                {x: 3, y: 3, d: 'e', active: false},
                {x: 3, y: 3, d: 's', active: false}
            ];
            var squares = GenerateSquares(3);
            expect(squares.lines).toEqual(expected);
        });

        it("creates 40 lines for grid type 4", function () {
            var squares = GenerateSquares(4);
            expect(squares.lines.length).toBe(40);
        });

        it("creates 40 lines with proper values for grid type 4", function () {
            var expected = [
                {x: 0, y: 1, d: 'e', active: false},
                {x: 0, y: 2, d: 'e', active: false},
                {x: 0, y: 3, d: 'e', active: false},
                {x: 0, y: 4, d: 'e', active: false},
                {x: 1, y: 0, d: 's', active: false},
                {x: 1, y: 1, d: 'e', active: false},
                {x: 1, y: 1, d: 's', active: false},
                {x: 1, y: 2, d: 'e', active: false},
                {x: 1, y: 2, d: 's', active: false},
                {x: 1, y: 3, d: 'e', active: false},
                {x: 1, y: 3, d: 's', active: false},
                {x: 1, y: 4, d: 'e', active: false},
                {x: 1, y: 4, d: 's', active: false},
                {x: 2, y: 0, d: 's', active: false},
                {x: 2, y: 1, d: 'e', active: false},
                {x: 2, y: 1, d: 's', active: false},
                {x: 2, y: 2, d: 'e', active: false},
                {x: 2, y: 2, d: 's', active: false},
                {x: 2, y: 3, d: 'e', active: false},
                {x: 2, y: 3, d: 's', active: false},
                {x: 2, y: 4, d: 'e', active: false},
                {x: 2, y: 4, d: 's', active: false},
                {x: 3, y: 0, d: 's', active: false},
                {x: 3, y: 1, d: 'e', active: false},
                {x: 3, y: 1, d: 's', active: false},
                {x: 3, y: 2, d: 'e', active: false},
                {x: 3, y: 2, d: 's', active: false},
                {x: 3, y: 3, d: 'e', active: false},
                {x: 3, y: 3, d: 's', active: false},
                {x: 3, y: 4, d: 'e', active: false},
                {x: 3, y: 4, d: 's', active: false},
                {x: 4, y: 0, d: 's', active: false},
                {x: 4, y: 1, d: 'e', active: false},
                {x: 4, y: 1, d: 's', active: false},
                {x: 4, y: 2, d: 'e', active: false},
                {x: 4, y: 2, d: 's', active: false},
                {x: 4, y: 3, d: 'e', active: false},
                {x: 4, y: 3, d: 's', active: false},
                {x: 4, y: 4, d: 'e', active: false},
                {x: 4, y: 4, d: 's', active: false}
            ];
            var squares = GenerateSquares(4);
            expect(squares.lines).toEqual(expected);
        });

    });

});