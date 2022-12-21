let movedPiece = ""
let moves = 0
let canContinue = true
let doupleMove = ""
let num = 0


let morePieces = {Bishop: 3, Knight: 3, Rook: 3, Queen: 2}

let whitePieces = ["white_Rook_1", "white_Rook_2", "white_Knight_1", "white_Knight_2", "white_Bishop_1", "white_Bishop_2", "white_Queen", "white_King", "white_Pawn_1", "white_Pawn_2", "white_Pawn_3", "white_Pawn_4", "white_Pawn_5", "white_Pawn_6", "white_Pawn_7", "white_Pawn_8"]
let blackPieces = ["black_Rook_1", "black_Rook_2", "black_Knight_1", "black_Knight_2", "black_Bishop_1", "black_Bishop_2", "black_Queen", "black_King", "black_Pawn_1", "black_Pawn_2", "black_Pawn_3", "black_Pawn_4", "black_Pawn_5", "black_Pawn_6", "black_Pawn_7", "black_Pawn_8"]

let moved = {white_Rook_1: false, white_Rook_2: false, white_King: false, white_Pawn_1: false, white_Pawn_2: false, white_Pawn_3: false, white_Pawn_4: false, white_Pawn_5: false, white_Pawn_6: false, white_Pawn_7: false, white_Pawn_8: false, black_Rook_1: false, black_Rook_2: false, black_King: false, black_Pawn_1: false, black_Pawn_2: false, black_Pawn_3: false, black_Pawn_4: false, black_Pawn_5: false, black_Pawn_6: false, black_Pawn_7: false, black_Pawn_8: false}

let positions = {white_Rook_1: "H1", white_Rook_2: "A1", white_Knight_1: "G1", white_Knight_2: "B1", white_Bishop_1: "F1", white_Bishop_2: "C1", white_King: "E1", white_Queen: "D1", white_Pawn_1: "H2",  white_Pawn_2: "G2",  white_Pawn_3: "F2",  white_Pawn_4: "E2",  white_Pawn_5: "D2",  white_Pawn_6: "C2",  white_Pawn_7: "B2",  white_Pawn_8: "A2", black_Rook_1: "H8", black_Rook_2: "A8", black_Knight_1: "G8", black_Knight_2: "B8", black_Bishop_1: "F8", black_Bishop_2: "C8", black_King: "E8", black_Queen: "D8", black_Pawn_1: "H7",  black_Pawn_2: "G7",  black_Pawn_3: "F7",  black_Pawn_4: "E7",  black_Pawn_5: "D7",  black_Pawn_6: "C7",  black_Pawn_7: "B7",  black_Pawn_8: "A7"}

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

function piecePos(sqrPos, piecePos, type, sqr){
    const sqrNumPos = [alphToNum(sqrPos[0]), parseInt(sqrPos[1])]
    const pieceNumPos = [alphToNum(positions[piecePos][0]), parseInt(positions[piecePos][1])]
    const x = sqrNumPos[0] - pieceNumPos[0]
    const y = sqrNumPos[1] - pieceNumPos[1]
    let canMove = true
    let pieceDiagonaly = false
    let movedDiagonaly = false

    for(let i in positions){
        let pos = [alphToNum(positions[i][0]), parseInt(positions[i][1])]

        if(i == movedPiece && sqr){
            pos = [alphToNum(sqr[0]), parseInt(sqr[1])]
        }

        if(positions[i] == sqr){
            canMove = false
            break
        }

        if(pos.toString() == pieceNumPos.toString()){
            continue
        }

        if(type == "Pawn"){
            if(sqrNumPos[0] == pieceNumPos[0]){
                if(pos[1] == sqrNumPos[1] && pos[0] == sqrNumPos[0]){
                    canMove = false
                    break
                }
                continue
            } 

            if(Math.pow(x, 2) == Math.pow(y, 2)){
                let pieceX = sqrNumPos[0] - pos[0]
                let pieceY = sqrNumPos[1] - pos[1]

                if(Math.pow(pieceX, 2) == Math.pow(pieceY, 2)){
                    if(pieceX == 0){
                        pieceDiagonaly = true
                        break
                    }                 
                }

                if(doupleMove){
                    if(doupleMove[0] == sqrPos[0] && parseInt(doupleMove[1]) == pieceNumPos[1] && num == 0){
                        pieceDiagonaly = true
                    }
                }

                movedDiagonaly = true
            }

            continue
        }

        if(sqrNumPos[0] == pieceNumPos[0]){
            if(pos[1] > pieceNumPos[1] && pos[1] < sqrNumPos[1] && pos[0] == sqrNumPos[0] || pos[1] < pieceNumPos[1] && pos[1] > sqrNumPos[1] && pos[0] == sqrNumPos[0]){
                canMove = false
                break
            }
            continue
        } 
        if(sqrNumPos[1] == pieceNumPos[1]){
            if(pos[0] > pieceNumPos[0] && pos[0] < sqrNumPos[0] && pos[1] == sqrNumPos[1]|| pos[0] < pieceNumPos[0] && pos[0] > sqrNumPos[0] && pos[1] == sqrNumPos[1]){
                canMove = false
                break
            }
            continue
        } 
        if(Math.pow(x, 2) == Math.pow(y, 2)){
            let pieceX = sqrNumPos[0] - pos[0]
            let pieceY = sqrNumPos[1] - pos[1]
            if(Math.pow(pieceX, 2) == Math.pow(pieceY, 2)){
                if(x < 0 && y < 0 && pieceX < 0 && pieceY < 0 && x < pieceX && y < pieceY){
                    canMove = false
                    break
                }
                if(x > 0 && y < 0 && pieceX > 0 && pieceY < 0 && x > pieceX && y < pieceY){
                    canMove = false
                    break
                }
                if(x < 0 && y > 0 && pieceX < 0 && pieceY > 0 && x < pieceX && y > pieceY){
                    canMove = false
                    break
                }
                if(x > 0 && y > 0 && pieceX > 0 && pieceY > 0 && x > pieceX && y > pieceY){
                    canMove = false
                    break
                }
            }
            continue
        }

    }

    canMove = pieceDiagonaly ? true : (movedDiagonaly ? false : canMove)

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

    if(movedPiece == id && canContinue){
        movedPiece = ""
        document.getElementById(id).style.opacity = 1
    } else if(canContinue){
        if(movedPiece){
            document.getElementById(movedPiece).style.opacity = 1
        }
        movedPiece = id
        document.getElementById(id).style.opacity = 0.7
    }

    console.log(id)
}

function changePawn(toChange){
    let color = "white"
    if(moves % 2 == 1) color = "black"

    document.getElementById("pawnUpgrades").style.visibility = "hidden"
    positions[`${color}_${toChange}_${morePieces[toChange]}`] = positions[movedPiece]
    delete positions[movedPiece]
    if(color == "white"){
        whitePieces.push(`${color}_${toChange}_${morePieces[toChange]}`)
        whitePieces.splice(whitePieces.findIndex((element) => element == movedPiece), 1)
    } else {
        blackPieces.push(`${color}_${toChange}_${morePieces[toChange]}`)
        blackPieces.splice(blackPieces.findIndex((element) => element == movedPiece), 1)
    }
    document.getElementById(movedPiece).src = `images/${toChange.toLowerCase()}_${color}.png`
    document.getElementById(movedPiece).style.opacity = 1
    document.getElementById(movedPiece).id = `${color}_${toChange}_${morePieces[toChange]}`
    movedPiece = ""
    canContinue = true
    moves += 1
}

function upgradePawn(white, x){
    if(white){
        document.getElementById("bishop").src = "images/bishop_white.png"
        document.getElementById("knight").src = "images/knight_white.png"
        document.getElementById("rook").src = "images/rook_white.png"
        document.getElementById("queen").src = "images/queen_white.png"
        document.getElementById(movedPiece).style.top = "12px"
        positions[movedPiece] = x + "8"
    } else {
        document.getElementById("bishop").src = "images/bishop_black.png"
        document.getElementById("knight").src = "images/knight_black.png"
        document.getElementById("rook").src = "images/rook_black.png"
        document.getElementById("queen").src = "images/queen_black.png"
        document.getElementById(movedPiece).style.top = "432px"
        positions[movedPiece] = x + "1"
    }

    eat(positions[movedPiece], false)
    document.getElementById(movedPiece).style.right = `${getPos(x, ["A", "B", "C", "D", "E", "F", "G", "H"])}px`
    document.getElementById("pawnUpgrades").style.visibility = "visible"
}

function eat(id, castle){
    let eatenPiece = null

    if(moves % 2 == 0){
        for(let i of whitePieces){
            document.getElementById(i).style.pointerEvents = "none"
        }

        for(let i of blackPieces){
            document.getElementById(i).style.pointerEvents = "auto"

            if(positions[i] == id){
                eatenPiece = i
                document.getElementById(i).style.visibility = "hidden"
            }
        }

        if(eatenPiece && !castle) {
            blackPieces.splice(blackPieces.findIndex((element) => element == eatenPiece), 1)
            delete positions[eatenPiece]
        }
    }
    if(moves % 2 == 1){
        for(let i of whitePieces){
            document.getElementById(i).style.pointerEvents = "auto"

            if(positions[i] == id){
                eatenPiece = i
                document.getElementById(i).style.visibility = "hidden"
            }
        }

        if(eatenPiece && !castle) {
            whitePieces.splice(whitePieces.findIndex((element) => element == eatenPiece), 1)
            delete positions[eatenPiece]
        }

        for(let i of blackPieces){
            document.getElementById(i).style.pointerEvents = "none"
        }

    }
}

function check(kingPos, white, ignore, sqr){
    let kingNumPos = [alphToNum(kingPos[0]), parseInt(kingPos[1])]
    let inCheck = false
    let canMove = false
    let hopOver = false
    console.log(kingPos, sqr)

    for(let i in positions){
        canMove = false
        hopOver = false

        let pos = positions[i]
        let numPos = [alphToNum(pos[0]), parseInt(pos[1])]
        if(white && i[0] == "w"){
            continue
        }
        if(!white && i[0] == "b"){
            continue
        }
        console.log(pos)

        switch(i.split("_")[1]){
            case "Rook":
                if(kingPos[0] == pos[0] || kingPos[1] == pos[1]) {
                    canMove = true
                }
                break

            case "Bishop":
                if(Math.pow(kingNumPos[0] - numPos[0], 2) == Math.pow(kingNumPos[1] - numPos[1], 2)){
                    canMove = true
                }
                break

            case "Queen":
                if(Math.pow(kingNumPos[0] - numPos[0], 2) == Math.pow(kingNumPos[1] - numPos[1], 2)){
                    canMove = true
                }

                if(kingPos[0] == pos[0] || kingPos[1] == pos[1]) {
                    canMove = true
                }
                break

            case "King":
                if(Math.pow(kingNumPos[0] - numPos[0], 2) == 1 && Math.pow(kingNumPos[1] - numPos[1], 2) == 1){
                    canMove = true
                }

                if(kingPos[0] == pos[0] && Math.pow(parseInt(kingPos[1]) - parseInt(pos[1]), 2) == 1 || kingPos[1] == pos[1] && Math.pow(parseInt(alphToNum(kingPos[0])) - parseInt(alphToNum(pos[0])), 2) == 1) {
                    canMove = true
                }
                break

            case "Pawn":
                if(moves % 2 == 0 && kingNumPos[0] - numPos[0] == 1 && kingNumPos[1] - numPos[1] == 1 || moves % 2 == 0 && kingNumPos[0] - numPos[0] == -1 && kingNumPos[1] - numPos[1] == 1 || moves % 2 == 1 && kingNumPos[0] - numPos[0] == 1 && kingNumPos[1] - numPos[1] == -1 || moves % 2 == 1 && kingNumPos[0] - numPos[0] == -1 && kingNumPos[1] - numPos[1] == -1){
                    canMove = true
                }

                if(moves % 2 == 0 && kingNumPos[0] - numPos[0] == 1 && kingNumPos[1] - numPos[1] == 1 || moves % 2 == 0 && kingNumPos[0] - numPos[0] == -1 && kingNumPos[1] - numPos[1] == 1 || moves % 2 == 1 && kingNumPos[0] - numPos[0] == 1 && kingNumPos[1] - numPos[1] == -1 || moves % 2 == 1 && kingNumPos[0] - numPos[0] == -1 && kingNumPos[1] - numPos[1] == -1){
                    canMove = true
                }

                break

            case "Knight":

                let posX = Math.pow(kingNumPos[0] - numPos[0], 2)
                let posY = Math.pow(kingNumPos[1] - numPos[1], 2)
                hopOver = true


                if(posX == 4 && posY == 1 || posX == 1 && posY == 4 ){
                    hopOver = true
                }
                break
                
        }

        let type = i.split("_")[1]
        if(piecePos(kingPos, i, type, sqr) && !hopOver && canMove){
            inCheck = true
        }
    }

    return inCheck
}

function sqrsPressed(obj){
    let id = obj.id

    let y = getPos(id[1], ["1", "2", "3", "4", "5", "6", "7", "8"])
    let x = getPos(id[0], ["A", "B", "C", "D", "E", "F", "G", "H"])
    
    if(movedPiece){
        const sqrPosNum = [alphToNum(id[0]), parseInt(id[1])]
        const piecePosNum = [alphToNum(positions[movedPiece][0]), parseInt(positions[movedPiece][1])]
        let canMove = false
        let pieceType = null
        let hopOver = false
        let movedDouble = false
        let movedDiagonaly = false

        switch(movedPiece.split("_")[1]){
            case "Rook":
                if(id[0] == positions[movedPiece][0] || id[1] == positions[movedPiece][1]) {
                    canMove = true
                    if(piecePos(id, movedPiece, pieceType)){
                        if(moved[movedPiece] == false){
                            moved[movedPiece] = true
                        }
                    }
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
                if(!moved[movedPiece]){
                    if(moves % 2 == 0){
                        if(id == "G1" && !moved["white_Rook_1"]){
                            if(piecePos(id, movedPiece, pieceType)){
                                document.getElementById("white_Rook_1").style.right = `132px`
                                document.getElementById(movedPiece).style.right = `${x}px`
                                document.getElementById(movedPiece).style.opacity = 1
                                eat(positions[movedPiece], true)
                                moves++
                                num++
                                moved[movedPieces] = true
                                positions[movedPiece] = id
                                movedPiece = ""
                                positions["white_Rook_1"] = "F1"
                                return
                            }
                        }
                        else if(id == "C1" && !moved["white_Rook_2"]){
                            if(piecePos(id, movedPiece, pieceType)){
                                document.getElementById(movedPiece).style.opacity = 1
                                document.getElementById("white_Rook_2").style.right = `312px`
                                moved[movedPieces] = true
                                eat(positions[movedPiece], true)
                                document.getElementById(movedPiece).style.right = `${x}px`
                                num++
                                moves++
                                positions[movedPiece] = id
                                movedPiece = ""
                                positions["white_Rook_2"] = "D1"
                                return
                            }
                        }
                    }
                    else if(moves % 2 == 1){
                        if(id == "G8" && !moved["black_Rook_1"]){
                            if(piecePos(id, movedPiece, pieceType)){
                                document.getElementById(movedPiece).style.opacity = 1
                                document.getElementById("black_Rook_1").style.right = `132px`
                                moved[movedPieces] = true
                                eat(positions[movedPiece], true)
                                document.getElementById(movedPiece).style.right = `${x}px`
                                num++
                                moves++
                                positions[movedPiece] = id
                                movedPiece = ""
                                positions["black_Rook_1"] = "F8"
                                return
                            }
                        }
                        else if(id == "C8" && !moved["black_Rook_2"]){
                            if(piecePos(id, movedPiece, pieceType)){
                                document.getElementById(movedPiece).style.opacity = 1
                                document.getElementById("black_Rook_2").style.right = `312px`
                                moved[movedPieces] = true
                                eat(positions[movedPiece], true)
                                document.getElementById(movedPiece).style.right = `${x}px`
                                num++
                                moves++
                                positions[movedPiece] = id
                                movedPiece = ""
                                positions["black_Rook_2"] = "D8"
                                return
                            }
                        }
                    }
                }

                if(Math.pow(sqrPosNum[0] - piecePosNum[0], 2) == 1 && Math.pow(sqrPosNum[1] - piecePosNum[1], 2) == 1){
                    canMove = true
                }

                if(id[0] == positions[movedPiece][0] && Math.pow(parseInt(id[1]) - parseInt(positions[movedPiece][1]), 2) == 1 || id[1] == positions[movedPiece][1] && Math.pow(parseInt(alphToNum(id[0])) - parseInt(alphToNum(positions[movedPiece][0])), 2) == 1) {
                    canMove = true
                }
                break

            case "Pawn":
                pieceType =  "Pawn"

                if(!moved[movedPiece]){
                    if(id[0] == positions[movedPiece][0] && parseInt(id[1]) - parseInt(positions[movedPiece][1]) == 2 && moves % 2 == 0 || id[0] == positions[movedPiece][0] && parseInt(id[1]) - parseInt(positions[movedPiece][1]) == -2 && moves % 2 == 1){
                        canMove = true
                        movedDouble = true
                    }
                }

                if(id[0] == positions[movedPiece][0] && parseInt(id[1]) - parseInt(positions[movedPiece][1]) == 1 && moves % 2 == 0 || id[0] == positions[movedPiece][0] && parseInt(id[1]) - parseInt(positions[movedPiece][1]) == -1 && moves % 2 == 1){
                    canMove = true

                    if(moves % 2 == 0 && piecePos(id, movedPiece, pieceType)){
                        if(id[1] == "8"){
                            upgradePawn(true, id[0])
                            canContinue = false
                            return
                        }
                    } else if(piecePos(id, movedPiece, pieceType)){
                        if(id[1] == "1"){
                            upgradePawn(false, id[0])
                            canContinue = false
                            return
                        }
                    }
                }

                if(moves % 2 == 0 && sqrPosNum[0] - piecePosNum[0] == 1 && sqrPosNum[1] - piecePosNum[1] == 1 || moves % 2 == 0 && sqrPosNum[0] - piecePosNum[0] == -1 && sqrPosNum[1] - piecePosNum[1] == 1 || moves % 2 == 1 && sqrPosNum[0] - piecePosNum[0] == 1 && sqrPosNum[1] - piecePosNum[1] == -1 || moves % 2 == 1 && sqrPosNum[0] - piecePosNum[0] == -1 && sqrPosNum[1] - piecePosNum[1] == -1){
                    canMove = true
                    if(moves % 2 == 0 && id[1] == "6" || moves % 2 == 1 && id[1] == "3") {
                        movedDiagonaly = true
                    }

                    if(moves % 2 == 0 && piecePos(id, movedPiece, pieceType)){
                        if(id[1] == "8"){
                            upgradePawn(true, id[0])
                            canContinue = false
                            return
                        }
                    } else if(piecePos(id, movedPiece, pieceType)){
                        if(id[1] == "1"){
                            upgradePawn(false, id[0])
                            canContinue = false
                            return
                        }
                    }
                }

                break

            case "Knight":
                pieceType =  "Knight"

                let posX = Math.pow(sqrPosNum[0] - piecePosNum[0], 2)
                let posY = Math.pow(sqrPosNum[1] - piecePosNum[1], 2)

                if(posX == 4 && posY == 1 || posX == 1 && posY == 4 ){
                    hopOver = true
                }
                break
                
        }
        let king = "black_King"

        if(moves % 2 == 0) king = "white_King"

        if(canMove && piecePos(id, movedPiece, pieceType) && canContinue && !check(positions[king], moves % 2 == 0, king, id) || hopOver && canContinue && !check(positions[king], moves % 2 == 0, king, id)){
            num++

            if(movedDouble){
                num = 0
                moved[movedPiece] = true
                doupleMove = id
            }   

            if(doupleMove[0] == id[0] && movedDiagonaly && num == 1){
                let newId = ""

                if(moves % 2 == 0){
                    newId = id[0] + "5"
                } else{
                    newId = id[0] + "4"
                }

                eat(newId, false)
            } else {
                eat(id, false)
            }

            positions[movedPiece] = id

            moves++

            document.getElementById(movedPiece).style.top = `${y}px`
            document.getElementById(movedPiece).style.right = `${x}px`
            document.getElementById(movedPiece).style.opacity = 1

            movedPiece = ""
        } else{
            document.getElementById(movedPiece).style.opacity = 1
            movedPiece = ""
        }
    }
}