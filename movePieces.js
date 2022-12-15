let movedPiece = ""
let moves = 0

let whitePieces = ["white_Rook_1", "white_Rook_2", "white_Knight_1", "white_Knight_2", "white_Bishop_1", "white_Bishop_2", "white_Queen", "white_King", "white_Pawn_1", "white_Pawn_2", "white_Pawn_3", "white_Pawn_4", "white_Pawn_5", "white_Pawn_6", "white_Pawn_7", "white_Pawn_8"]
let blackPieces = ["black_Rook_1", "black_Rook_2", "black_Knight_1", "black_Knight_2", "black_Bishop_1", "black_Bishop_2", "black_Queen", "black_King", "black_Pawn_1", "black_Pawn_2", "black_Pawn_3", "black_Pawn_4", "black_Pawn_5", "black_Pawn_6", "black_Pawn_7", "black_Pawn_8"]

let positions = {white_Rook_1: "H1", white_Rook_2: "A1", white_Knight_1: "G1", white_Knight_2: "B1", white_Bishop_1: "F1", white_Bishop_2: "C1", white_King: "E1", white_Queen: "D1", white_Pawn_1: "H2",  white_Pawn_2: "G2",  white_Pawn_3: "F2",  white_Pawn_4: "E2",  white_Pawn_5: "D2",  white_Pawn_6: "C2",  white_Pawn_7: "B2",  white_Pawn_8: "A2", black_Rook_1: "H8", black_Rook_2: "A8", black_Knight_1: "G8", black_Knight_2: "B8", black_Bishop_8: "F8", black_Bishop_2: "C8", black_King: "E8", black_Queen: "D8", black_Pawn_8: "H7",  black_Pawn_7: "G7",  black_Pawn_3: "F7",  black_Pawn_4: "E7",  black_Pawn_5: "D7",  black_Pawn_6: "C7",  black_Pawn_7: "B7",  black_Pawn_8: "A7"}

function alphToNum(alpha){
    switch(alpha){
        case "A":
            return 1

        case "B":
            return 2

        case "C":
            return 3

        case "D":
            return 4

        case "E":
            return 5

        case "F":
            return 6

        case "G":
            return 7

        case "H":
            return 8
    }
}

function piecePos(sqrPos, piecePos){
    const sqrNumPos = [alphToNum(sqrPos[0]), parseInt(sqrPos[1])]
    const pieceNumPos = [alphToNum(positions[piecePos][0]), parseInt(positions[piecePos][1])]
    const x = sqrNumPos[0] - pieceNumPos[0]
    const y = sqrNumPos[1] - pieceNumPos[1]
    let canMove = true

    console.log(sqrNumPos, pieceNumPos)

    for(let i in positions){
        let pos = [alphToNum(positions[i][0]), parseInt(positions[i][1])]

        if(pos.toString() == pieceNumPos.toString()){
            continue
        }

        if(sqrNumPos[0] == pieceNumPos[0]){
            if(pos[1] > pieceNumPos[1] && pos[1] < sqrNumPos[1] || pos[1] < pieceNumPos[1] && pos[1] > sqrNumPos[1]){
                canMove = false
                break
            }
            continue
        } 
        if(sqrNumPos[1] == pieceNumPos[1]){
            if(pos[0] > pieceNumPos[0] && pos[0] < sqrNumPos[0] || pos[0] < pieceNumPos[0] && pos[0] > sqrNumPos[0]){
                canMove = false
                break
            }
            continue
        } 
        if(Math.pow(x, 2) == Math.pow(y, 2)){
            let pieceX = sqrNumPos[0] - pos[0]
            let pieceY = sqrNumPos[1] - pos[1]
            if(Math.pow(pieceX, 2) === Math.pow(pieceY, 2)){
                if(x < 0 && y < 0 && pieceX < 0 && pieceY < 0){
                    canMove = false
                    break
                }
                if(x > 0 && y < 0 && pieceX > 0 && pieceY < 0){
                    canMove = false
                    break
                }
                if(x < 0 && y > 0 && pieceX < 0 && pieceY > 0){
                    canMove = false
                    break
                }
                if(x > 0 && y > 0 && pieceX > 0 && pieceY > 0){
                    canMove = false
                    break
                }
            }
            continue
        }

    }

    return canMove
}

function getPos(obj, ar){
    let x = 0
    switch(obj){
        case ar[0]:
            x = 432
            break

        case ar[1]:
            x = 372
            break

        case ar[2]:
            x = 312
            break

        case ar[3]:
            x = 252
            break

        case ar[4]:
            x = 192
            break

        case ar[5]:
            x = 132
            break
        
        case ar[6]:
            x = 72
            break

        case ar[7]:
            x = 12
            break
    }

    return x
}

function movePiece(obj){
    let id = obj.id

    if(movedPiece == id){
        movedPiece = ""
    } else{
        movedPiece = id
    }

    console.log(id)
}

function sqrsPressed(obj){
    let id = obj.id

    let y = getPos(id[1], ["1", "2", "3", "4", "5", "6", "7", "8"])
    let x = getPos(id[0], ["A", "B", "C", "D", "E", "F", "G", "H"])
    
    if(movedPiece){
        const sqrPosNum = [alphToNum(id[0]), parseInt(id[1])]
        const piecePosNum = [alphToNum(positions[movedPiece][0]), parseInt(positions[movedPiece][1])]
        let canMove = false

        switch(movedPiece.split("_")[1]){
            case "Rook":
                if(id[0] == positions[movedPiece][0] || id[1] == positions[movedPiece][1]) {
                    canMove = true
                }
                break

            case "Bishop":
                

                if(Math.pow(sqrPosNum[0] - piecePosNum[0], 2) == Math.pow(sqrPosNum[1] - piecePosNum[1], 2)){
                    canMove = true
                }
                break

            case "Queen":
                if(Math.pow(sqrPosNum[0] - piecePosNum[0], 2) == Math.pow(sqrPosNum[1] - piecePosNum[1], 2)){
                    canMove = true
                }

                if(id[0] == positions[movedPiece][0] || id[1] == positions[movedPiece][1]) {
                    canMove = true
                }
                break

            case "King":
                if(Math.pow(sqrPosNum[0] - piecePosNum[0], 2) == 1 && Math.pow(sqrPosNum[1] - piecePosNum[1], 2) == 1){
                    canMove = true
                }

                if(id[0] == positions[movedPiece][0] && Math.pow(parseInt(id[1]) - parseInt(positions[movedPiece][1]), 2) == 1 || id[1] == positions[movedPiece][1] && Math.pow(parseInt(alphToNum(id[0])) - parseInt(alphToNum(positions[movedPiece][0])), 2) == 1) {
                    canMove = true
                }
                break
                
        }

        if(canMove && piecePos(id, movedPiece)){
            let eatenPiece = null

            if(moves % 2 == 0){
                for(let i of whitePieces){
                    document.getElementById(i).style.pointerEvents = "none"
                }

                for(let i of blackPieces){
                    document.getElementById(i).style.pointerEvents = "auto"

                    if(positions[i] == id){
                        console.log("Eaten")
                        eatenPiece = i
                        document.getElementById(i).style.visibility = "hidden"
                    }
                }

                if(eatenPiece) blackPieces.splice(blackPieces.findIndex((element) => element == eatenPiece), 1)
            }
            if(moves % 2 == 1){
                for(let i of whitePieces){
                    document.getElementById(i).style.pointerEvents = "auto"

                    if(positions[i] == id){
                        console.log("Eaten")
                        eatenPiece = i
                        document.getElementById(i).style.visibility = "hidden"
                    }
                }

                if(eatenPiece) whitePieces.splice(whitePieces.findIndex((element) => element == eatenPiece), 1)

                for(let i of blackPieces){
                    document.getElementById(i).style.pointerEvents = "none"
                }

            }

            positions[movedPiece] = id

            moves++

            document.getElementById(movedPiece).style.top = `${y}px`
            document.getElementById(movedPiece).style.right = `${x}px`
            movedPiece = ""
        }
    }
}